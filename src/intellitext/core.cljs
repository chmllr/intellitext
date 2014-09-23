(ns intellitext.core
  (:require
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
     }))

(GET "/corpus.txt" {:handler handler})
