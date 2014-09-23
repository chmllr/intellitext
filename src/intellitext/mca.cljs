(ns intellitext.mca) ; Markov Chain Automata

(defn add-step [m [prev-word next-word]]
  (assoc m
    prev-word
    (update-in
      (m prev-word {next-word 0})
      [next-word]
      inc)))

(defn compute [input]
  (reduce add-step {} (partition 2 1 input)))
