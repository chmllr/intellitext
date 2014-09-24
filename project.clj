(defproject intellitext "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/core.async "0.1.338.0-5c5012-alpha"]
                 [cljs-ajax "0.3.0"]
                 [com.cemerick/piggieback "0.1.3"]
                 [org.clojure/clojurescript "0.0-2311"]]

  :plugins [[lein-simpleton "1.3.0"]
            [lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "intellitext"
              :source-paths ["src"]
              :compiler {
                :output-to "intellitext.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
