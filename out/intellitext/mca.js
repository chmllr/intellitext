// Compiled by ClojureScript 0.0-2311
goog.provide('intellitext.mca');
goog.require('cljs.core');
intellitext.mca.add_step = (function add_step(m,p__5843){var vec__5845 = p__5843;var prev_word = cljs.core.nth.call(null,vec__5845,(0),null);var next_word = cljs.core.nth.call(null,vec__5845,(1),null);return cljs.core.assoc.call(null,m,prev_word,cljs.core.update_in.call(null,m.call(null,prev_word,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_word], null),cljs.core.inc));
});
intellitext.mca.compute = (function compute(input){return cljs.core.reduce.call(null,intellitext.mca.add_step,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),(1),input));
});
intellitext.mca.step = (function step(chain,member){var temp__4124__auto__ = chain.call(null,member);if(cljs.core.truth_(temp__4124__auto__))
{var sub_map = temp__4124__auto__;var result = cljs.core.mapcat.call(null,((function (sub_map,temp__4124__auto__){
return (function (p1__5846_SHARP_){return cljs.core.repeat.call(null,sub_map.call(null,p1__5846_SHARP_),p1__5846_SHARP_);
});})(sub_map,temp__4124__auto__))
,cljs.core.keys.call(null,sub_map));return cljs.core.first.call(null,cljs.core.shuffle.call(null,result));
} else
{return null;
}
});

//# sourceMappingURL=mca.js.map