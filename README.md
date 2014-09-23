# README

Intellitext is a small experiement with markov chain automata.
The experiment is inspired by the newly introduced iOS 8 feature, the intelligent text predictions during typing.
Since this feature was not provided for the Russian language, I was curios what would it take to implement this feature using a simple markov chain automaton.

## Notes to myself

To setup a dev-env:

1. Run the CLJS compilation with `lein cljsbuild auto`.
2. Start the simple web server with `lein simpleton 8080`.
3. Start the normal leiningen REPL with `lein repl`. 
4. Connect to the REPL from Vim with fireplace'c `:Connect`.
4. Connect by fireplaces `:Piggieback` to start JS REPL.
5. ???
6. Consider to switch to more mature development tools.
