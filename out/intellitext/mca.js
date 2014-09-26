// Compiled by ClojureScript 0.0-2311
goog.provide('intellitext.mca');
goog.require('cljs.core');
intellitext.mca.add_step = (function add_step(m,p__5843){var vec__5845 = p__5843;var prev_word = cljs.core.nth.call(null,vec__5845,(0),null);var next_word = cljs.core.nth.call(null,vec__5845,(1),null);return cljs.core.assoc.call(null,m,prev_word,cljs.core.update_in.call(null,m.call(null,prev_word,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_word], null),cljs.core.inc));
});
intellitext.mca.compute = (function compute(input){return cljs.core.reduce.call(null,intellitext.mca.add_step,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),(1),input));
});
intellitext.mca.step = (function() {
var step = null;
var step__2 = (function (chain,member){return step.call(null,chain,member,(0));
});
var step__3 = (function (chain,member,ignore){var temp__4124__auto__ = chain.call(null,member);if(cljs.core.truth_(temp__4124__auto__))
{var sub_map = temp__4124__auto__;var ordered = cljs.core.reverse.call(null,cljs.core.sort_by.call(null,cljs.core.second,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,sub_map)));var sub_map__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.drop.call(null,ignore,ordered));var result = cljs.core.mapcat.call(null,((function (ordered,sub_map__$1,sub_map,temp__4124__auto__){
return (function (p1__5846_SHARP_){return cljs.core.repeat.call(null,sub_map__$1.call(null,p1__5846_SHARP_),p1__5846_SHARP_);
});})(ordered,sub_map__$1,sub_map,temp__4124__auto__))
,cljs.core.keys.call(null,sub_map__$1));return cljs.core.first.call(null,cljs.core.shuffle.call(null,result));
} else
{return null;
}
});
step = function(chain,member,ignore){
switch(arguments.length){
case 2:
return step__2.call(this,chain,member);
case 3:
return step__3.call(this,chain,member,ignore);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
step.cljs$core$IFn$_invoke$arity$2 = step__2;
step.cljs$core$IFn$_invoke$arity$3 = step__3;
return step;
})()
;

//# sourceMappingURL=mca.js.map