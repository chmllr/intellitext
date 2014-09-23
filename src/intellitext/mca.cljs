(ns intellitext.mca) ; Markov Chain Automata

(defn add-step [m [prev-word next-word]]
  (assoc m
    prev-word
    (conj
      (m prev-word #{})
      next-word)))

(defn compute [chain input]
  (reduce add-step chain (partition 2 1 input)))
