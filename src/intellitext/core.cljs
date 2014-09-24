(ns intellitext.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [cljs.core.async :as async :refer [>! <! put! chan alts!]]
    [goog.events :as events]
    [goog.dom :as dom]
    [intellitext.mca :as mca]
    [clojure.string :as string]
    [ajax.core :refer [GET]]))

(enable-console-print!)

(def key-presses (chan))

(def input-field (dom/getElement "input"))
(def cells (map #(dom/getElement (str "cell" %)) [0 1 2]))

(defn make-suggestion []
  (let [input (string/upper-case 
                (last (string/split (.-value input-field) #" ")))
        suggestions (take 100 (repeatedly #(mca/step chain input)))
        suggestions (take 3 (distinct suggestions))
        ]
    (doseq [[cell word] (map list cells suggestions)]
      (set! (.-innerHTML cell) word))))

(go (while true
      (when (= 32 (.-charCode (<! key-presses)))
        (make-suggestion))))

(events/listen (dom/getElement "input") "keypress"
               (fn [e] (put! key-presses e)))

(defn- log [& strings]
  (let [tableau (dom/getElement "tableau")
        content (.-innerHTML tableau)]
    (set! (.-innerText tableau)
          (apply str content "\n" 
                 (interpose " " strings)))))

(defn- sterilize [corpus]
  (let [ln (count corpus)
        pure-text (apply str (remove #(re-matches #"[\"'\-\(\)\*]" %) corpus))
        normalized (string/replace pure-text #"(\t+|\n+|\r+|\s+)" " ")
        new-ln (count normalized)]
    (log "corpus sterilized, reduced from" ln "to" new-ln "chars (" (* 100 (/ new-ln ln)) "percent )")
    normalized))

(defn get-chain [corpus]
  (let [corpus (.toUpperCase (sterilize corpus))
        corpus (string/replace corpus #"([\.!\?,:;])" " $1")
        input (string/split corpus #"\s+") 
        start (js/Date.)
        chain (mca/compute input)
        ms (- (js/Date.) start)]
    (log "markov chain computed in" ms "ms")
    (log "unique words discovered:" (count (keys chain)))
    chain))

(def getJSChain #(-> % get-chain clj->js))

(defn- take-while-with [pred sq]
  (loop [body sq result []]
    (let [head (first body)
          new-result (conj result head)]
      (if (pred head)
        (recur (rest body) new-result)
        new-result))))

(defn get-sentence [start]
  (string/replace
    (apply str 
           (interpose " "
                      (take-while-with
                        #(and % (not (#{"!" "?" "."} %))) 
                        (iterate #(mca/step chain %)
                                 (string/upper-case start)))))
    #" ([\.!\?,:;])" "$1"))

(defn- handler [response]
  (log 
    "corpus loaded"
    { :bytes (count response) 
      :words (count (string/split response #" "))
      :lines (count (string/split response #"\n")) })
  (def chain (get-chain response)))

(log "downloading the corpus from '/corpus.txt'...")
(GET "/corpus.txt" {:handler handler})

