// Compiled by ClojureScript 0.0-2311
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit');
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;
goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__6049_6053 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__6050_6054 = null;var count__6051_6055 = (0);var i__6052_6056 = (0);while(true){
if((i__6052_6056 < count__6051_6055))
{var k_6057 = cljs.core._nth.call(null,chunk__6050_6054,i__6052_6056);var v_6058 = (b[k_6057]);(a[k_6057] = v_6058);
{
var G__6059 = seq__6049_6053;
var G__6060 = chunk__6050_6054;
var G__6061 = count__6051_6055;
var G__6062 = (i__6052_6056 + (1));
seq__6049_6053 = G__6059;
chunk__6050_6054 = G__6060;
count__6051_6055 = G__6061;
i__6052_6056 = G__6062;
continue;
}
} else
{var temp__4126__auto___6063 = cljs.core.seq.call(null,seq__6049_6053);if(temp__4126__auto___6063)
{var seq__6049_6064__$1 = temp__4126__auto___6063;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6049_6064__$1))
{var c__4309__auto___6065 = cljs.core.chunk_first.call(null,seq__6049_6064__$1);{
var G__6066 = cljs.core.chunk_rest.call(null,seq__6049_6064__$1);
var G__6067 = c__4309__auto___6065;
var G__6068 = cljs.core.count.call(null,c__4309__auto___6065);
var G__6069 = (0);
seq__6049_6053 = G__6066;
chunk__6050_6054 = G__6067;
count__6051_6055 = G__6068;
i__6052_6056 = G__6069;
continue;
}
} else
{var k_6070 = cljs.core.first.call(null,seq__6049_6064__$1);var v_6071 = (b[k_6070]);(a[k_6070] = v_6071);
{
var G__6072 = cljs.core.next.call(null,seq__6049_6064__$1);
var G__6073 = null;
var G__6074 = (0);
var G__6075 = (0);
seq__6049_6053 = G__6072;
chunk__6050_6054 = G__6073;
count__6051_6055 = G__6074;
i__6052_6056 = G__6075;
continue;
}
}
} else
{}
}
break;
}
return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.cljs$lang$type = true;
cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.call(null,m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});
cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){return (new cognitect.transit.MapBuilder());
});

/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.cljs$lang$type = true;
cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.call(null,v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});
cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){return (new cognitect.transit.VectorBuilder());
});
/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){return cljs.core.symbol.call(null,v);
}),":",(function (v){return cljs.core.keyword.call(null,v);
}),"set",(function (v){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){var i = (0);var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__6076 = (i + (2));
var G__6077 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__6076;
ret = G__6077;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.cljs$lang$type = true;
cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/KeywordHandler");
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return ":";
});
cognitect.transit.KeywordHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){return (new cognitect.transit.KeywordHandler());
});

/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.cljs$lang$type = true;
cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/SymbolHandler");
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "$";
});
cognitect.transit.SymbolHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){return (new cognitect.transit.SymbolHandler());
});

/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.cljs$lang$type = true;
cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__6078_6082 = cljs.core.seq.call(null,v);var chunk__6079_6083 = null;var count__6080_6084 = (0);var i__6081_6085 = (0);while(true){
if((i__6081_6085 < count__6080_6084))
{var x_6086 = cljs.core._nth.call(null,chunk__6079_6083,i__6081_6085);ret.push(x_6086);
{
var G__6087 = seq__6078_6082;
var G__6088 = chunk__6079_6083;
var G__6089 = count__6080_6084;
var G__6090 = (i__6081_6085 + (1));
seq__6078_6082 = G__6087;
chunk__6079_6083 = G__6088;
count__6080_6084 = G__6089;
i__6081_6085 = G__6090;
continue;
}
} else
{var temp__4126__auto___6091 = cljs.core.seq.call(null,seq__6078_6082);if(temp__4126__auto___6091)
{var seq__6078_6092__$1 = temp__4126__auto___6091;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6078_6092__$1))
{var c__4309__auto___6093 = cljs.core.chunk_first.call(null,seq__6078_6092__$1);{
var G__6094 = cljs.core.chunk_rest.call(null,seq__6078_6092__$1);
var G__6095 = c__4309__auto___6093;
var G__6096 = cljs.core.count.call(null,c__4309__auto___6093);
var G__6097 = (0);
seq__6078_6082 = G__6094;
chunk__6079_6083 = G__6095;
count__6080_6084 = G__6096;
i__6081_6085 = G__6097;
continue;
}
} else
{var x_6098 = cljs.core.first.call(null,seq__6078_6092__$1);ret.push(x_6098);
{
var G__6099 = cljs.core.next.call(null,seq__6078_6092__$1);
var G__6100 = null;
var G__6101 = (0);
var G__6102 = (0);
seq__6078_6082 = G__6099;
chunk__6079_6083 = G__6100;
count__6080_6084 = G__6101;
i__6081_6085 = G__6102;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.ListHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){return (new cognitect.transit.ListHandler());
});

/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.cljs$lang$type = true;
cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/MapHandler");
});
cognitect.transit.MapHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "map";
});
cognitect.transit.MapHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v;
});
cognitect.transit.MapHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){return (new cognitect.transit.MapHandler());
});

/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.cljs$lang$type = true;
cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__6103_6107 = cljs.core.seq.call(null,v);var chunk__6104_6108 = null;var count__6105_6109 = (0);var i__6106_6110 = (0);while(true){
if((i__6106_6110 < count__6105_6109))
{var x_6111 = cljs.core._nth.call(null,chunk__6104_6108,i__6106_6110);ret.push(x_6111);
{
var G__6112 = seq__6103_6107;
var G__6113 = chunk__6104_6108;
var G__6114 = count__6105_6109;
var G__6115 = (i__6106_6110 + (1));
seq__6103_6107 = G__6112;
chunk__6104_6108 = G__6113;
count__6105_6109 = G__6114;
i__6106_6110 = G__6115;
continue;
}
} else
{var temp__4126__auto___6116 = cljs.core.seq.call(null,seq__6103_6107);if(temp__4126__auto___6116)
{var seq__6103_6117__$1 = temp__4126__auto___6116;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6103_6117__$1))
{var c__4309__auto___6118 = cljs.core.chunk_first.call(null,seq__6103_6117__$1);{
var G__6119 = cljs.core.chunk_rest.call(null,seq__6103_6117__$1);
var G__6120 = c__4309__auto___6118;
var G__6121 = cljs.core.count.call(null,c__4309__auto___6118);
var G__6122 = (0);
seq__6103_6107 = G__6119;
chunk__6104_6108 = G__6120;
count__6105_6109 = G__6121;
i__6106_6110 = G__6122;
continue;
}
} else
{var x_6123 = cljs.core.first.call(null,seq__6103_6117__$1);ret.push(x_6123);
{
var G__6124 = cljs.core.next.call(null,seq__6103_6117__$1);
var G__6125 = null;
var G__6126 = (0);
var G__6127 = (0);
seq__6103_6107 = G__6124;
chunk__6104_6108 = G__6125;
count__6105_6109 = G__6126;
i__6106_6110 = G__6127;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.SetHandler.prototype.stringRep = (function (){var self__ = this;
var v = this;return null;
});
cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){return (new cognitect.transit.SetHandler());
});

/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.cljs$lang$type = true;
cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__6128_6132 = cljs.core.seq.call(null,v);var chunk__6129_6133 = null;var count__6130_6134 = (0);var i__6131_6135 = (0);while(true){
if((i__6131_6135 < count__6130_6134))
{var x_6136 = cljs.core._nth.call(null,chunk__6129_6133,i__6131_6135);ret.push(x_6136);
{
var G__6137 = seq__6128_6132;
var G__6138 = chunk__6129_6133;
var G__6139 = count__6130_6134;
var G__6140 = (i__6131_6135 + (1));
seq__6128_6132 = G__6137;
chunk__6129_6133 = G__6138;
count__6130_6134 = G__6139;
i__6131_6135 = G__6140;
continue;
}
} else
{var temp__4126__auto___6141 = cljs.core.seq.call(null,seq__6128_6132);if(temp__4126__auto___6141)
{var seq__6128_6142__$1 = temp__4126__auto___6141;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6128_6142__$1))
{var c__4309__auto___6143 = cljs.core.chunk_first.call(null,seq__6128_6142__$1);{
var G__6144 = cljs.core.chunk_rest.call(null,seq__6128_6142__$1);
var G__6145 = c__4309__auto___6143;
var G__6146 = cljs.core.count.call(null,c__4309__auto___6143);
var G__6147 = (0);
seq__6128_6132 = G__6144;
chunk__6129_6133 = G__6145;
count__6130_6134 = G__6146;
i__6131_6135 = G__6147;
continue;
}
} else
{var x_6148 = cljs.core.first.call(null,seq__6128_6142__$1);ret.push(x_6148);
{
var G__6149 = cljs.core.next.call(null,seq__6128_6142__$1);
var G__6150 = null;
var G__6151 = (0);
var G__6152 = (0);
seq__6128_6132 = G__6149;
chunk__6129_6133 = G__6150;
count__6130_6134 = G__6151;
i__6131_6135 = G__6152;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
cognitect.transit.VectorHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){return (new cognitect.transit.VectorHandler());
});
/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x6162 = cljs.core.clone.call(null,handlers);x6162.forEach = ((function (x6162,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__6163 = cljs.core.seq.call(null,coll);var chunk__6164 = null;var count__6165 = (0);var i__6166 = (0);while(true){
if((i__6166 < count__6165))
{var vec__6167 = cljs.core._nth.call(null,chunk__6164,i__6166);var k = cljs.core.nth.call(null,vec__6167,(0),null);var v = cljs.core.nth.call(null,vec__6167,(1),null);f.call(null,v,k);
{
var G__6169 = seq__6163;
var G__6170 = chunk__6164;
var G__6171 = count__6165;
var G__6172 = (i__6166 + (1));
seq__6163 = G__6169;
chunk__6164 = G__6170;
count__6165 = G__6171;
i__6166 = G__6172;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6163);if(temp__4126__auto__)
{var seq__6163__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6163__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__6163__$1);{
var G__6173 = cljs.core.chunk_rest.call(null,seq__6163__$1);
var G__6174 = c__4309__auto__;
var G__6175 = cljs.core.count.call(null,c__4309__auto__);
var G__6176 = (0);
seq__6163 = G__6173;
chunk__6164 = G__6174;
count__6165 = G__6175;
i__6166 = G__6176;
continue;
}
} else
{var vec__6168 = cljs.core.first.call(null,seq__6163__$1);var k = cljs.core.nth.call(null,vec__6168,(0),null);var v = cljs.core.nth.call(null,vec__6168,(1),null);f.call(null,v,k);
{
var G__6177 = cljs.core.next.call(null,seq__6163__$1);
var G__6178 = null;
var G__6179 = (0);
var G__6180 = (0);
seq__6163 = G__6177;
chunk__6164 = G__6178;
count__6165 = G__6179;
i__6166 = G__6180;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x6162,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x6162;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__6161 = obj;G__6161.push(kfn.call(null,k),vfn.call(null,v));
return G__6161;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t6184 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t6184 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta6185){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta6185 = meta6185;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t6184.cljs$lang$type = true;
cognitect.transit.t6184.cljs$lang$ctorStr = "cognitect.transit/t6184";
cognitect.transit.t6184.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/t6184");
});
cognitect.transit.t6184.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t6184.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t6184.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t6184.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t6184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6186){var self__ = this;
var _6186__$1 = this;return self__.meta6185;
});
cognitect.transit.t6184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6186,meta6185__$1){var self__ = this;
var _6186__$1 = this;return (new cognitect.transit.t6184(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta6185__$1));
});
cognitect.transit.__GT_t6184 = (function __GT_t6184(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta6185){return (new cognitect.transit.t6184(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta6185));
});
}
return (new cognitect.transit.t6184(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map