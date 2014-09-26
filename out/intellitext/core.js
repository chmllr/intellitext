// Compiled by ClojureScript 0.0-2311
goog.provide('intellitext.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('intellitext.mca');
goog.require('intellitext.mca');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
intellitext.core.input_field = goog.dom.getElement("input");
intellitext.core.cells = cljs.core.map.call(null,(function (p1__5810_SHARP_){return goog.dom.getElement(("cell"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5810_SHARP_)));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null));
intellitext.core.make_suggestion = (function make_suggestion(){var input = cljs.core.last.call(null,clojure.string.split.call(null,intellitext.core.input_field.value,/ /));var suggestions = cljs.core.map.call(null,((function (input){
return (function (p1__5811_SHARP_){return intellitext.mca.step.call(null,intellitext.core.chain,input,p1__5811_SHARP_);
});})(input))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null));var seq__5818 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,intellitext.core.cells,suggestions));var chunk__5819 = null;var count__5820 = (0);var i__5821 = (0);while(true){
if((i__5821 < count__5820))
{var vec__5822 = cljs.core._nth.call(null,chunk__5819,i__5821);var cell = cljs.core.nth.call(null,vec__5822,(0),null);var word = cljs.core.nth.call(null,vec__5822,(1),null);cell.innerHTML = word;
{
var G__5824 = seq__5818;
var G__5825 = chunk__5819;
var G__5826 = count__5820;
var G__5827 = (i__5821 + (1));
seq__5818 = G__5824;
chunk__5819 = G__5825;
count__5820 = G__5826;
i__5821 = G__5827;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5818);if(temp__4126__auto__)
{var seq__5818__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5818__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__5818__$1);{
var G__5828 = cljs.core.chunk_rest.call(null,seq__5818__$1);
var G__5829 = c__4309__auto__;
var G__5830 = cljs.core.count.call(null,c__4309__auto__);
var G__5831 = (0);
seq__5818 = G__5828;
chunk__5819 = G__5829;
count__5820 = G__5830;
i__5821 = G__5831;
continue;
}
} else
{var vec__5823 = cljs.core.first.call(null,seq__5818__$1);var cell = cljs.core.nth.call(null,vec__5823,(0),null);var word = cljs.core.nth.call(null,vec__5823,(1),null);cell.innerHTML = word;
{
var G__5832 = cljs.core.next.call(null,seq__5818__$1);
var G__5833 = null;
var G__5834 = (0);
var G__5835 = (0);
seq__5818 = G__5832;
chunk__5819 = G__5833;
count__5820 = G__5834;
i__5821 = G__5835;
continue;
}
}
} else
{return null;
}
}
break;
}
});
intellitext.core.add_suggestion = (function add_suggestion(i){intellitext.core.input_field.value = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(intellitext.core.input_field.value)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.dom.getElement(("cell"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i))).innerHTML)+" ");
return intellitext.core.make_suggestion.call(null);
});
goog.events.listen(goog.dom.getElement("input"),"keypress",(function (e){var code = e.charCode;if((((48) < code)) && ((code < (52))))
{e.preventDefault();
return intellitext.core.add_suggestion.call(null,Math.abs.call(null,((49) - code)));
} else
{if(cljs.core._EQ_.call(null,(32),code))
{return intellitext.core.make_suggestion.call(null);
} else
{return null;
}
}
}));
/**
* @param {...*} var_args
*/
intellitext.core.log = (function() { 
var log__delegate = function (strings){var tableau = goog.dom.getElement("tableau");var content = tableau.innerHTML;return tableau.innerText = cljs.core.apply.call(null,cljs.core.str,content,"\n",cljs.core.interpose.call(null," ",strings));
};
var log = function (var_args){
var strings = null;if (arguments.length > 0) {
  strings = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,strings);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__5836){
var strings = cljs.core.seq(arglist__5836);
return log__delegate(strings);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
intellitext.core.sterilize = (function sterilize(corpus){var ln = cljs.core.count.call(null,corpus);var pure_text = cljs.core.apply.call(null,cljs.core.str,cljs.core.remove.call(null,((function (ln){
return (function (p1__5837_SHARP_){return cljs.core.re_matches.call(null,/[\"'\-\(\)\*]/,p1__5837_SHARP_);
});})(ln))
,corpus));var normalized = clojure.string.replace.call(null,pure_text,/(\t+|\n+|\r+|\s+)/," ");var new_ln = cljs.core.count.call(null,normalized);intellitext.core.log.call(null,"corpus sterilized, reduced from",ln,"to",new_ln,"chars (",((100) * (new_ln / ln)),"percent )");
return normalized;
});
intellitext.core.get_chain = (function get_chain(corpus){var corpus__$1 = clojure.string.lower_case.call(null,intellitext.core.sterilize.call(null,corpus));var corpus__$2 = clojure.string.replace.call(null,corpus__$1,/([\.!\?,:;])/," $1");var input = clojure.string.split.call(null,corpus__$2,/\s+/);var start = (new Date());var chain = intellitext.mca.compute.call(null,input);var ms = ((new Date()) - start);intellitext.core.log.call(null,"markov chain computed in",ms,"ms");
intellitext.core.log.call(null,"unique words discovered:",cljs.core.count.call(null,cljs.core.keys.call(null,chain)));
return chain;
});
intellitext.core.getJSChain = (function getJSChain(p1__5838_SHARP_){return cljs.core.clj__GT_js.call(null,intellitext.core.get_chain.call(null,p1__5838_SHARP_));
});
intellitext.core.take_while_with = (function take_while_with(pred,sq){var body = sq;var result = cljs.core.PersistentVector.EMPTY;while(true){
var head = cljs.core.first.call(null,body);var new_result = cljs.core.conj.call(null,result,head);if(cljs.core.truth_(pred.call(null,head)))
{{
var G__5839 = cljs.core.rest.call(null,body);
var G__5840 = new_result;
body = G__5839;
result = G__5840;
continue;
}
} else
{return new_result;
}
break;
}
});
intellitext.core.get_sentence = (function get_sentence(start){return clojure.string.replace.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",intellitext.core.take_while_with.call(null,(function (p1__5841_SHARP_){var and__3541__auto__ = p1__5841_SHARP_;if(cljs.core.truth_(and__3541__auto__))
{return cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["!",null,"?",null,".",null], null), null).call(null,p1__5841_SHARP_));
} else
{return and__3541__auto__;
}
}),cljs.core.iterate.call(null,(function (p1__5842_SHARP_){return intellitext.mca.step.call(null,intellitext.core.chain,p1__5842_SHARP_);
}),start)))),/ ([\.!\?,:;])/,"$1");
});
intellitext.core.handler = (function handler(response){intellitext.core.log.call(null,"corpus loaded",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bytes","bytes",1175866680),cljs.core.count.call(null,response),new cljs.core.Keyword(null,"words","words",1924933001),cljs.core.count.call(null,clojure.string.split.call(null,response,/ /)),new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.count.call(null,clojure.string.split.call(null,response,/\n/))], null));
intellitext.core.chain = intellitext.core.get_chain.call(null,response);
});
intellitext.core.log.call(null,"downloading the corpus from '/corpus.txt'...");
ajax.core.GET.call(null,"/corpus.txt",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),intellitext.core.handler], null));

//# sourceMappingURL=core.js.map