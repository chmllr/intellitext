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
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__6042_6046 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__6043_6047 = null;var count__6044_6048 = (0);var i__6045_6049 = (0);while(true){
if((i__6045_6049 < count__6044_6048))
{var k_6050 = cljs.core._nth.call(null,chunk__6043_6047,i__6045_6049);var v_6051 = (b[k_6050]);(a[k_6050] = v_6051);
{
var G__6052 = seq__6042_6046;
var G__6053 = chunk__6043_6047;
var G__6054 = count__6044_6048;
var G__6055 = (i__6045_6049 + (1));
seq__6042_6046 = G__6052;
chunk__6043_6047 = G__6053;
count__6044_6048 = G__6054;
i__6045_6049 = G__6055;
continue;
}
} else
{var temp__4126__auto___6056 = cljs.core.seq.call(null,seq__6042_6046);if(temp__4126__auto___6056)
{var seq__6042_6057__$1 = temp__4126__auto___6056;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6042_6057__$1))
{var c__4309__auto___6058 = cljs.core.chunk_first.call(null,seq__6042_6057__$1);{
var G__6059 = cljs.core.chunk_rest.call(null,seq__6042_6057__$1);
var G__6060 = c__4309__auto___6058;
var G__6061 = cljs.core.count.call(null,c__4309__auto___6058);
var G__6062 = (0);
seq__6042_6046 = G__6059;
chunk__6043_6047 = G__6060;
count__6044_6048 = G__6061;
i__6045_6049 = G__6062;
continue;
}
} else
{var k_6063 = cljs.core.first.call(null,seq__6042_6057__$1);var v_6064 = (b[k_6063]);(a[k_6063] = v_6064);
{
var G__6065 = cljs.core.next.call(null,seq__6042_6057__$1);
var G__6066 = null;
var G__6067 = (0);
var G__6068 = (0);
seq__6042_6046 = G__6065;
chunk__6043_6047 = G__6066;
count__6044_6048 = G__6067;
i__6045_6049 = G__6068;
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
var G__6069 = (i + (2));
var G__6070 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__6069;
ret = G__6070;
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
var _ = this;var ret = [];var seq__6071_6075 = cljs.core.seq.call(null,v);var chunk__6072_6076 = null;var count__6073_6077 = (0);var i__6074_6078 = (0);while(true){
if((i__6074_6078 < count__6073_6077))
{var x_6079 = cljs.core._nth.call(null,chunk__6072_6076,i__6074_6078);ret.push(x_6079);
{
var G__6080 = seq__6071_6075;
var G__6081 = chunk__6072_6076;
var G__6082 = count__6073_6077;
var G__6083 = (i__6074_6078 + (1));
seq__6071_6075 = G__6080;
chunk__6072_6076 = G__6081;
count__6073_6077 = G__6082;
i__6074_6078 = G__6083;
continue;
}
} else
{var temp__4126__auto___6084 = cljs.core.seq.call(null,seq__6071_6075);if(temp__4126__auto___6084)
{var seq__6071_6085__$1 = temp__4126__auto___6084;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6071_6085__$1))
{var c__4309__auto___6086 = cljs.core.chunk_first.call(null,seq__6071_6085__$1);{
var G__6087 = cljs.core.chunk_rest.call(null,seq__6071_6085__$1);
var G__6088 = c__4309__auto___6086;
var G__6089 = cljs.core.count.call(null,c__4309__auto___6086);
var G__6090 = (0);
seq__6071_6075 = G__6087;
chunk__6072_6076 = G__6088;
count__6073_6077 = G__6089;
i__6074_6078 = G__6090;
continue;
}
} else
{var x_6091 = cljs.core.first.call(null,seq__6071_6085__$1);ret.push(x_6091);
{
var G__6092 = cljs.core.next.call(null,seq__6071_6085__$1);
var G__6093 = null;
var G__6094 = (0);
var G__6095 = (0);
seq__6071_6075 = G__6092;
chunk__6072_6076 = G__6093;
count__6073_6077 = G__6094;
i__6074_6078 = G__6095;
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
var _ = this;var ret = [];var seq__6096_6100 = cljs.core.seq.call(null,v);var chunk__6097_6101 = null;var count__6098_6102 = (0);var i__6099_6103 = (0);while(true){
if((i__6099_6103 < count__6098_6102))
{var x_6104 = cljs.core._nth.call(null,chunk__6097_6101,i__6099_6103);ret.push(x_6104);
{
var G__6105 = seq__6096_6100;
var G__6106 = chunk__6097_6101;
var G__6107 = count__6098_6102;
var G__6108 = (i__6099_6103 + (1));
seq__6096_6100 = G__6105;
chunk__6097_6101 = G__6106;
count__6098_6102 = G__6107;
i__6099_6103 = G__6108;
continue;
}
} else
{var temp__4126__auto___6109 = cljs.core.seq.call(null,seq__6096_6100);if(temp__4126__auto___6109)
{var seq__6096_6110__$1 = temp__4126__auto___6109;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6096_6110__$1))
{var c__4309__auto___6111 = cljs.core.chunk_first.call(null,seq__6096_6110__$1);{
var G__6112 = cljs.core.chunk_rest.call(null,seq__6096_6110__$1);
var G__6113 = c__4309__auto___6111;
var G__6114 = cljs.core.count.call(null,c__4309__auto___6111);
var G__6115 = (0);
seq__6096_6100 = G__6112;
chunk__6097_6101 = G__6113;
count__6098_6102 = G__6114;
i__6099_6103 = G__6115;
continue;
}
} else
{var x_6116 = cljs.core.first.call(null,seq__6096_6110__$1);ret.push(x_6116);
{
var G__6117 = cljs.core.next.call(null,seq__6096_6110__$1);
var G__6118 = null;
var G__6119 = (0);
var G__6120 = (0);
seq__6096_6100 = G__6117;
chunk__6097_6101 = G__6118;
count__6098_6102 = G__6119;
i__6099_6103 = G__6120;
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
var _ = this;var ret = [];var seq__6121_6125 = cljs.core.seq.call(null,v);var chunk__6122_6126 = null;var count__6123_6127 = (0);var i__6124_6128 = (0);while(true){
if((i__6124_6128 < count__6123_6127))
{var x_6129 = cljs.core._nth.call(null,chunk__6122_6126,i__6124_6128);ret.push(x_6129);
{
var G__6130 = seq__6121_6125;
var G__6131 = chunk__6122_6126;
var G__6132 = count__6123_6127;
var G__6133 = (i__6124_6128 + (1));
seq__6121_6125 = G__6130;
chunk__6122_6126 = G__6131;
count__6123_6127 = G__6132;
i__6124_6128 = G__6133;
continue;
}
} else
{var temp__4126__auto___6134 = cljs.core.seq.call(null,seq__6121_6125);if(temp__4126__auto___6134)
{var seq__6121_6135__$1 = temp__4126__auto___6134;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6121_6135__$1))
{var c__4309__auto___6136 = cljs.core.chunk_first.call(null,seq__6121_6135__$1);{
var G__6137 = cljs.core.chunk_rest.call(null,seq__6121_6135__$1);
var G__6138 = c__4309__auto___6136;
var G__6139 = cljs.core.count.call(null,c__4309__auto___6136);
var G__6140 = (0);
seq__6121_6125 = G__6137;
chunk__6122_6126 = G__6138;
count__6123_6127 = G__6139;
i__6124_6128 = G__6140;
continue;
}
} else
{var x_6141 = cljs.core.first.call(null,seq__6121_6135__$1);ret.push(x_6141);
{
var G__6142 = cljs.core.next.call(null,seq__6121_6135__$1);
var G__6143 = null;
var G__6144 = (0);
var G__6145 = (0);
seq__6121_6125 = G__6142;
chunk__6122_6126 = G__6143;
count__6123_6127 = G__6144;
i__6124_6128 = G__6145;
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
, "handlers": (function (){var x6155 = cljs.core.clone.call(null,handlers);x6155.forEach = ((function (x6155,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__6156 = cljs.core.seq.call(null,coll);var chunk__6157 = null;var count__6158 = (0);var i__6159 = (0);while(true){
if((i__6159 < count__6158))
{var vec__6160 = cljs.core._nth.call(null,chunk__6157,i__6159);var k = cljs.core.nth.call(null,vec__6160,(0),null);var v = cljs.core.nth.call(null,vec__6160,(1),null);f.call(null,v,k);
{
var G__6162 = seq__6156;
var G__6163 = chunk__6157;
var G__6164 = count__6158;
var G__6165 = (i__6159 + (1));
seq__6156 = G__6162;
chunk__6157 = G__6163;
count__6158 = G__6164;
i__6159 = G__6165;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6156);if(temp__4126__auto__)
{var seq__6156__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6156__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__6156__$1);{
var G__6166 = cljs.core.chunk_rest.call(null,seq__6156__$1);
var G__6167 = c__4309__auto__;
var G__6168 = cljs.core.count.call(null,c__4309__auto__);
var G__6169 = (0);
seq__6156 = G__6166;
chunk__6157 = G__6167;
count__6158 = G__6168;
i__6159 = G__6169;
continue;
}
} else
{var vec__6161 = cljs.core.first.call(null,seq__6156__$1);var k = cljs.core.nth.call(null,vec__6161,(0),null);var v = cljs.core.nth.call(null,vec__6161,(1),null);f.call(null,v,k);
{
var G__6170 = cljs.core.next.call(null,seq__6156__$1);
var G__6171 = null;
var G__6172 = (0);
var G__6173 = (0);
seq__6156 = G__6170;
chunk__6157 = G__6171;
count__6158 = G__6172;
i__6159 = G__6173;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x6155,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x6155;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__6154 = obj;G__6154.push(kfn.call(null,k),vfn.call(null,v));
return G__6154;
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t6177 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t6177 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta6178){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta6178 = meta6178;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t6177.cljs$lang$type = true;
cognitect.transit.t6177.cljs$lang$ctorStr = "cognitect.transit/t6177";
cognitect.transit.t6177.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/t6177");
});
cognitect.transit.t6177.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t6177.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t6177.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t6177.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t6177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6179){var self__ = this;
var _6179__$1 = this;return self__.meta6178;
});
cognitect.transit.t6177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6179,meta6178__$1){var self__ = this;
var _6179__$1 = this;return (new cognitect.transit.t6177(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta6178__$1));
});
cognitect.transit.__GT_t6177 = (function __GT_t6177(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta6178){return (new cognitect.transit.t6177(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta6178));
});
}
return (new cognitect.transit.t6177(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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