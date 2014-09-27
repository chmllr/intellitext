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
intellitext.core.cells = cljs.core.map.call(null,(function (p1__8069_SHARP_){return goog.dom.getElement(("cell"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8069_SHARP_)));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null));
intellitext.core.make_suggestion = (function make_suggestion(){var input = clojure.string.lower_case.call(null,cljs.core.last.call(null,clojure.string.split.call(null,intellitext.core.input_field.value,/ /)));var follow_ups = cljs.core.keys.call(null,intellitext.core.chain.call(null,input));var stream = (((cljs.core.count.call(null,follow_ups) < (3)))?follow_ups:cljs.core.repeatedly.call(null,((function (input,follow_ups){
return (function (){return intellitext.mca.step.call(null,intellitext.core.chain,input);
});})(input,follow_ups))
));var suggestions = cljs.core.distinct.call(null,stream);var seq__8076 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,intellitext.core.cells,suggestions));var chunk__8077 = null;var count__8078 = (0);var i__8079 = (0);while(true){
if((i__8079 < count__8078))
{var vec__8080 = cljs.core._nth.call(null,chunk__8077,i__8079);var cell = cljs.core.nth.call(null,vec__8080,(0),null);var word = cljs.core.nth.call(null,vec__8080,(1),null);cell.innerHTML = word;
{
var G__8082 = seq__8076;
var G__8083 = chunk__8077;
var G__8084 = count__8078;
var G__8085 = (i__8079 + (1));
seq__8076 = G__8082;
chunk__8077 = G__8083;
count__8078 = G__8084;
i__8079 = G__8085;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8076);if(temp__4126__auto__)
{var seq__8076__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8076__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__8076__$1);{
var G__8086 = cljs.core.chunk_rest.call(null,seq__8076__$1);
var G__8087 = c__4309__auto__;
var G__8088 = cljs.core.count.call(null,c__4309__auto__);
var G__8089 = (0);
seq__8076 = G__8086;
chunk__8077 = G__8087;
count__8078 = G__8088;
i__8079 = G__8089;
continue;
}
} else
{var vec__8081 = cljs.core.first.call(null,seq__8076__$1);var cell = cljs.core.nth.call(null,vec__8081,(0),null);var word = cljs.core.nth.call(null,vec__8081,(1),null);cell.innerHTML = word;
{
var G__8090 = cljs.core.next.call(null,seq__8076__$1);
var G__8091 = null;
var G__8092 = (0);
var G__8093 = (0);
seq__8076 = G__8090;
chunk__8077 = G__8091;
count__8078 = G__8092;
i__8079 = G__8093;
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
log.cljs$lang$applyTo = (function (arglist__8094){
var strings = cljs.core.seq(arglist__8094);
return log__delegate(strings);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
intellitext.core.sterilize = (function sterilize(corpus){var ln = cljs.core.count.call(null,corpus);var pure_text = cljs.core.apply.call(null,cljs.core.str,cljs.core.remove.call(null,((function (ln){
return (function (p1__8095_SHARP_){return cljs.core.re_matches.call(null,/[\"'\-\(\)\*]/,p1__8095_SHARP_);
});})(ln))
,corpus));var normalized = clojure.string.replace.call(null,pure_text,/(\t+|\n+|\r+|\s+)/," ");var new_ln = cljs.core.count.call(null,normalized);intellitext.core.log.call(null,"corpus sterilized, reduced from",ln,"to",new_ln,"chars (",((100) * (new_ln / ln)),"percent )");
return normalized;
});
intellitext.core.get_chain = (function get_chain(corpus){var corpus__$1 = clojure.string.lower_case.call(null,intellitext.core.sterilize.call(null,corpus));var corpus__$2 = clojure.string.replace.call(null,corpus__$1,/([\.!\?,:;])/," $1");var input = clojure.string.split.call(null,corpus__$2,/\s+/);var start = (new Date());var chain = intellitext.mca.compute.call(null,cljs.core.PersistentArrayMap.EMPTY,input);var ms = ((new Date()) - start);intellitext.core.log.call(null,"markov chain computed in",ms,"ms");
intellitext.core.log.call(null,"unique words discovered:",cljs.core.count.call(null,cljs.core.keys.call(null,chain)));
return chain;
});
intellitext.core.getJSChain = (function getJSChain(p1__8096_SHARP_){return cljs.core.clj__GT_js.call(null,intellitext.core.get_chain.call(null,p1__8096_SHARP_));
});
intellitext.core.take_while_with = (function take_while_with(pred,sq){var body = sq;var result = cljs.core.PersistentVector.EMPTY;while(true){
var head = cljs.core.first.call(null,body);var new_result = cljs.core.conj.call(null,result,head);if(cljs.core.truth_(pred.call(null,head)))
{{
var G__8097 = cljs.core.rest.call(null,body);
var G__8098 = new_result;
body = G__8097;
result = G__8098;
continue;
}
} else
{return new_result;
}
break;
}
});
intellitext.core.get_sentence = (function get_sentence(start){return clojure.string.replace.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",intellitext.core.take_while_with.call(null,(function (p1__8099_SHARP_){var and__3541__auto__ = p1__8099_SHARP_;if(cljs.core.truth_(and__3541__auto__))
{return cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["!",null,"?",null,".",null], null), null).call(null,p1__8099_SHARP_));
} else
{return and__3541__auto__;
}
}),cljs.core.iterate.call(null,(function (p1__8100_SHARP_){return intellitext.mca.step.call(null,intellitext.core.chain,p1__8100_SHARP_);
}),start)))),/ ([\.!\?,:;])/,"$1");
});
intellitext.core.handler = (function handler(response){intellitext.core.log.call(null,"corpus loaded",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bytes","bytes",1175866680),cljs.core.count.call(null,response),new cljs.core.Keyword(null,"words","words",1924933001),cljs.core.count.call(null,clojure.string.split.call(null,response,/ /)),new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.count.call(null,clojure.string.split.call(null,response,/\n/))], null));
intellitext.core.chain = intellitext.core.get_chain.call(null,response);
});
intellitext.core.log.call(null,"downloading the corpus from '/corpus.txt'...");
ajax.core.GET.call(null,"corpus.txt",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),intellitext.core.handler], null));

//# sourceMappingURL=core.js.map