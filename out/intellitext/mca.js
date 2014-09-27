// Compiled by ClojureScript 0.0-2311
goog.provide('intellitext.mca');
goog.require('cljs.core');
intellitext.mca.add_step = (function add_step(m,words){return cljs.core.update_in.call(null,m,words,cljs.core.inc);
});
intellitext.mca.compute = (function compute(chain,input){return cljs.core.reduce.call(null,intellitext.mca.add_step,chain,cljs.core.partition.call(null,(2),(1),input));
});
intellitext.mca.step = (function step(chain,member){var temp__4124__auto__ = chain.call(null,member);if(cljs.core.truth_(temp__4124__auto__))
{var sub_map = temp__4124__auto__;var result = cljs.core.mapcat.call(null,((function (sub_map,temp__4124__auto__){
return (function (p1__5839_SHARP_){return cljs.core.repeat.call(null,sub_map.call(null,p1__5839_SHARP_),p1__5839_SHARP_);
});})(sub_map,temp__4124__auto__))
,cljs.core.keys.call(null,sub_map));return cljs.core.first.call(null,cljs.core.shuffle.call(null,result));
} else
{return null;
}
});

//# sourceMappingURL=mca.js.map