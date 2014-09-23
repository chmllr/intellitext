(ns intellitext.core
  (:require
    [intellitext.mca :as mca]
    [clojure.string :as string]
    [ajax.core :refer [GET]]))

(enable-console-print!)

(defn handler [response]
  (println 
    "corpus loaded"
    { 
     :bytes (count response) 
     :words (count (string/split response #" "))
     :lines (count (string/split response #"\n"))
     })
  (def chain (get-chain response)))

(GET "/corpus.txt" {:handler handler})

(defn sterilize [corpus]
  (let [ln (count corpus)
        pure-text (apply str (remove #(re-matches #"[,:\"'\-\(\)\*;]" %) corpus))
        normalized (string/replace pure-text #"(\t+|\n+|\r+|\s+)" " ")
        new-ln (count normalized)]
    (println "corpus sterilized, reduced from" ln "to" new-ln "chars (" (* 100 (/ new-ln ln)) "percent )")
    normalized))

(defn get-chain [corpus]
  (let [corpus (.toUpperCase (sterilize corpus))
        corpus (string/replace corpus #"([\.!\?])" " $1")
        input (string/split corpus #"\s+") 
        start (js/Date.)
        chain (mca/compute input)
        ms (- (js/Date.) start)]
    (print "computed markov chain in" ms "ms")
    (print "unique words discovered" (count (keys chain)))
    chain))

(defn getJSChain [corpus]
  (clj->js (get-chain corpus)))

(defn get-sentence [start]
  (apply str 
         (interpose " "
                    (take-while #(not (#{"!" "?" "." nil} %)) 
                          (iterate #(mca/step chain %)
                                   (.toUpperCase start))))))
