(ns intellitext.mca) ; Markov Chain Automata

(defn- add-step [m [prev-word next-word]]
  (assoc m
    prev-word
    (update-in
      (m prev-word {})
      [next-word]
      inc)))

(defn compute [input]
  (reduce add-step {} (partition 2 1 input)))

(defn step 
  ([chain member] (step chain member 0))
  ([chain member ignore]
   (if-let [sub-map (chain member)]
     (let [ordered (reverse (sort-by second (into [] sub-map)))
           sub-map (into {}  (drop ignore ordered))
           result (mapcat #(repeat (sub-map %) %) (keys sub-map))]
       (first (shuffle result))))))

