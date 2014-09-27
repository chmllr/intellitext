// Compiled by ClojureScript 0.0-2311
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9660 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9660 = (function (f,fn_handler,meta9661){
this.f = f;
this.fn_handler = fn_handler;
this.meta9661 = meta9661;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9660.cljs$lang$type = true;
cljs.core.async.t9660.cljs$lang$ctorStr = "cljs.core.async/t9660";
cljs.core.async.t9660.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t9660");
});
cljs.core.async.t9660.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9660.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9660.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9662){var self__ = this;
var _9662__$1 = this;return self__.meta9661;
});
cljs.core.async.t9660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9662,meta9661__$1){var self__ = this;
var _9662__$1 = this;return (new cljs.core.async.t9660(self__.f,self__.fn_handler,meta9661__$1));
});
cljs.core.async.__GT_t9660 = (function __GT_t9660(f__$1,fn_handler__$1,meta9661){return (new cljs.core.async.t9660(f__$1,fn_handler__$1,meta9661));
});
}
return (new cljs.core.async.t9660(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9664 = buff;if(G__9664)
{var bit__4203__auto__ = null;if(cljs.core.truth_((function (){var or__3553__auto__ = bit__4203__auto__;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return G__9664.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9664.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9664);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9664);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_9665 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9665);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_9665,ret){
return (function (){return fn1.call(null,val_9665);
});})(val_9665,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4409__auto___9666 = n;var x_9667 = (0);while(true){
if((x_9667 < n__4409__auto___9666))
{(a[x_9667] = (0));
{
var G__9668 = (x_9667 + (1));
x_9667 = G__9668;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__9669 = (i + (1));
i = G__9669;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9673 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9673 = (function (flag,alt_flag,meta9674){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9674 = meta9674;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9673.cljs$lang$type = true;
cljs.core.async.t9673.cljs$lang$ctorStr = "cljs.core.async/t9673";
cljs.core.async.t9673.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t9673");
});})(flag))
;
cljs.core.async.t9673.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9673.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t9673.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t9673.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9675){var self__ = this;
var _9675__$1 = this;return self__.meta9674;
});})(flag))
;
cljs.core.async.t9673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9675,meta9674__$1){var self__ = this;
var _9675__$1 = this;return (new cljs.core.async.t9673(self__.flag,self__.alt_flag,meta9674__$1));
});})(flag))
;
cljs.core.async.__GT_t9673 = ((function (flag){
return (function __GT_t9673(flag__$1,alt_flag__$1,meta9674){return (new cljs.core.async.t9673(flag__$1,alt_flag__$1,meta9674));
});})(flag))
;
}
return (new cljs.core.async.t9673(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9679 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9679 = (function (cb,flag,alt_handler,meta9680){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9680 = meta9680;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9679.cljs$lang$type = true;
cljs.core.async.t9679.cljs$lang$ctorStr = "cljs.core.async/t9679";
cljs.core.async.t9679.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t9679");
});
cljs.core.async.t9679.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9679.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9679.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9681){var self__ = this;
var _9681__$1 = this;return self__.meta9680;
});
cljs.core.async.t9679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9681,meta9680__$1){var self__ = this;
var _9681__$1 = this;return (new cljs.core.async.t9679(self__.cb,self__.flag,self__.alt_handler,meta9680__$1));
});
cljs.core.async.__GT_t9679 = (function __GT_t9679(cb__$1,flag__$1,alt_handler__$1,meta9680){return (new cljs.core.async.t9679(cb__$1,flag__$1,alt_handler__$1,meta9680));
});
}
return (new cljs.core.async.t9679(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9682_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9682_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9683_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9683_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3553__auto__ = wport;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__9684 = (i + (1));
i = G__9684;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3553__auto__ = ret;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3541__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3541__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3541__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__9685){var map__9687 = p__9685;var map__9687__$1 = ((cljs.core.seq_QMARK_.call(null,map__9687))?cljs.core.apply.call(null,cljs.core.hash_map,map__9687):map__9687);var opts = map__9687__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__9685 = null;if (arguments.length > 1) {
  p__9685 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9685);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9688){
var ports = cljs.core.first(arglist__9688);
var p__9685 = cljs.core.rest(arglist__9688);
return alts_BANG___delegate(ports,p__9685);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9696 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9696 = (function (ch,f,map_LT_,meta9697){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9697 = meta9697;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9696.cljs$lang$type = true;
cljs.core.async.t9696.cljs$lang$ctorStr = "cljs.core.async/t9696";
cljs.core.async.t9696.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t9696");
});
cljs.core.async.t9696.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9696.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t9696.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9696.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9699 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9699 = (function (fn1,_,meta9697,ch,f,map_LT_,meta9700){
this.fn1 = fn1;
this._ = _;
this.meta9697 = meta9697;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9700 = meta9700;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9699.cljs$lang$type = true;
cljs.core.async.t9699.cljs$lang$ctorStr = "cljs.core.async/t9699";
cljs.core.async.t9699.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t9699");
});})(___$1))
;
cljs.core.async.t9699.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9699.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t9699.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t9699.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__9689_SHARP_){return f1.call(null,(((p1__9689_SHARP_ == null))?null:self__.f.call(null,p1__9689_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t9699.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_9701){var self__ = this;
var _9701__$1 = this;return self__.meta9700;
});})(___$1))
;
cljs.core.async.t9699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_9701,meta9700__$1){var self__ = this;
var _9701__$1 = this;return (new cljs.core.async.t9699(self__.fn1,self__._,self__.meta9697,self__.ch,self__.f,self__.map_LT_,meta9700__$1));
});})(___$1))
;
cljs.core.async.__GT_t9699 = ((function (___$1){
return (function __GT_t9699(fn1__$1,___$2,meta9697__$1,ch__$2,f__$2,map_LT___$2,meta9700){return (new cljs.core.async.t9699(fn1__$1,___$2,meta9697__$1,ch__$2,f__$2,map_LT___$2,meta9700));
});})(___$1))
;
}
return (new cljs.core.async.t9699(fn1,___$1,self__.meta9697,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3541__auto__ = ret;if(cljs.core.truth_(and__3541__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3541__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t9696.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9696.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9696.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t9696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9698){var self__ = this;
var _9698__$1 = this;return self__.meta9697;
});
cljs.core.async.t9696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9698,meta9697__$1){var self__ = this;
var _9698__$1 = this;return (new cljs.core.async.t9696(self__.ch,self__.f,self__.map_LT_,meta9697__$1));
});
cljs.core.async.__GT_t9696 = (function __GT_t9696(ch__$1,f__$1,map_LT___$1,meta9697){return (new cljs.core.async.t9696(ch__$1,f__$1,map_LT___$1,meta9697));
});
}
return (new cljs.core.async.t9696(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9705 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9705 = (function (ch,f,map_GT_,meta9706){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9706 = meta9706;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9705.cljs$lang$type = true;
cljs.core.async.t9705.cljs$lang$ctorStr = "cljs.core.async/t9705";
cljs.core.async.t9705.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t9705");
});
cljs.core.async.t9705.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9705.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t9705.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9705.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9705.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9705.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9707){var self__ = this;
var _9707__$1 = this;return self__.meta9706;
});
cljs.core.async.t9705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9707,meta9706__$1){var self__ = this;
var _9707__$1 = this;return (new cljs.core.async.t9705(self__.ch,self__.f,self__.map_GT_,meta9706__$1));
});
cljs.core.async.__GT_t9705 = (function __GT_t9705(ch__$1,f__$1,map_GT___$1,meta9706){return (new cljs.core.async.t9705(ch__$1,f__$1,map_GT___$1,meta9706));
});
}
return (new cljs.core.async.t9705(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9711 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9711 = (function (ch,p,filter_GT_,meta9712){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9712 = meta9712;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9711.cljs$lang$type = true;
cljs.core.async.t9711.cljs$lang$ctorStr = "cljs.core.async/t9711";
cljs.core.async.t9711.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t9711");
});
cljs.core.async.t9711.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9711.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t9711.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9711.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9711.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9711.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9711.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t9711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9713){var self__ = this;
var _9713__$1 = this;return self__.meta9712;
});
cljs.core.async.t9711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9713,meta9712__$1){var self__ = this;
var _9713__$1 = this;return (new cljs.core.async.t9711(self__.ch,self__.p,self__.filter_GT_,meta9712__$1));
});
cljs.core.async.__GT_t9711 = (function __GT_t9711(ch__$1,p__$1,filter_GT___$1,meta9712){return (new cljs.core.async.t9711(ch__$1,p__$1,filter_GT___$1,meta9712));
});
}
return (new cljs.core.async.t9711(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7271__auto___9796 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7271__auto___9796,out){
return (function (){var f__7272__auto__ = (function (){var switch__7206__auto__ = ((function (c__7271__auto___9796,out){
return (function (state_9775){var state_val_9776 = (state_9775[(1)]);if((state_val_9776 === (7)))
{var inst_9771 = (state_9775[(2)]);var state_9775__$1 = state_9775;var statearr_9777_9797 = state_9775__$1;(statearr_9777_9797[(2)] = inst_9771);
(statearr_9777_9797[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9776 === (1)))
{var state_9775__$1 = state_9775;var statearr_9778_9798 = state_9775__$1;(statearr_9778_9798[(2)] = null);
(statearr_9778_9798[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9776 === (4)))
{var inst_9757 = (state_9775[(7)]);var inst_9757__$1 = (state_9775[(2)]);var inst_9758 = (inst_9757__$1 == null);var state_9775__$1 = (function (){var statearr_9779 = state_9775;(statearr_9779[(7)] = inst_9757__$1);
return statearr_9779;
})();if(cljs.core.truth_(inst_9758))
{var statearr_9780_9799 = state_9775__$1;(statearr_9780_9799[(1)] = (5));
} else
{var statearr_9781_9800 = state_9775__$1;(statearr_9781_9800[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9776 === (6)))
{var inst_9757 = (state_9775[(7)]);var inst_9762 = p.call(null,inst_9757);var state_9775__$1 = state_9775;if(cljs.core.truth_(inst_9762))
{var statearr_9782_9801 = state_9775__$1;(statearr_9782_9801[(1)] = (8));
} else
{var statearr_9783_9802 = state_9775__$1;(statearr_9783_9802[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9776 === (3)))
{var inst_9773 = (state_9775[(2)]);var state_9775__$1 = state_9775;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9775__$1,inst_9773);
} else
{if((state_val_9776 === (2)))
{var state_9775__$1 = state_9775;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9775__$1,(4),ch);
} else
{if((state_val_9776 === (11)))
{var inst_9765 = (state_9775[(2)]);var state_9775__$1 = state_9775;var statearr_9784_9803 = state_9775__$1;(statearr_9784_9803[(2)] = inst_9765);
(statearr_9784_9803[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9776 === (9)))
{var state_9775__$1 = state_9775;var statearr_9785_9804 = state_9775__$1;(statearr_9785_9804[(2)] = null);
(statearr_9785_9804[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9776 === (5)))
{var inst_9760 = cljs.core.async.close_BANG_.call(null,out);var state_9775__$1 = state_9775;var statearr_9786_9805 = state_9775__$1;(statearr_9786_9805[(2)] = inst_9760);
(statearr_9786_9805[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9776 === (10)))
{var inst_9768 = (state_9775[(2)]);var state_9775__$1 = (function (){var statearr_9787 = state_9775;(statearr_9787[(8)] = inst_9768);
return statearr_9787;
})();var statearr_9788_9806 = state_9775__$1;(statearr_9788_9806[(2)] = null);
(statearr_9788_9806[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9776 === (8)))
{var inst_9757 = (state_9775[(7)]);var state_9775__$1 = state_9775;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9775__$1,(11),out,inst_9757);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7271__auto___9796,out))
;return ((function (switch__7206__auto__,c__7271__auto___9796,out){
return (function() {
var state_machine__7207__auto__ = null;
var state_machine__7207__auto____0 = (function (){var statearr_9792 = [null,null,null,null,null,null,null,null,null];(statearr_9792[(0)] = state_machine__7207__auto__);
(statearr_9792[(1)] = (1));
return statearr_9792;
});
var state_machine__7207__auto____1 = (function (state_9775){while(true){
var ret_value__7208__auto__ = (function (){try{while(true){
var result__7209__auto__ = switch__7206__auto__.call(null,state_9775);if(cljs.core.keyword_identical_QMARK_.call(null,result__7209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7209__auto__;
}
break;
}
}catch (e9793){if((e9793 instanceof Object))
{var ex__7210__auto__ = e9793;var statearr_9794_9807 = state_9775;(statearr_9794_9807[(5)] = ex__7210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9775);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9793;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9808 = state_9775;
state_9775 = G__9808;
continue;
}
} else
{return ret_value__7208__auto__;
}
break;
}
});
state_machine__7207__auto__ = function(state_9775){
switch(arguments.length){
case 0:
return state_machine__7207__auto____0.call(this);
case 1:
return state_machine__7207__auto____1.call(this,state_9775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7207__auto____0;
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7207__auto____1;
return state_machine__7207__auto__;
})()
;})(switch__7206__auto__,c__7271__auto___9796,out))
})();var state__7273__auto__ = (function (){var statearr_9795 = f__7272__auto__.call(null);(statearr_9795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7271__auto___9796);
return statearr_9795;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7273__auto__);
});})(c__7271__auto___9796,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__7271__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7271__auto__){
return (function (){var f__7272__auto__ = (function (){var switch__7206__auto__ = ((function (c__7271__auto__){
return (function (state_9974){var state_val_9975 = (state_9974[(1)]);if((state_val_9975 === (7)))
{var inst_9970 = (state_9974[(2)]);var state_9974__$1 = state_9974;var statearr_9976_10017 = state_9974__$1;(statearr_9976_10017[(2)] = inst_9970);
(statearr_9976_10017[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9975 === (20)))
{var inst_9940 = (state_9974[(7)]);var inst_9951 = (state_9974[(2)]);var inst_9952 = cljs.core.next.call(null,inst_9940);var inst_9926 = inst_9952;var inst_9927 = null;var inst_9928 = (0);var inst_9929 = (0);var state_9974__$1 = (function (){var statearr_9977 = state_9974;(statearr_9977[(8)] = inst_9926);
(statearr_9977[(9)] = inst_9928);
(statearr_9977[(10)] = inst_9927);
(statearr_9977[(11)] = inst_9929);
(statearr_9977[(12)] = inst_9951);
return statearr_9977;
})();var statearr_9978_10018 = state_9974__$1;(statearr_9978_10018[(2)] = null);
(statearr_9978_10018[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9975 === (1)))
{var state_9974__$1 = state_9974;var statearr_9979_10019 = state_9974__$1;(statearr_9979_10019[(2)] = null);
(statearr_9979_10019[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9975 === (4)))
{var inst_9915 = (state_9974[(13)]);var inst_9915__$1 = (state_9974[(2)]);var inst_9916 = (inst_9915__$1 == null);var state_9974__$1 = (function (){var statearr_9980 = state_9974;(statearr_9980[(13)] = inst_9915__$1);
return statearr_9980;
})();if(cljs.core.truth_(inst_9916))
{var statearr_9981_10020 = state_9974__$1;(statearr_9981_10020[(1)] = (5));
} else
{var statearr_9982_10021 = state_9974__$1;(statearr_9982_10021[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9975 === (15)))
{var state_9974__$1 = state_9974;var statearr_9986_10022 = state_9974__$1;(statearr_9986_10022[(2)] = null);
(statearr_9986_10022[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9975 === (21)))
{var state_9974__$1 = state_9974;var statearr_9987_10023 = state_9974__$1;(statearr_9987_10023[(2)] = null);
(statearr_9987_10023[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9975 === (13)))
{var inst_9926 = (state_9974[(8)]);var inst_9928 = (state_9974[(9)]);var inst_9927 = (state_9974[(10)]);var inst_9929 = (state_9974[(11)]);var inst_9936 = (state_9974[(2)]);var inst_9937 = (inst_9929 + (1));var tmp9983 = inst_9926;var tmp9984 = inst_9928;var tmp9985 = inst_9927;var inst_9926__$1 = tmp9983;var inst_9927__$1 = tmp9985;var inst_9928__$1 = tmp9984;var inst_9929__$1 = inst_9937;var state_9974__$1 = (function (){var statearr_9988 = state_9974;(statearr_9988[(8)] = inst_9926__$1);
(statearr_9988[(9)] = inst_9928__$1);
(statearr_9988[(14)] = inst_9936);
(statearr_9988[(10)] = inst_9927__$1);
(statearr_9988[(11)] = inst_9929__$1);
return statearr_9988;
})();var statearr_9989_10024 = state_9974__$1;(statearr_9989_10024[(2)] = null);
(statearr_9989_10024[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9975 === (22)))
{var state_9974__$1 = state_9974;var statearr_9990_10025 = state_9974__$1;(statearr_9990_10025[(2)] = null);
(statearr_9990_10025[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9975 === (6)))
{var inst_9915 = (state_9974[(13)]);var inst_9924 = f.call(null,inst_9915);var inst_9925 = cljs.core.seq.call(null,inst_9924);var inst_9926 = inst_9925;var inst_9927 = null;var inst_9928 = (0);var inst_9929 = (0);var state_9974__$1 = (function (){var statearr_9991 = state_9974;(statearr_9991[(8)] = inst_9926);
(statearr_9991[(9)] = inst_9928);
(statearr_9991[(10)] = inst_9927);
(statearr_9991[(11)] = inst_9929);
return statearr_9991;
})();var statearr_9992_10026 = state_9974__$1;(statearr_9992_10026[(2)] = null);
(statearr_9992_10026[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9975 === (17)))
{var inst_9940 = (state_9974[(7)]);var inst_9944 = cljs.core.chunk_first.call(null,inst_9940);var inst_9945 = cljs.core.chunk_rest.call(null,inst_9940);var inst_9946 = cljs.core.count.call(null,inst_9944);var inst_9926 = inst_9945;var inst_9927 = inst_9944;var inst_9928 = inst_9946;var inst_9929 = (0);var state_9974__$1 = (function (){var statearr_9993 = state_9974;(statearr_9993[(8)] = inst_9926);
(statearr_9993[(9)] = inst_9928);
(statearr_9993[(10)] = inst_9927);
(statearr_9993[(11)] = inst_9929);
return statearr_9993;
})();var statearr_9994_10027 = state_9974__$1;(statearr_9994_10027[(2)] = null);
(statearr_9994_10027[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9975 === (3)))
{var inst_9972 = (state_9974[(2)]);var state_9974__$1 = state_9974;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9974__$1,inst_9972);
} else
{if((state_val_9975 === (12)))
{var inst_9960 = (state_9974[(2)]);var state_9974__$1 = state_9974;var statearr_9995_10028 = state_9974__$1;(statearr_9995_10028[(2)] = inst_9960);
(statearr_9995_10028[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9975 === (2)))
{var state_9974__$1 = state_9974;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9974__$1,(4),in$);
} else
{if((state_val_9975 === (23)))
{var inst_9968 = (state_9974[(2)]);var state_9974__$1 = state_9974;var statearr_9996_10029 = state_9974__$1;(statearr_9996_10029[(2)] = inst_9968);
(statearr_9996_10029[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9975 === (19)))
{var inst_9955 = (state_9974[(2)]);var state_9974__$1 = state_9974;var statearr_9997_10030 = state_9974__$1;(statearr_9997_10030[(2)] = inst_9955);
(statearr_9997_10030[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9975 === (11)))
{var inst_9926 = (state_9974[(8)]);var inst_9940 = (state_9974[(7)]);var inst_9940__$1 = cljs.core.seq.call(null,inst_9926);var state_9974__$1 = (function (){var statearr_9998 = state_9974;(statearr_9998[(7)] = inst_9940__$1);
return statearr_9998;
})();if(inst_9940__$1)
{var statearr_9999_10031 = state_9974__$1;(statearr_9999_10031[(1)] = (14));
} else
{var statearr_10000_10032 = state_9974__$1;(statearr_10000_10032[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9975 === (9)))
{var inst_9962 = (state_9974[(2)]);var inst_9963 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_9974__$1 = (function (){var statearr_10001 = state_9974;(statearr_10001[(15)] = inst_9962);
return statearr_10001;
})();if(cljs.core.truth_(inst_9963))
{var statearr_10002_10033 = state_9974__$1;(statearr_10002_10033[(1)] = (21));
} else
{var statearr_10003_10034 = state_9974__$1;(statearr_10003_10034[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9975 === (5)))
{var inst_9918 = cljs.core.async.close_BANG_.call(null,out);var state_9974__$1 = state_9974;var statearr_10004_10035 = state_9974__$1;(statearr_10004_10035[(2)] = inst_9918);
(statearr_10004_10035[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9975 === (14)))
{var inst_9940 = (state_9974[(7)]);var inst_9942 = cljs.core.chunked_seq_QMARK_.call(null,inst_9940);var state_9974__$1 = state_9974;if(inst_9942)
{var statearr_10005_10036 = state_9974__$1;(statearr_10005_10036[(1)] = (17));
} else
{var statearr_10006_10037 = state_9974__$1;(statearr_10006_10037[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9975 === (16)))
{var inst_9958 = (state_9974[(2)]);var state_9974__$1 = state_9974;var statearr_10007_10038 = state_9974__$1;(statearr_10007_10038[(2)] = inst_9958);
(statearr_10007_10038[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9975 === (10)))
{var inst_9927 = (state_9974[(10)]);var inst_9929 = (state_9974[(11)]);var inst_9934 = cljs.core._nth.call(null,inst_9927,inst_9929);var state_9974__$1 = state_9974;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9974__$1,(13),out,inst_9934);
} else
{if((state_val_9975 === (18)))
{var inst_9940 = (state_9974[(7)]);var inst_9949 = cljs.core.first.call(null,inst_9940);var state_9974__$1 = state_9974;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9974__$1,(20),out,inst_9949);
} else
{if((state_val_9975 === (8)))
{var inst_9928 = (state_9974[(9)]);var inst_9929 = (state_9974[(11)]);var inst_9931 = (inst_9929 < inst_9928);var inst_9932 = inst_9931;var state_9974__$1 = state_9974;if(cljs.core.truth_(inst_9932))
{var statearr_10008_10039 = state_9974__$1;(statearr_10008_10039[(1)] = (10));
} else
{var statearr_10009_10040 = state_9974__$1;(statearr_10009_10040[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7271__auto__))
;return ((function (switch__7206__auto__,c__7271__auto__){
return (function() {
var state_machine__7207__auto__ = null;
var state_machine__7207__auto____0 = (function (){var statearr_10013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10013[(0)] = state_machine__7207__auto__);
(statearr_10013[(1)] = (1));
return statearr_10013;
});
var state_machine__7207__auto____1 = (function (state_9974){while(true){
var ret_value__7208__auto__ = (function (){try{while(true){
var result__7209__auto__ = switch__7206__auto__.call(null,state_9974);if(cljs.core.keyword_identical_QMARK_.call(null,result__7209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7209__auto__;
}
break;
}
}catch (e10014){if((e10014 instanceof Object))
{var ex__7210__auto__ = e10014;var statearr_10015_10041 = state_9974;(statearr_10015_10041[(5)] = ex__7210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9974);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10014;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10042 = state_9974;
state_9974 = G__10042;
continue;
}
} else
{return ret_value__7208__auto__;
}
break;
}
});
state_machine__7207__auto__ = function(state_9974){
switch(arguments.length){
case 0:
return state_machine__7207__auto____0.call(this);
case 1:
return state_machine__7207__auto____1.call(this,state_9974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7207__auto____0;
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7207__auto____1;
return state_machine__7207__auto__;
})()
;})(switch__7206__auto__,c__7271__auto__))
})();var state__7273__auto__ = (function (){var statearr_10016 = f__7272__auto__.call(null);(statearr_10016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7271__auto__);
return statearr_10016;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7273__auto__);
});})(c__7271__auto__))
);
return c__7271__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__7271__auto___10137 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7271__auto___10137){
return (function (){var f__7272__auto__ = (function (){var switch__7206__auto__ = ((function (c__7271__auto___10137){
return (function (state_10113){var state_val_10114 = (state_10113[(1)]);if((state_val_10114 === (7)))
{var inst_10109 = (state_10113[(2)]);var state_10113__$1 = state_10113;var statearr_10115_10138 = state_10113__$1;(statearr_10115_10138[(2)] = inst_10109);
(statearr_10115_10138[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10114 === (1)))
{var state_10113__$1 = state_10113;var statearr_10116_10139 = state_10113__$1;(statearr_10116_10139[(2)] = null);
(statearr_10116_10139[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10114 === (4)))
{var inst_10092 = (state_10113[(7)]);var inst_10092__$1 = (state_10113[(2)]);var inst_10093 = (inst_10092__$1 == null);var state_10113__$1 = (function (){var statearr_10117 = state_10113;(statearr_10117[(7)] = inst_10092__$1);
return statearr_10117;
})();if(cljs.core.truth_(inst_10093))
{var statearr_10118_10140 = state_10113__$1;(statearr_10118_10140[(1)] = (5));
} else
{var statearr_10119_10141 = state_10113__$1;(statearr_10119_10141[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10114 === (13)))
{var state_10113__$1 = state_10113;var statearr_10120_10142 = state_10113__$1;(statearr_10120_10142[(2)] = null);
(statearr_10120_10142[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10114 === (6)))
{var inst_10092 = (state_10113[(7)]);var state_10113__$1 = state_10113;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10113__$1,(11),to,inst_10092);
} else
{if((state_val_10114 === (3)))
{var inst_10111 = (state_10113[(2)]);var state_10113__$1 = state_10113;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10113__$1,inst_10111);
} else
{if((state_val_10114 === (12)))
{var state_10113__$1 = state_10113;var statearr_10121_10143 = state_10113__$1;(statearr_10121_10143[(2)] = null);
(statearr_10121_10143[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10114 === (2)))
{var state_10113__$1 = state_10113;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10113__$1,(4),from);
} else
{if((state_val_10114 === (11)))
{var inst_10102 = (state_10113[(2)]);var state_10113__$1 = state_10113;if(cljs.core.truth_(inst_10102))
{var statearr_10122_10144 = state_10113__$1;(statearr_10122_10144[(1)] = (12));
} else
{var statearr_10123_10145 = state_10113__$1;(statearr_10123_10145[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10114 === (9)))
{var state_10113__$1 = state_10113;var statearr_10124_10146 = state_10113__$1;(statearr_10124_10146[(2)] = null);
(statearr_10124_10146[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10114 === (5)))
{var state_10113__$1 = state_10113;if(cljs.core.truth_(close_QMARK_))
{var statearr_10125_10147 = state_10113__$1;(statearr_10125_10147[(1)] = (8));
} else
{var statearr_10126_10148 = state_10113__$1;(statearr_10126_10148[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10114 === (14)))
{var inst_10107 = (state_10113[(2)]);var state_10113__$1 = state_10113;var statearr_10127_10149 = state_10113__$1;(statearr_10127_10149[(2)] = inst_10107);
(statearr_10127_10149[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10114 === (10)))
{var inst_10099 = (state_10113[(2)]);var state_10113__$1 = state_10113;var statearr_10128_10150 = state_10113__$1;(statearr_10128_10150[(2)] = inst_10099);
(statearr_10128_10150[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10114 === (8)))
{var inst_10096 = cljs.core.async.close_BANG_.call(null,to);var state_10113__$1 = state_10113;var statearr_10129_10151 = state_10113__$1;(statearr_10129_10151[(2)] = inst_10096);
(statearr_10129_10151[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7271__auto___10137))
;return ((function (switch__7206__auto__,c__7271__auto___10137){
return (function() {
var state_machine__7207__auto__ = null;
var state_machine__7207__auto____0 = (function (){var statearr_10133 = [null,null,null,null,null,null,null,null];(statearr_10133[(0)] = state_machine__7207__auto__);
(statearr_10133[(1)] = (1));
return statearr_10133;
});
var state_machine__7207__auto____1 = (function (state_10113){while(true){
var ret_value__7208__auto__ = (function (){try{while(true){
var result__7209__auto__ = switch__7206__auto__.call(null,state_10113);if(cljs.core.keyword_identical_QMARK_.call(null,result__7209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7209__auto__;
}
break;
}
}catch (e10134){if((e10134 instanceof Object))
{var ex__7210__auto__ = e10134;var statearr_10135_10152 = state_10113;(statearr_10135_10152[(5)] = ex__7210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10113);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10134;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10153 = state_10113;
state_10113 = G__10153;
continue;
}
} else
{return ret_value__7208__auto__;
}
break;
}
});
state_machine__7207__auto__ = function(state_10113){
switch(arguments.length){
case 0:
return state_machine__7207__auto____0.call(this);
case 1:
return state_machine__7207__auto____1.call(this,state_10113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7207__auto____0;
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7207__auto____1;
return state_machine__7207__auto__;
})()
;})(switch__7206__auto__,c__7271__auto___10137))
})();var state__7273__auto__ = (function (){var statearr_10136 = f__7272__auto__.call(null);(statearr_10136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7271__auto___10137);
return statearr_10136;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7273__auto__);
});})(c__7271__auto___10137))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__7271__auto___10254 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7271__auto___10254,tc,fc){
return (function (){var f__7272__auto__ = (function (){var switch__7206__auto__ = ((function (c__7271__auto___10254,tc,fc){
return (function (state_10229){var state_val_10230 = (state_10229[(1)]);if((state_val_10230 === (7)))
{var inst_10225 = (state_10229[(2)]);var state_10229__$1 = state_10229;var statearr_10231_10255 = state_10229__$1;(statearr_10231_10255[(2)] = inst_10225);
(statearr_10231_10255[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10230 === (1)))
{var state_10229__$1 = state_10229;var statearr_10232_10256 = state_10229__$1;(statearr_10232_10256[(2)] = null);
(statearr_10232_10256[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10230 === (4)))
{var inst_10206 = (state_10229[(7)]);var inst_10206__$1 = (state_10229[(2)]);var inst_10207 = (inst_10206__$1 == null);var state_10229__$1 = (function (){var statearr_10233 = state_10229;(statearr_10233[(7)] = inst_10206__$1);
return statearr_10233;
})();if(cljs.core.truth_(inst_10207))
{var statearr_10234_10257 = state_10229__$1;(statearr_10234_10257[(1)] = (5));
} else
{var statearr_10235_10258 = state_10229__$1;(statearr_10235_10258[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10230 === (13)))
{var state_10229__$1 = state_10229;var statearr_10236_10259 = state_10229__$1;(statearr_10236_10259[(2)] = null);
(statearr_10236_10259[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10230 === (6)))
{var inst_10206 = (state_10229[(7)]);var inst_10212 = p.call(null,inst_10206);var state_10229__$1 = state_10229;if(cljs.core.truth_(inst_10212))
{var statearr_10237_10260 = state_10229__$1;(statearr_10237_10260[(1)] = (9));
} else
{var statearr_10238_10261 = state_10229__$1;(statearr_10238_10261[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10230 === (3)))
{var inst_10227 = (state_10229[(2)]);var state_10229__$1 = state_10229;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10229__$1,inst_10227);
} else
{if((state_val_10230 === (12)))
{var state_10229__$1 = state_10229;var statearr_10239_10262 = state_10229__$1;(statearr_10239_10262[(2)] = null);
(statearr_10239_10262[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10230 === (2)))
{var state_10229__$1 = state_10229;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10229__$1,(4),ch);
} else
{if((state_val_10230 === (11)))
{var inst_10206 = (state_10229[(7)]);var inst_10216 = (state_10229[(2)]);var state_10229__$1 = state_10229;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10229__$1,(8),inst_10216,inst_10206);
} else
{if((state_val_10230 === (9)))
{var state_10229__$1 = state_10229;var statearr_10240_10263 = state_10229__$1;(statearr_10240_10263[(2)] = tc);
(statearr_10240_10263[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10230 === (5)))
{var inst_10209 = cljs.core.async.close_BANG_.call(null,tc);var inst_10210 = cljs.core.async.close_BANG_.call(null,fc);var state_10229__$1 = (function (){var statearr_10241 = state_10229;(statearr_10241[(8)] = inst_10209);
return statearr_10241;
})();var statearr_10242_10264 = state_10229__$1;(statearr_10242_10264[(2)] = inst_10210);
(statearr_10242_10264[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10230 === (14)))
{var inst_10223 = (state_10229[(2)]);var state_10229__$1 = state_10229;var statearr_10243_10265 = state_10229__$1;(statearr_10243_10265[(2)] = inst_10223);
(statearr_10243_10265[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10230 === (10)))
{var state_10229__$1 = state_10229;var statearr_10244_10266 = state_10229__$1;(statearr_10244_10266[(2)] = fc);
(statearr_10244_10266[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10230 === (8)))
{var inst_10218 = (state_10229[(2)]);var state_10229__$1 = state_10229;if(cljs.core.truth_(inst_10218))
{var statearr_10245_10267 = state_10229__$1;(statearr_10245_10267[(1)] = (12));
} else
{var statearr_10246_10268 = state_10229__$1;(statearr_10246_10268[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7271__auto___10254,tc,fc))
;return ((function (switch__7206__auto__,c__7271__auto___10254,tc,fc){
return (function() {
var state_machine__7207__auto__ = null;
var state_machine__7207__auto____0 = (function (){var statearr_10250 = [null,null,null,null,null,null,null,null,null];(statearr_10250[(0)] = state_machine__7207__auto__);
(statearr_10250[(1)] = (1));
return statearr_10250;
});
var state_machine__7207__auto____1 = (function (state_10229){while(true){
var ret_value__7208__auto__ = (function (){try{while(true){
var result__7209__auto__ = switch__7206__auto__.call(null,state_10229);if(cljs.core.keyword_identical_QMARK_.call(null,result__7209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7209__auto__;
}
break;
}
}catch (e10251){if((e10251 instanceof Object))
{var ex__7210__auto__ = e10251;var statearr_10252_10269 = state_10229;(statearr_10252_10269[(5)] = ex__7210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10229);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10251;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10270 = state_10229;
state_10229 = G__10270;
continue;
}
} else
{return ret_value__7208__auto__;
}
break;
}
});
state_machine__7207__auto__ = function(state_10229){
switch(arguments.length){
case 0:
return state_machine__7207__auto____0.call(this);
case 1:
return state_machine__7207__auto____1.call(this,state_10229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7207__auto____0;
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7207__auto____1;
return state_machine__7207__auto__;
})()
;})(switch__7206__auto__,c__7271__auto___10254,tc,fc))
})();var state__7273__auto__ = (function (){var statearr_10253 = f__7272__auto__.call(null);(statearr_10253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7271__auto___10254);
return statearr_10253;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7273__auto__);
});})(c__7271__auto___10254,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__7271__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7271__auto__){
return (function (){var f__7272__auto__ = (function (){var switch__7206__auto__ = ((function (c__7271__auto__){
return (function (state_10317){var state_val_10318 = (state_10317[(1)]);if((state_val_10318 === (7)))
{var inst_10313 = (state_10317[(2)]);var state_10317__$1 = state_10317;var statearr_10319_10335 = state_10317__$1;(statearr_10319_10335[(2)] = inst_10313);
(statearr_10319_10335[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10318 === (6)))
{var inst_10306 = (state_10317[(7)]);var inst_10303 = (state_10317[(8)]);var inst_10310 = f.call(null,inst_10303,inst_10306);var inst_10303__$1 = inst_10310;var state_10317__$1 = (function (){var statearr_10320 = state_10317;(statearr_10320[(8)] = inst_10303__$1);
return statearr_10320;
})();var statearr_10321_10336 = state_10317__$1;(statearr_10321_10336[(2)] = null);
(statearr_10321_10336[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10318 === (5)))
{var inst_10303 = (state_10317[(8)]);var state_10317__$1 = state_10317;var statearr_10322_10337 = state_10317__$1;(statearr_10322_10337[(2)] = inst_10303);
(statearr_10322_10337[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10318 === (4)))
{var inst_10306 = (state_10317[(7)]);var inst_10306__$1 = (state_10317[(2)]);var inst_10307 = (inst_10306__$1 == null);var state_10317__$1 = (function (){var statearr_10323 = state_10317;(statearr_10323[(7)] = inst_10306__$1);
return statearr_10323;
})();if(cljs.core.truth_(inst_10307))
{var statearr_10324_10338 = state_10317__$1;(statearr_10324_10338[(1)] = (5));
} else
{var statearr_10325_10339 = state_10317__$1;(statearr_10325_10339[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10318 === (3)))
{var inst_10315 = (state_10317[(2)]);var state_10317__$1 = state_10317;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10317__$1,inst_10315);
} else
{if((state_val_10318 === (2)))
{var state_10317__$1 = state_10317;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10317__$1,(4),ch);
} else
{if((state_val_10318 === (1)))
{var inst_10303 = init;var state_10317__$1 = (function (){var statearr_10326 = state_10317;(statearr_10326[(8)] = inst_10303);
return statearr_10326;
})();var statearr_10327_10340 = state_10317__$1;(statearr_10327_10340[(2)] = null);
(statearr_10327_10340[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__7271__auto__))
;return ((function (switch__7206__auto__,c__7271__auto__){
return (function() {
var state_machine__7207__auto__ = null;
var state_machine__7207__auto____0 = (function (){var statearr_10331 = [null,null,null,null,null,null,null,null,null];(statearr_10331[(0)] = state_machine__7207__auto__);
(statearr_10331[(1)] = (1));
return statearr_10331;
});
var state_machine__7207__auto____1 = (function (state_10317){while(true){
var ret_value__7208__auto__ = (function (){try{while(true){
var result__7209__auto__ = switch__7206__auto__.call(null,state_10317);if(cljs.core.keyword_identical_QMARK_.call(null,result__7209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7209__auto__;
}
break;
}
}catch (e10332){if((e10332 instanceof Object))
{var ex__7210__auto__ = e10332;var statearr_10333_10341 = state_10317;(statearr_10333_10341[(5)] = ex__7210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10317);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10332;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10342 = state_10317;
state_10317 = G__10342;
continue;
}
} else
{return ret_value__7208__auto__;
}
break;
}
});
state_machine__7207__auto__ = function(state_10317){
switch(arguments.length){
case 0:
return state_machine__7207__auto____0.call(this);
case 1:
return state_machine__7207__auto____1.call(this,state_10317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7207__auto____0;
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7207__auto____1;
return state_machine__7207__auto__;
})()
;})(switch__7206__auto__,c__7271__auto__))
})();var state__7273__auto__ = (function (){var statearr_10334 = f__7272__auto__.call(null);(statearr_10334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7271__auto__);
return statearr_10334;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7273__auto__);
});})(c__7271__auto__))
);
return c__7271__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__7271__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7271__auto__){
return (function (){var f__7272__auto__ = (function (){var switch__7206__auto__ = ((function (c__7271__auto__){
return (function (state_10416){var state_val_10417 = (state_10416[(1)]);if((state_val_10417 === (7)))
{var inst_10398 = (state_10416[(2)]);var state_10416__$1 = state_10416;var statearr_10418_10441 = state_10416__$1;(statearr_10418_10441[(2)] = inst_10398);
(statearr_10418_10441[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10417 === (1)))
{var inst_10392 = cljs.core.seq.call(null,coll);var inst_10393 = inst_10392;var state_10416__$1 = (function (){var statearr_10419 = state_10416;(statearr_10419[(7)] = inst_10393);
return statearr_10419;
})();var statearr_10420_10442 = state_10416__$1;(statearr_10420_10442[(2)] = null);
(statearr_10420_10442[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10417 === (4)))
{var inst_10393 = (state_10416[(7)]);var inst_10396 = cljs.core.first.call(null,inst_10393);var state_10416__$1 = state_10416;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10416__$1,(7),ch,inst_10396);
} else
{if((state_val_10417 === (13)))
{var inst_10410 = (state_10416[(2)]);var state_10416__$1 = state_10416;var statearr_10421_10443 = state_10416__$1;(statearr_10421_10443[(2)] = inst_10410);
(statearr_10421_10443[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10417 === (6)))
{var inst_10401 = (state_10416[(2)]);var state_10416__$1 = state_10416;if(cljs.core.truth_(inst_10401))
{var statearr_10422_10444 = state_10416__$1;(statearr_10422_10444[(1)] = (8));
} else
{var statearr_10423_10445 = state_10416__$1;(statearr_10423_10445[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10417 === (3)))
{var inst_10414 = (state_10416[(2)]);var state_10416__$1 = state_10416;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10416__$1,inst_10414);
} else
{if((state_val_10417 === (12)))
{var state_10416__$1 = state_10416;var statearr_10424_10446 = state_10416__$1;(statearr_10424_10446[(2)] = null);
(statearr_10424_10446[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10417 === (2)))
{var inst_10393 = (state_10416[(7)]);var state_10416__$1 = state_10416;if(cljs.core.truth_(inst_10393))
{var statearr_10425_10447 = state_10416__$1;(statearr_10425_10447[(1)] = (4));
} else
{var statearr_10426_10448 = state_10416__$1;(statearr_10426_10448[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10417 === (11)))
{var inst_10407 = cljs.core.async.close_BANG_.call(null,ch);var state_10416__$1 = state_10416;var statearr_10427_10449 = state_10416__$1;(statearr_10427_10449[(2)] = inst_10407);
(statearr_10427_10449[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10417 === (9)))
{var state_10416__$1 = state_10416;if(cljs.core.truth_(close_QMARK_))
{var statearr_10428_10450 = state_10416__$1;(statearr_10428_10450[(1)] = (11));
} else
{var statearr_10429_10451 = state_10416__$1;(statearr_10429_10451[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10417 === (5)))
{var inst_10393 = (state_10416[(7)]);var state_10416__$1 = state_10416;var statearr_10430_10452 = state_10416__$1;(statearr_10430_10452[(2)] = inst_10393);
(statearr_10430_10452[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10417 === (10)))
{var inst_10412 = (state_10416[(2)]);var state_10416__$1 = state_10416;var statearr_10431_10453 = state_10416__$1;(statearr_10431_10453[(2)] = inst_10412);
(statearr_10431_10453[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10417 === (8)))
{var inst_10393 = (state_10416[(7)]);var inst_10403 = cljs.core.next.call(null,inst_10393);var inst_10393__$1 = inst_10403;var state_10416__$1 = (function (){var statearr_10432 = state_10416;(statearr_10432[(7)] = inst_10393__$1);
return statearr_10432;
})();var statearr_10433_10454 = state_10416__$1;(statearr_10433_10454[(2)] = null);
(statearr_10433_10454[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7271__auto__))
;return ((function (switch__7206__auto__,c__7271__auto__){
return (function() {
var state_machine__7207__auto__ = null;
var state_machine__7207__auto____0 = (function (){var statearr_10437 = [null,null,null,null,null,null,null,null];(statearr_10437[(0)] = state_machine__7207__auto__);
(statearr_10437[(1)] = (1));
return statearr_10437;
});
var state_machine__7207__auto____1 = (function (state_10416){while(true){
var ret_value__7208__auto__ = (function (){try{while(true){
var result__7209__auto__ = switch__7206__auto__.call(null,state_10416);if(cljs.core.keyword_identical_QMARK_.call(null,result__7209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7209__auto__;
}
break;
}
}catch (e10438){if((e10438 instanceof Object))
{var ex__7210__auto__ = e10438;var statearr_10439_10455 = state_10416;(statearr_10439_10455[(5)] = ex__7210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10416);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10438;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10456 = state_10416;
state_10416 = G__10456;
continue;
}
} else
{return ret_value__7208__auto__;
}
break;
}
});
state_machine__7207__auto__ = function(state_10416){
switch(arguments.length){
case 0:
return state_machine__7207__auto____0.call(this);
case 1:
return state_machine__7207__auto____1.call(this,state_10416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7207__auto____0;
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7207__auto____1;
return state_machine__7207__auto__;
})()
;})(switch__7206__auto__,c__7271__auto__))
})();var state__7273__auto__ = (function (){var statearr_10440 = f__7272__auto__.call(null);(statearr_10440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7271__auto__);
return statearr_10440;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7273__auto__);
});})(c__7271__auto__))
);
return c__7271__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj10458 = {};return obj10458;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3541__auto__ = _;if(and__3541__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4180__auto__ = (((_ == null))?null:_);return (function (){var or__3553__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj10460 = {};return obj10460;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10682 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10682 = (function (cs,ch,mult,meta10683){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10683 = meta10683;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10682.cljs$lang$type = true;
cljs.core.async.t10682.cljs$lang$ctorStr = "cljs.core.async/t10682";
cljs.core.async.t10682.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t10682");
});})(cs))
;
cljs.core.async.t10682.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10682.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10682.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10682.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10682.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10682.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10682.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10684){var self__ = this;
var _10684__$1 = this;return self__.meta10683;
});})(cs))
;
cljs.core.async.t10682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10684,meta10683__$1){var self__ = this;
var _10684__$1 = this;return (new cljs.core.async.t10682(self__.cs,self__.ch,self__.mult,meta10683__$1));
});})(cs))
;
cljs.core.async.__GT_t10682 = ((function (cs){
return (function __GT_t10682(cs__$1,ch__$1,mult__$1,meta10683){return (new cljs.core.async.t10682(cs__$1,ch__$1,mult__$1,meta10683));
});})(cs))
;
}
return (new cljs.core.async.t10682(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__7271__auto___10903 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7271__auto___10903,cs,m,dchan,dctr,done){
return (function (){var f__7272__auto__ = (function (){var switch__7206__auto__ = ((function (c__7271__auto___10903,cs,m,dchan,dctr,done){
return (function (state_10815){var state_val_10816 = (state_10815[(1)]);if((state_val_10816 === (7)))
{var inst_10811 = (state_10815[(2)]);var state_10815__$1 = state_10815;var statearr_10817_10904 = state_10815__$1;(statearr_10817_10904[(2)] = inst_10811);
(statearr_10817_10904[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (20)))
{var inst_10716 = (state_10815[(7)]);var inst_10726 = cljs.core.first.call(null,inst_10716);var inst_10727 = cljs.core.nth.call(null,inst_10726,(0),null);var inst_10728 = cljs.core.nth.call(null,inst_10726,(1),null);var state_10815__$1 = (function (){var statearr_10818 = state_10815;(statearr_10818[(8)] = inst_10727);
return statearr_10818;
})();if(cljs.core.truth_(inst_10728))
{var statearr_10819_10905 = state_10815__$1;(statearr_10819_10905[(1)] = (22));
} else
{var statearr_10820_10906 = state_10815__$1;(statearr_10820_10906[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (27)))
{var inst_10758 = (state_10815[(9)]);var inst_10687 = (state_10815[(10)]);var inst_10763 = (state_10815[(11)]);var inst_10756 = (state_10815[(12)]);var inst_10763__$1 = cljs.core._nth.call(null,inst_10756,inst_10758);var inst_10764 = cljs.core.async.put_BANG_.call(null,inst_10763__$1,inst_10687,done);var state_10815__$1 = (function (){var statearr_10821 = state_10815;(statearr_10821[(11)] = inst_10763__$1);
return statearr_10821;
})();if(cljs.core.truth_(inst_10764))
{var statearr_10822_10907 = state_10815__$1;(statearr_10822_10907[(1)] = (30));
} else
{var statearr_10823_10908 = state_10815__$1;(statearr_10823_10908[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (1)))
{var state_10815__$1 = state_10815;var statearr_10824_10909 = state_10815__$1;(statearr_10824_10909[(2)] = null);
(statearr_10824_10909[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (24)))
{var inst_10716 = (state_10815[(7)]);var inst_10733 = (state_10815[(2)]);var inst_10734 = cljs.core.next.call(null,inst_10716);var inst_10696 = inst_10734;var inst_10697 = null;var inst_10698 = (0);var inst_10699 = (0);var state_10815__$1 = (function (){var statearr_10825 = state_10815;(statearr_10825[(13)] = inst_10733);
(statearr_10825[(14)] = inst_10696);
(statearr_10825[(15)] = inst_10699);
(statearr_10825[(16)] = inst_10698);
(statearr_10825[(17)] = inst_10697);
return statearr_10825;
})();var statearr_10826_10910 = state_10815__$1;(statearr_10826_10910[(2)] = null);
(statearr_10826_10910[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (39)))
{var state_10815__$1 = state_10815;var statearr_10830_10911 = state_10815__$1;(statearr_10830_10911[(2)] = null);
(statearr_10830_10911[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (4)))
{var inst_10687 = (state_10815[(10)]);var inst_10687__$1 = (state_10815[(2)]);var inst_10688 = (inst_10687__$1 == null);var state_10815__$1 = (function (){var statearr_10831 = state_10815;(statearr_10831[(10)] = inst_10687__$1);
return statearr_10831;
})();if(cljs.core.truth_(inst_10688))
{var statearr_10832_10912 = state_10815__$1;(statearr_10832_10912[(1)] = (5));
} else
{var statearr_10833_10913 = state_10815__$1;(statearr_10833_10913[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (15)))
{var inst_10696 = (state_10815[(14)]);var inst_10699 = (state_10815[(15)]);var inst_10698 = (state_10815[(16)]);var inst_10697 = (state_10815[(17)]);var inst_10712 = (state_10815[(2)]);var inst_10713 = (inst_10699 + (1));var tmp10827 = inst_10696;var tmp10828 = inst_10698;var tmp10829 = inst_10697;var inst_10696__$1 = tmp10827;var inst_10697__$1 = tmp10829;var inst_10698__$1 = tmp10828;var inst_10699__$1 = inst_10713;var state_10815__$1 = (function (){var statearr_10834 = state_10815;(statearr_10834[(14)] = inst_10696__$1);
(statearr_10834[(15)] = inst_10699__$1);
(statearr_10834[(16)] = inst_10698__$1);
(statearr_10834[(17)] = inst_10697__$1);
(statearr_10834[(18)] = inst_10712);
return statearr_10834;
})();var statearr_10835_10914 = state_10815__$1;(statearr_10835_10914[(2)] = null);
(statearr_10835_10914[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (21)))
{var inst_10737 = (state_10815[(2)]);var state_10815__$1 = state_10815;var statearr_10839_10915 = state_10815__$1;(statearr_10839_10915[(2)] = inst_10737);
(statearr_10839_10915[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (31)))
{var inst_10763 = (state_10815[(11)]);var inst_10767 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10768 = cljs.core.async.untap_STAR_.call(null,m,inst_10763);var state_10815__$1 = (function (){var statearr_10840 = state_10815;(statearr_10840[(19)] = inst_10767);
return statearr_10840;
})();var statearr_10841_10916 = state_10815__$1;(statearr_10841_10916[(2)] = inst_10768);
(statearr_10841_10916[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (32)))
{var inst_10758 = (state_10815[(9)]);var inst_10755 = (state_10815[(20)]);var inst_10757 = (state_10815[(21)]);var inst_10756 = (state_10815[(12)]);var inst_10770 = (state_10815[(2)]);var inst_10771 = (inst_10758 + (1));var tmp10836 = inst_10755;var tmp10837 = inst_10757;var tmp10838 = inst_10756;var inst_10755__$1 = tmp10836;var inst_10756__$1 = tmp10838;var inst_10757__$1 = tmp10837;var inst_10758__$1 = inst_10771;var state_10815__$1 = (function (){var statearr_10842 = state_10815;(statearr_10842[(9)] = inst_10758__$1);
(statearr_10842[(20)] = inst_10755__$1);
(statearr_10842[(21)] = inst_10757__$1);
(statearr_10842[(22)] = inst_10770);
(statearr_10842[(12)] = inst_10756__$1);
return statearr_10842;
})();var statearr_10843_10917 = state_10815__$1;(statearr_10843_10917[(2)] = null);
(statearr_10843_10917[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (40)))
{var inst_10783 = (state_10815[(23)]);var inst_10787 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10788 = cljs.core.async.untap_STAR_.call(null,m,inst_10783);var state_10815__$1 = (function (){var statearr_10844 = state_10815;(statearr_10844[(24)] = inst_10787);
return statearr_10844;
})();var statearr_10845_10918 = state_10815__$1;(statearr_10845_10918[(2)] = inst_10788);
(statearr_10845_10918[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (33)))
{var inst_10774 = (state_10815[(25)]);var inst_10776 = cljs.core.chunked_seq_QMARK_.call(null,inst_10774);var state_10815__$1 = state_10815;if(inst_10776)
{var statearr_10846_10919 = state_10815__$1;(statearr_10846_10919[(1)] = (36));
} else
{var statearr_10847_10920 = state_10815__$1;(statearr_10847_10920[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (13)))
{var inst_10706 = (state_10815[(26)]);var inst_10709 = cljs.core.async.close_BANG_.call(null,inst_10706);var state_10815__$1 = state_10815;var statearr_10848_10921 = state_10815__$1;(statearr_10848_10921[(2)] = inst_10709);
(statearr_10848_10921[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (22)))
{var inst_10727 = (state_10815[(8)]);var inst_10730 = cljs.core.async.close_BANG_.call(null,inst_10727);var state_10815__$1 = state_10815;var statearr_10849_10922 = state_10815__$1;(statearr_10849_10922[(2)] = inst_10730);
(statearr_10849_10922[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (36)))
{var inst_10774 = (state_10815[(25)]);var inst_10778 = cljs.core.chunk_first.call(null,inst_10774);var inst_10779 = cljs.core.chunk_rest.call(null,inst_10774);var inst_10780 = cljs.core.count.call(null,inst_10778);var inst_10755 = inst_10779;var inst_10756 = inst_10778;var inst_10757 = inst_10780;var inst_10758 = (0);var state_10815__$1 = (function (){var statearr_10850 = state_10815;(statearr_10850[(9)] = inst_10758);
(statearr_10850[(20)] = inst_10755);
(statearr_10850[(21)] = inst_10757);
(statearr_10850[(12)] = inst_10756);
return statearr_10850;
})();var statearr_10851_10923 = state_10815__$1;(statearr_10851_10923[(2)] = null);
(statearr_10851_10923[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (41)))
{var inst_10774 = (state_10815[(25)]);var inst_10790 = (state_10815[(2)]);var inst_10791 = cljs.core.next.call(null,inst_10774);var inst_10755 = inst_10791;var inst_10756 = null;var inst_10757 = (0);var inst_10758 = (0);var state_10815__$1 = (function (){var statearr_10852 = state_10815;(statearr_10852[(9)] = inst_10758);
(statearr_10852[(27)] = inst_10790);
(statearr_10852[(20)] = inst_10755);
(statearr_10852[(21)] = inst_10757);
(statearr_10852[(12)] = inst_10756);
return statearr_10852;
})();var statearr_10853_10924 = state_10815__$1;(statearr_10853_10924[(2)] = null);
(statearr_10853_10924[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (43)))
{var state_10815__$1 = state_10815;var statearr_10854_10925 = state_10815__$1;(statearr_10854_10925[(2)] = null);
(statearr_10854_10925[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (29)))
{var inst_10799 = (state_10815[(2)]);var state_10815__$1 = state_10815;var statearr_10855_10926 = state_10815__$1;(statearr_10855_10926[(2)] = inst_10799);
(statearr_10855_10926[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (44)))
{var inst_10808 = (state_10815[(2)]);var state_10815__$1 = (function (){var statearr_10856 = state_10815;(statearr_10856[(28)] = inst_10808);
return statearr_10856;
})();var statearr_10857_10927 = state_10815__$1;(statearr_10857_10927[(2)] = null);
(statearr_10857_10927[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (6)))
{var inst_10747 = (state_10815[(29)]);var inst_10746 = cljs.core.deref.call(null,cs);var inst_10747__$1 = cljs.core.keys.call(null,inst_10746);var inst_10748 = cljs.core.count.call(null,inst_10747__$1);var inst_10749 = cljs.core.reset_BANG_.call(null,dctr,inst_10748);var inst_10754 = cljs.core.seq.call(null,inst_10747__$1);var inst_10755 = inst_10754;var inst_10756 = null;var inst_10757 = (0);var inst_10758 = (0);var state_10815__$1 = (function (){var statearr_10858 = state_10815;(statearr_10858[(29)] = inst_10747__$1);
(statearr_10858[(9)] = inst_10758);
(statearr_10858[(30)] = inst_10749);
(statearr_10858[(20)] = inst_10755);
(statearr_10858[(21)] = inst_10757);
(statearr_10858[(12)] = inst_10756);
return statearr_10858;
})();var statearr_10859_10928 = state_10815__$1;(statearr_10859_10928[(2)] = null);
(statearr_10859_10928[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (28)))
{var inst_10774 = (state_10815[(25)]);var inst_10755 = (state_10815[(20)]);var inst_10774__$1 = cljs.core.seq.call(null,inst_10755);var state_10815__$1 = (function (){var statearr_10860 = state_10815;(statearr_10860[(25)] = inst_10774__$1);
return statearr_10860;
})();if(inst_10774__$1)
{var statearr_10861_10929 = state_10815__$1;(statearr_10861_10929[(1)] = (33));
} else
{var statearr_10862_10930 = state_10815__$1;(statearr_10862_10930[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (25)))
{var inst_10758 = (state_10815[(9)]);var inst_10757 = (state_10815[(21)]);var inst_10760 = (inst_10758 < inst_10757);var inst_10761 = inst_10760;var state_10815__$1 = state_10815;if(cljs.core.truth_(inst_10761))
{var statearr_10863_10931 = state_10815__$1;(statearr_10863_10931[(1)] = (27));
} else
{var statearr_10864_10932 = state_10815__$1;(statearr_10864_10932[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (34)))
{var state_10815__$1 = state_10815;var statearr_10865_10933 = state_10815__$1;(statearr_10865_10933[(2)] = null);
(statearr_10865_10933[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (17)))
{var state_10815__$1 = state_10815;var statearr_10866_10934 = state_10815__$1;(statearr_10866_10934[(2)] = null);
(statearr_10866_10934[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (3)))
{var inst_10813 = (state_10815[(2)]);var state_10815__$1 = state_10815;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10815__$1,inst_10813);
} else
{if((state_val_10816 === (12)))
{var inst_10742 = (state_10815[(2)]);var state_10815__$1 = state_10815;var statearr_10867_10935 = state_10815__$1;(statearr_10867_10935[(2)] = inst_10742);
(statearr_10867_10935[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (2)))
{var state_10815__$1 = state_10815;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10815__$1,(4),ch);
} else
{if((state_val_10816 === (23)))
{var state_10815__$1 = state_10815;var statearr_10868_10936 = state_10815__$1;(statearr_10868_10936[(2)] = null);
(statearr_10868_10936[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (35)))
{var inst_10797 = (state_10815[(2)]);var state_10815__$1 = state_10815;var statearr_10869_10937 = state_10815__$1;(statearr_10869_10937[(2)] = inst_10797);
(statearr_10869_10937[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (19)))
{var inst_10716 = (state_10815[(7)]);var inst_10720 = cljs.core.chunk_first.call(null,inst_10716);var inst_10721 = cljs.core.chunk_rest.call(null,inst_10716);var inst_10722 = cljs.core.count.call(null,inst_10720);var inst_10696 = inst_10721;var inst_10697 = inst_10720;var inst_10698 = inst_10722;var inst_10699 = (0);var state_10815__$1 = (function (){var statearr_10870 = state_10815;(statearr_10870[(14)] = inst_10696);
(statearr_10870[(15)] = inst_10699);
(statearr_10870[(16)] = inst_10698);
(statearr_10870[(17)] = inst_10697);
return statearr_10870;
})();var statearr_10871_10938 = state_10815__$1;(statearr_10871_10938[(2)] = null);
(statearr_10871_10938[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (11)))
{var inst_10696 = (state_10815[(14)]);var inst_10716 = (state_10815[(7)]);var inst_10716__$1 = cljs.core.seq.call(null,inst_10696);var state_10815__$1 = (function (){var statearr_10872 = state_10815;(statearr_10872[(7)] = inst_10716__$1);
return statearr_10872;
})();if(inst_10716__$1)
{var statearr_10873_10939 = state_10815__$1;(statearr_10873_10939[(1)] = (16));
} else
{var statearr_10874_10940 = state_10815__$1;(statearr_10874_10940[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (9)))
{var inst_10744 = (state_10815[(2)]);var state_10815__$1 = state_10815;var statearr_10875_10941 = state_10815__$1;(statearr_10875_10941[(2)] = inst_10744);
(statearr_10875_10941[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (5)))
{var inst_10694 = cljs.core.deref.call(null,cs);var inst_10695 = cljs.core.seq.call(null,inst_10694);var inst_10696 = inst_10695;var inst_10697 = null;var inst_10698 = (0);var inst_10699 = (0);var state_10815__$1 = (function (){var statearr_10876 = state_10815;(statearr_10876[(14)] = inst_10696);
(statearr_10876[(15)] = inst_10699);
(statearr_10876[(16)] = inst_10698);
(statearr_10876[(17)] = inst_10697);
return statearr_10876;
})();var statearr_10877_10942 = state_10815__$1;(statearr_10877_10942[(2)] = null);
(statearr_10877_10942[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (14)))
{var state_10815__$1 = state_10815;var statearr_10878_10943 = state_10815__$1;(statearr_10878_10943[(2)] = null);
(statearr_10878_10943[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (45)))
{var inst_10805 = (state_10815[(2)]);var state_10815__$1 = state_10815;var statearr_10879_10944 = state_10815__$1;(statearr_10879_10944[(2)] = inst_10805);
(statearr_10879_10944[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (26)))
{var inst_10747 = (state_10815[(29)]);var inst_10801 = (state_10815[(2)]);var inst_10802 = cljs.core.seq.call(null,inst_10747);var state_10815__$1 = (function (){var statearr_10880 = state_10815;(statearr_10880[(31)] = inst_10801);
return statearr_10880;
})();if(inst_10802)
{var statearr_10881_10945 = state_10815__$1;(statearr_10881_10945[(1)] = (42));
} else
{var statearr_10882_10946 = state_10815__$1;(statearr_10882_10946[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (16)))
{var inst_10716 = (state_10815[(7)]);var inst_10718 = cljs.core.chunked_seq_QMARK_.call(null,inst_10716);var state_10815__$1 = state_10815;if(inst_10718)
{var statearr_10883_10947 = state_10815__$1;(statearr_10883_10947[(1)] = (19));
} else
{var statearr_10884_10948 = state_10815__$1;(statearr_10884_10948[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (38)))
{var inst_10794 = (state_10815[(2)]);var state_10815__$1 = state_10815;var statearr_10885_10949 = state_10815__$1;(statearr_10885_10949[(2)] = inst_10794);
(statearr_10885_10949[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (30)))
{var state_10815__$1 = state_10815;var statearr_10886_10950 = state_10815__$1;(statearr_10886_10950[(2)] = null);
(statearr_10886_10950[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (10)))
{var inst_10699 = (state_10815[(15)]);var inst_10697 = (state_10815[(17)]);var inst_10705 = cljs.core._nth.call(null,inst_10697,inst_10699);var inst_10706 = cljs.core.nth.call(null,inst_10705,(0),null);var inst_10707 = cljs.core.nth.call(null,inst_10705,(1),null);var state_10815__$1 = (function (){var statearr_10887 = state_10815;(statearr_10887[(26)] = inst_10706);
return statearr_10887;
})();if(cljs.core.truth_(inst_10707))
{var statearr_10888_10951 = state_10815__$1;(statearr_10888_10951[(1)] = (13));
} else
{var statearr_10889_10952 = state_10815__$1;(statearr_10889_10952[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (18)))
{var inst_10740 = (state_10815[(2)]);var state_10815__$1 = state_10815;var statearr_10890_10953 = state_10815__$1;(statearr_10890_10953[(2)] = inst_10740);
(statearr_10890_10953[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (42)))
{var state_10815__$1 = state_10815;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10815__$1,(45),dchan);
} else
{if((state_val_10816 === (37)))
{var inst_10774 = (state_10815[(25)]);var inst_10783 = (state_10815[(23)]);var inst_10687 = (state_10815[(10)]);var inst_10783__$1 = cljs.core.first.call(null,inst_10774);var inst_10784 = cljs.core.async.put_BANG_.call(null,inst_10783__$1,inst_10687,done);var state_10815__$1 = (function (){var statearr_10891 = state_10815;(statearr_10891[(23)] = inst_10783__$1);
return statearr_10891;
})();if(cljs.core.truth_(inst_10784))
{var statearr_10892_10954 = state_10815__$1;(statearr_10892_10954[(1)] = (39));
} else
{var statearr_10893_10955 = state_10815__$1;(statearr_10893_10955[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (8)))
{var inst_10699 = (state_10815[(15)]);var inst_10698 = (state_10815[(16)]);var inst_10701 = (inst_10699 < inst_10698);var inst_10702 = inst_10701;var state_10815__$1 = state_10815;if(cljs.core.truth_(inst_10702))
{var statearr_10894_10956 = state_10815__$1;(statearr_10894_10956[(1)] = (10));
} else
{var statearr_10895_10957 = state_10815__$1;(statearr_10895_10957[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7271__auto___10903,cs,m,dchan,dctr,done))
;return ((function (switch__7206__auto__,c__7271__auto___10903,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7207__auto__ = null;
var state_machine__7207__auto____0 = (function (){var statearr_10899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10899[(0)] = state_machine__7207__auto__);
(statearr_10899[(1)] = (1));
return statearr_10899;
});
var state_machine__7207__auto____1 = (function (state_10815){while(true){
var ret_value__7208__auto__ = (function (){try{while(true){
var result__7209__auto__ = switch__7206__auto__.call(null,state_10815);if(cljs.core.keyword_identical_QMARK_.call(null,result__7209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7209__auto__;
}
break;
}
}catch (e10900){if((e10900 instanceof Object))
{var ex__7210__auto__ = e10900;var statearr_10901_10958 = state_10815;(statearr_10901_10958[(5)] = ex__7210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10815);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10900;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10959 = state_10815;
state_10815 = G__10959;
continue;
}
} else
{return ret_value__7208__auto__;
}
break;
}
});
state_machine__7207__auto__ = function(state_10815){
switch(arguments.length){
case 0:
return state_machine__7207__auto____0.call(this);
case 1:
return state_machine__7207__auto____1.call(this,state_10815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7207__auto____0;
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7207__auto____1;
return state_machine__7207__auto__;
})()
;})(switch__7206__auto__,c__7271__auto___10903,cs,m,dchan,dctr,done))
})();var state__7273__auto__ = (function (){var statearr_10902 = f__7272__auto__.call(null);(statearr_10902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7271__auto___10903);
return statearr_10902;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7273__auto__);
});})(c__7271__auto___10903,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj10961 = {};return obj10961;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t11081 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11081 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11082){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11082 = meta11082;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11081.cljs$lang$type = true;
cljs.core.async.t11081.cljs$lang$ctorStr = "cljs.core.async/t11081";
cljs.core.async.t11081.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11081");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11081.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11081.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11081.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11081.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11081.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11081.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11081.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11081.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11081.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11083){var self__ = this;
var _11083__$1 = this;return self__.meta11082;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11083,meta11082__$1){var self__ = this;
var _11083__$1 = this;return (new cljs.core.async.t11081(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11082__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11081 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11081(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11082){return (new cljs.core.async.t11081(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11082));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11081(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__7271__auto___11200 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7271__auto___11200,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__7272__auto__ = (function (){var switch__7206__auto__ = ((function (c__7271__auto___11200,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11153){var state_val_11154 = (state_11153[(1)]);if((state_val_11154 === (7)))
{var inst_11097 = (state_11153[(7)]);var inst_11102 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11097);var state_11153__$1 = state_11153;var statearr_11155_11201 = state_11153__$1;(statearr_11155_11201[(2)] = inst_11102);
(statearr_11155_11201[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11154 === (20)))
{var inst_11112 = (state_11153[(8)]);var state_11153__$1 = state_11153;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11153__$1,(23),out,inst_11112);
} else
{if((state_val_11154 === (1)))
{var inst_11087 = (state_11153[(9)]);var inst_11087__$1 = calc_state.call(null);var inst_11088 = cljs.core.seq_QMARK_.call(null,inst_11087__$1);var state_11153__$1 = (function (){var statearr_11156 = state_11153;(statearr_11156[(9)] = inst_11087__$1);
return statearr_11156;
})();if(inst_11088)
{var statearr_11157_11202 = state_11153__$1;(statearr_11157_11202[(1)] = (2));
} else
{var statearr_11158_11203 = state_11153__$1;(statearr_11158_11203[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11154 === (24)))
{var inst_11105 = (state_11153[(10)]);var inst_11097 = inst_11105;var state_11153__$1 = (function (){var statearr_11159 = state_11153;(statearr_11159[(7)] = inst_11097);
return statearr_11159;
})();var statearr_11160_11204 = state_11153__$1;(statearr_11160_11204[(2)] = null);
(statearr_11160_11204[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11154 === (4)))
{var inst_11087 = (state_11153[(9)]);var inst_11093 = (state_11153[(2)]);var inst_11094 = cljs.core.get.call(null,inst_11093,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_11095 = cljs.core.get.call(null,inst_11093,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_11096 = cljs.core.get.call(null,inst_11093,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_11097 = inst_11087;var state_11153__$1 = (function (){var statearr_11161 = state_11153;(statearr_11161[(11)] = inst_11094);
(statearr_11161[(12)] = inst_11096);
(statearr_11161[(13)] = inst_11095);
(statearr_11161[(7)] = inst_11097);
return statearr_11161;
})();var statearr_11162_11205 = state_11153__$1;(statearr_11162_11205[(2)] = null);
(statearr_11162_11205[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11154 === (15)))
{var state_11153__$1 = state_11153;var statearr_11163_11206 = state_11153__$1;(statearr_11163_11206[(2)] = null);
(statearr_11163_11206[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11154 === (21)))
{var inst_11105 = (state_11153[(10)]);var inst_11097 = inst_11105;var state_11153__$1 = (function (){var statearr_11164 = state_11153;(statearr_11164[(7)] = inst_11097);
return statearr_11164;
})();var statearr_11165_11207 = state_11153__$1;(statearr_11165_11207[(2)] = null);
(statearr_11165_11207[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11154 === (13)))
{var inst_11149 = (state_11153[(2)]);var state_11153__$1 = state_11153;var statearr_11166_11208 = state_11153__$1;(statearr_11166_11208[(2)] = inst_11149);
(statearr_11166_11208[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11154 === (22)))
{var inst_11147 = (state_11153[(2)]);var state_11153__$1 = state_11153;var statearr_11167_11209 = state_11153__$1;(statearr_11167_11209[(2)] = inst_11147);
(statearr_11167_11209[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11154 === (6)))
{var inst_11151 = (state_11153[(2)]);var state_11153__$1 = state_11153;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11153__$1,inst_11151);
} else
{if((state_val_11154 === (25)))
{var state_11153__$1 = state_11153;var statearr_11168_11210 = state_11153__$1;(statearr_11168_11210[(2)] = null);
(statearr_11168_11210[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11154 === (17)))
{var inst_11127 = (state_11153[(14)]);var state_11153__$1 = state_11153;var statearr_11169_11211 = state_11153__$1;(statearr_11169_11211[(2)] = inst_11127);
(statearr_11169_11211[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11154 === (3)))
{var inst_11087 = (state_11153[(9)]);var state_11153__$1 = state_11153;var statearr_11170_11212 = state_11153__$1;(statearr_11170_11212[(2)] = inst_11087);
(statearr_11170_11212[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11154 === (12)))
{var inst_11127 = (state_11153[(14)]);var inst_11113 = (state_11153[(15)]);var inst_11108 = (state_11153[(16)]);var inst_11127__$1 = inst_11108.call(null,inst_11113);var state_11153__$1 = (function (){var statearr_11171 = state_11153;(statearr_11171[(14)] = inst_11127__$1);
return statearr_11171;
})();if(cljs.core.truth_(inst_11127__$1))
{var statearr_11172_11213 = state_11153__$1;(statearr_11172_11213[(1)] = (17));
} else
{var statearr_11173_11214 = state_11153__$1;(statearr_11173_11214[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11154 === (2)))
{var inst_11087 = (state_11153[(9)]);var inst_11090 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11087);var state_11153__$1 = state_11153;var statearr_11174_11215 = state_11153__$1;(statearr_11174_11215[(2)] = inst_11090);
(statearr_11174_11215[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11154 === (23)))
{var inst_11138 = (state_11153[(2)]);var state_11153__$1 = state_11153;if(cljs.core.truth_(inst_11138))
{var statearr_11175_11216 = state_11153__$1;(statearr_11175_11216[(1)] = (24));
} else
{var statearr_11176_11217 = state_11153__$1;(statearr_11176_11217[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11154 === (19)))
{var inst_11135 = (state_11153[(2)]);var state_11153__$1 = state_11153;if(cljs.core.truth_(inst_11135))
{var statearr_11177_11218 = state_11153__$1;(statearr_11177_11218[(1)] = (20));
} else
{var statearr_11178_11219 = state_11153__$1;(statearr_11178_11219[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11154 === (11)))
{var inst_11112 = (state_11153[(8)]);var inst_11118 = (inst_11112 == null);var state_11153__$1 = state_11153;if(cljs.core.truth_(inst_11118))
{var statearr_11179_11220 = state_11153__$1;(statearr_11179_11220[(1)] = (14));
} else
{var statearr_11180_11221 = state_11153__$1;(statearr_11180_11221[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11154 === (9)))
{var inst_11105 = (state_11153[(10)]);var inst_11105__$1 = (state_11153[(2)]);var inst_11106 = cljs.core.get.call(null,inst_11105__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_11107 = cljs.core.get.call(null,inst_11105__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_11108 = cljs.core.get.call(null,inst_11105__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_11153__$1 = (function (){var statearr_11181 = state_11153;(statearr_11181[(17)] = inst_11107);
(statearr_11181[(10)] = inst_11105__$1);
(statearr_11181[(16)] = inst_11108);
return statearr_11181;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11153__$1,(10),inst_11106);
} else
{if((state_val_11154 === (5)))
{var inst_11097 = (state_11153[(7)]);var inst_11100 = cljs.core.seq_QMARK_.call(null,inst_11097);var state_11153__$1 = state_11153;if(inst_11100)
{var statearr_11182_11222 = state_11153__$1;(statearr_11182_11222[(1)] = (7));
} else
{var statearr_11183_11223 = state_11153__$1;(statearr_11183_11223[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11154 === (14)))
{var inst_11113 = (state_11153[(15)]);var inst_11120 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11113);var state_11153__$1 = state_11153;var statearr_11184_11224 = state_11153__$1;(statearr_11184_11224[(2)] = inst_11120);
(statearr_11184_11224[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11154 === (26)))
{var inst_11143 = (state_11153[(2)]);var state_11153__$1 = state_11153;var statearr_11185_11225 = state_11153__$1;(statearr_11185_11225[(2)] = inst_11143);
(statearr_11185_11225[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11154 === (16)))
{var inst_11123 = (state_11153[(2)]);var inst_11124 = calc_state.call(null);var inst_11097 = inst_11124;var state_11153__$1 = (function (){var statearr_11186 = state_11153;(statearr_11186[(18)] = inst_11123);
(statearr_11186[(7)] = inst_11097);
return statearr_11186;
})();var statearr_11187_11226 = state_11153__$1;(statearr_11187_11226[(2)] = null);
(statearr_11187_11226[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11154 === (10)))
{var inst_11113 = (state_11153[(15)]);var inst_11112 = (state_11153[(8)]);var inst_11111 = (state_11153[(2)]);var inst_11112__$1 = cljs.core.nth.call(null,inst_11111,(0),null);var inst_11113__$1 = cljs.core.nth.call(null,inst_11111,(1),null);var inst_11114 = (inst_11112__$1 == null);var inst_11115 = cljs.core._EQ_.call(null,inst_11113__$1,change);var inst_11116 = (inst_11114) || (inst_11115);var state_11153__$1 = (function (){var statearr_11188 = state_11153;(statearr_11188[(15)] = inst_11113__$1);
(statearr_11188[(8)] = inst_11112__$1);
return statearr_11188;
})();if(cljs.core.truth_(inst_11116))
{var statearr_11189_11227 = state_11153__$1;(statearr_11189_11227[(1)] = (11));
} else
{var statearr_11190_11228 = state_11153__$1;(statearr_11190_11228[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11154 === (18)))
{var inst_11107 = (state_11153[(17)]);var inst_11113 = (state_11153[(15)]);var inst_11108 = (state_11153[(16)]);var inst_11130 = cljs.core.empty_QMARK_.call(null,inst_11108);var inst_11131 = inst_11107.call(null,inst_11113);var inst_11132 = cljs.core.not.call(null,inst_11131);var inst_11133 = (inst_11130) && (inst_11132);var state_11153__$1 = state_11153;var statearr_11191_11229 = state_11153__$1;(statearr_11191_11229[(2)] = inst_11133);
(statearr_11191_11229[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11154 === (8)))
{var inst_11097 = (state_11153[(7)]);var state_11153__$1 = state_11153;var statearr_11192_11230 = state_11153__$1;(statearr_11192_11230[(2)] = inst_11097);
(statearr_11192_11230[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7271__auto___11200,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__7206__auto__,c__7271__auto___11200,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7207__auto__ = null;
var state_machine__7207__auto____0 = (function (){var statearr_11196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11196[(0)] = state_machine__7207__auto__);
(statearr_11196[(1)] = (1));
return statearr_11196;
});
var state_machine__7207__auto____1 = (function (state_11153){while(true){
var ret_value__7208__auto__ = (function (){try{while(true){
var result__7209__auto__ = switch__7206__auto__.call(null,state_11153);if(cljs.core.keyword_identical_QMARK_.call(null,result__7209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7209__auto__;
}
break;
}
}catch (e11197){if((e11197 instanceof Object))
{var ex__7210__auto__ = e11197;var statearr_11198_11231 = state_11153;(statearr_11198_11231[(5)] = ex__7210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11153);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11197;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11232 = state_11153;
state_11153 = G__11232;
continue;
}
} else
{return ret_value__7208__auto__;
}
break;
}
});
state_machine__7207__auto__ = function(state_11153){
switch(arguments.length){
case 0:
return state_machine__7207__auto____0.call(this);
case 1:
return state_machine__7207__auto____1.call(this,state_11153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7207__auto____0;
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7207__auto____1;
return state_machine__7207__auto__;
})()
;})(switch__7206__auto__,c__7271__auto___11200,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__7273__auto__ = (function (){var statearr_11199 = f__7272__auto__.call(null);(statearr_11199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7271__auto___11200);
return statearr_11199;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7273__auto__);
});})(c__7271__auto___11200,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj11234 = {};return obj11234;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3553__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3553__auto__,mults){
return (function (p1__11235_SHARP_){if(cljs.core.truth_(p1__11235_SHARP_.call(null,topic)))
{return p1__11235_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11235_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3553__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11358 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11358 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11359){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11359 = meta11359;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11358.cljs$lang$type = true;
cljs.core.async.t11358.cljs$lang$ctorStr = "cljs.core.async/t11358";
cljs.core.async.t11358.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11358");
});})(mults,ensure_mult))
;
cljs.core.async.t11358.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11358.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11358.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11358.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11358.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11358.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11358.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11358.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11360){var self__ = this;
var _11360__$1 = this;return self__.meta11359;
});})(mults,ensure_mult))
;
cljs.core.async.t11358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11360,meta11359__$1){var self__ = this;
var _11360__$1 = this;return (new cljs.core.async.t11358(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11359__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11358 = ((function (mults,ensure_mult){
return (function __GT_t11358(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11359){return (new cljs.core.async.t11358(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11359));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11358(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__7271__auto___11480 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7271__auto___11480,mults,ensure_mult,p){
return (function (){var f__7272__auto__ = (function (){var switch__7206__auto__ = ((function (c__7271__auto___11480,mults,ensure_mult,p){
return (function (state_11432){var state_val_11433 = (state_11432[(1)]);if((state_val_11433 === (7)))
{var inst_11428 = (state_11432[(2)]);var state_11432__$1 = state_11432;var statearr_11434_11481 = state_11432__$1;(statearr_11434_11481[(2)] = inst_11428);
(statearr_11434_11481[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (20)))
{var state_11432__$1 = state_11432;var statearr_11435_11482 = state_11432__$1;(statearr_11435_11482[(2)] = null);
(statearr_11435_11482[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (1)))
{var state_11432__$1 = state_11432;var statearr_11436_11483 = state_11432__$1;(statearr_11436_11483[(2)] = null);
(statearr_11436_11483[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (24)))
{var inst_11411 = (state_11432[(7)]);var inst_11420 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11411);var state_11432__$1 = state_11432;var statearr_11437_11484 = state_11432__$1;(statearr_11437_11484[(2)] = inst_11420);
(statearr_11437_11484[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (4)))
{var inst_11363 = (state_11432[(8)]);var inst_11363__$1 = (state_11432[(2)]);var inst_11364 = (inst_11363__$1 == null);var state_11432__$1 = (function (){var statearr_11438 = state_11432;(statearr_11438[(8)] = inst_11363__$1);
return statearr_11438;
})();if(cljs.core.truth_(inst_11364))
{var statearr_11439_11485 = state_11432__$1;(statearr_11439_11485[(1)] = (5));
} else
{var statearr_11440_11486 = state_11432__$1;(statearr_11440_11486[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (15)))
{var inst_11405 = (state_11432[(2)]);var state_11432__$1 = state_11432;var statearr_11441_11487 = state_11432__$1;(statearr_11441_11487[(2)] = inst_11405);
(statearr_11441_11487[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (21)))
{var inst_11425 = (state_11432[(2)]);var state_11432__$1 = (function (){var statearr_11442 = state_11432;(statearr_11442[(9)] = inst_11425);
return statearr_11442;
})();var statearr_11443_11488 = state_11432__$1;(statearr_11443_11488[(2)] = null);
(statearr_11443_11488[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (13)))
{var inst_11387 = (state_11432[(10)]);var inst_11389 = cljs.core.chunked_seq_QMARK_.call(null,inst_11387);var state_11432__$1 = state_11432;if(inst_11389)
{var statearr_11444_11489 = state_11432__$1;(statearr_11444_11489[(1)] = (16));
} else
{var statearr_11445_11490 = state_11432__$1;(statearr_11445_11490[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (22)))
{var inst_11417 = (state_11432[(2)]);var state_11432__$1 = state_11432;if(cljs.core.truth_(inst_11417))
{var statearr_11446_11491 = state_11432__$1;(statearr_11446_11491[(1)] = (23));
} else
{var statearr_11447_11492 = state_11432__$1;(statearr_11447_11492[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (6)))
{var inst_11411 = (state_11432[(7)]);var inst_11413 = (state_11432[(11)]);var inst_11363 = (state_11432[(8)]);var inst_11411__$1 = topic_fn.call(null,inst_11363);var inst_11412 = cljs.core.deref.call(null,mults);var inst_11413__$1 = cljs.core.get.call(null,inst_11412,inst_11411__$1);var state_11432__$1 = (function (){var statearr_11448 = state_11432;(statearr_11448[(7)] = inst_11411__$1);
(statearr_11448[(11)] = inst_11413__$1);
return statearr_11448;
})();if(cljs.core.truth_(inst_11413__$1))
{var statearr_11449_11493 = state_11432__$1;(statearr_11449_11493[(1)] = (19));
} else
{var statearr_11450_11494 = state_11432__$1;(statearr_11450_11494[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (25)))
{var inst_11422 = (state_11432[(2)]);var state_11432__$1 = state_11432;var statearr_11451_11495 = state_11432__$1;(statearr_11451_11495[(2)] = inst_11422);
(statearr_11451_11495[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (17)))
{var inst_11387 = (state_11432[(10)]);var inst_11396 = cljs.core.first.call(null,inst_11387);var inst_11397 = cljs.core.async.muxch_STAR_.call(null,inst_11396);var inst_11398 = cljs.core.async.close_BANG_.call(null,inst_11397);var inst_11399 = cljs.core.next.call(null,inst_11387);var inst_11373 = inst_11399;var inst_11374 = null;var inst_11375 = (0);var inst_11376 = (0);var state_11432__$1 = (function (){var statearr_11452 = state_11432;(statearr_11452[(12)] = inst_11374);
(statearr_11452[(13)] = inst_11398);
(statearr_11452[(14)] = inst_11373);
(statearr_11452[(15)] = inst_11376);
(statearr_11452[(16)] = inst_11375);
return statearr_11452;
})();var statearr_11453_11496 = state_11432__$1;(statearr_11453_11496[(2)] = null);
(statearr_11453_11496[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (3)))
{var inst_11430 = (state_11432[(2)]);var state_11432__$1 = state_11432;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11432__$1,inst_11430);
} else
{if((state_val_11433 === (12)))
{var inst_11407 = (state_11432[(2)]);var state_11432__$1 = state_11432;var statearr_11454_11497 = state_11432__$1;(statearr_11454_11497[(2)] = inst_11407);
(statearr_11454_11497[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (2)))
{var state_11432__$1 = state_11432;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11432__$1,(4),ch);
} else
{if((state_val_11433 === (23)))
{var state_11432__$1 = state_11432;var statearr_11455_11498 = state_11432__$1;(statearr_11455_11498[(2)] = null);
(statearr_11455_11498[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (19)))
{var inst_11413 = (state_11432[(11)]);var inst_11363 = (state_11432[(8)]);var inst_11415 = cljs.core.async.muxch_STAR_.call(null,inst_11413);var state_11432__$1 = state_11432;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11432__$1,(22),inst_11415,inst_11363);
} else
{if((state_val_11433 === (11)))
{var inst_11373 = (state_11432[(14)]);var inst_11387 = (state_11432[(10)]);var inst_11387__$1 = cljs.core.seq.call(null,inst_11373);var state_11432__$1 = (function (){var statearr_11456 = state_11432;(statearr_11456[(10)] = inst_11387__$1);
return statearr_11456;
})();if(inst_11387__$1)
{var statearr_11457_11499 = state_11432__$1;(statearr_11457_11499[(1)] = (13));
} else
{var statearr_11458_11500 = state_11432__$1;(statearr_11458_11500[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (9)))
{var inst_11409 = (state_11432[(2)]);var state_11432__$1 = state_11432;var statearr_11459_11501 = state_11432__$1;(statearr_11459_11501[(2)] = inst_11409);
(statearr_11459_11501[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (5)))
{var inst_11370 = cljs.core.deref.call(null,mults);var inst_11371 = cljs.core.vals.call(null,inst_11370);var inst_11372 = cljs.core.seq.call(null,inst_11371);var inst_11373 = inst_11372;var inst_11374 = null;var inst_11375 = (0);var inst_11376 = (0);var state_11432__$1 = (function (){var statearr_11460 = state_11432;(statearr_11460[(12)] = inst_11374);
(statearr_11460[(14)] = inst_11373);
(statearr_11460[(15)] = inst_11376);
(statearr_11460[(16)] = inst_11375);
return statearr_11460;
})();var statearr_11461_11502 = state_11432__$1;(statearr_11461_11502[(2)] = null);
(statearr_11461_11502[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (14)))
{var state_11432__$1 = state_11432;var statearr_11465_11503 = state_11432__$1;(statearr_11465_11503[(2)] = null);
(statearr_11465_11503[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (16)))
{var inst_11387 = (state_11432[(10)]);var inst_11391 = cljs.core.chunk_first.call(null,inst_11387);var inst_11392 = cljs.core.chunk_rest.call(null,inst_11387);var inst_11393 = cljs.core.count.call(null,inst_11391);var inst_11373 = inst_11392;var inst_11374 = inst_11391;var inst_11375 = inst_11393;var inst_11376 = (0);var state_11432__$1 = (function (){var statearr_11466 = state_11432;(statearr_11466[(12)] = inst_11374);
(statearr_11466[(14)] = inst_11373);
(statearr_11466[(15)] = inst_11376);
(statearr_11466[(16)] = inst_11375);
return statearr_11466;
})();var statearr_11467_11504 = state_11432__$1;(statearr_11467_11504[(2)] = null);
(statearr_11467_11504[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (10)))
{var inst_11374 = (state_11432[(12)]);var inst_11373 = (state_11432[(14)]);var inst_11376 = (state_11432[(15)]);var inst_11375 = (state_11432[(16)]);var inst_11381 = cljs.core._nth.call(null,inst_11374,inst_11376);var inst_11382 = cljs.core.async.muxch_STAR_.call(null,inst_11381);var inst_11383 = cljs.core.async.close_BANG_.call(null,inst_11382);var inst_11384 = (inst_11376 + (1));var tmp11462 = inst_11374;var tmp11463 = inst_11373;var tmp11464 = inst_11375;var inst_11373__$1 = tmp11463;var inst_11374__$1 = tmp11462;var inst_11375__$1 = tmp11464;var inst_11376__$1 = inst_11384;var state_11432__$1 = (function (){var statearr_11468 = state_11432;(statearr_11468[(12)] = inst_11374__$1);
(statearr_11468[(14)] = inst_11373__$1);
(statearr_11468[(17)] = inst_11383);
(statearr_11468[(15)] = inst_11376__$1);
(statearr_11468[(16)] = inst_11375__$1);
return statearr_11468;
})();var statearr_11469_11505 = state_11432__$1;(statearr_11469_11505[(2)] = null);
(statearr_11469_11505[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (18)))
{var inst_11402 = (state_11432[(2)]);var state_11432__$1 = state_11432;var statearr_11470_11506 = state_11432__$1;(statearr_11470_11506[(2)] = inst_11402);
(statearr_11470_11506[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11433 === (8)))
{var inst_11376 = (state_11432[(15)]);var inst_11375 = (state_11432[(16)]);var inst_11378 = (inst_11376 < inst_11375);var inst_11379 = inst_11378;var state_11432__$1 = state_11432;if(cljs.core.truth_(inst_11379))
{var statearr_11471_11507 = state_11432__$1;(statearr_11471_11507[(1)] = (10));
} else
{var statearr_11472_11508 = state_11432__$1;(statearr_11472_11508[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7271__auto___11480,mults,ensure_mult,p))
;return ((function (switch__7206__auto__,c__7271__auto___11480,mults,ensure_mult,p){
return (function() {
var state_machine__7207__auto__ = null;
var state_machine__7207__auto____0 = (function (){var statearr_11476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11476[(0)] = state_machine__7207__auto__);
(statearr_11476[(1)] = (1));
return statearr_11476;
});
var state_machine__7207__auto____1 = (function (state_11432){while(true){
var ret_value__7208__auto__ = (function (){try{while(true){
var result__7209__auto__ = switch__7206__auto__.call(null,state_11432);if(cljs.core.keyword_identical_QMARK_.call(null,result__7209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7209__auto__;
}
break;
}
}catch (e11477){if((e11477 instanceof Object))
{var ex__7210__auto__ = e11477;var statearr_11478_11509 = state_11432;(statearr_11478_11509[(5)] = ex__7210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11432);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11477;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11510 = state_11432;
state_11432 = G__11510;
continue;
}
} else
{return ret_value__7208__auto__;
}
break;
}
});
state_machine__7207__auto__ = function(state_11432){
switch(arguments.length){
case 0:
return state_machine__7207__auto____0.call(this);
case 1:
return state_machine__7207__auto____1.call(this,state_11432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7207__auto____0;
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7207__auto____1;
return state_machine__7207__auto__;
})()
;})(switch__7206__auto__,c__7271__auto___11480,mults,ensure_mult,p))
})();var state__7273__auto__ = (function (){var statearr_11479 = f__7272__auto__.call(null);(statearr_11479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7271__auto___11480);
return statearr_11479;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7273__auto__);
});})(c__7271__auto___11480,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__7271__auto___11647 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7271__auto___11647,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__7272__auto__ = (function (){var switch__7206__auto__ = ((function (c__7271__auto___11647,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11617){var state_val_11618 = (state_11617[(1)]);if((state_val_11618 === (7)))
{var state_11617__$1 = state_11617;var statearr_11619_11648 = state_11617__$1;(statearr_11619_11648[(2)] = null);
(statearr_11619_11648[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11618 === (1)))
{var state_11617__$1 = state_11617;var statearr_11620_11649 = state_11617__$1;(statearr_11620_11649[(2)] = null);
(statearr_11620_11649[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11618 === (4)))
{var inst_11581 = (state_11617[(7)]);var inst_11583 = (inst_11581 < cnt);var state_11617__$1 = state_11617;if(cljs.core.truth_(inst_11583))
{var statearr_11621_11650 = state_11617__$1;(statearr_11621_11650[(1)] = (6));
} else
{var statearr_11622_11651 = state_11617__$1;(statearr_11622_11651[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11618 === (15)))
{var inst_11613 = (state_11617[(2)]);var state_11617__$1 = state_11617;var statearr_11623_11652 = state_11617__$1;(statearr_11623_11652[(2)] = inst_11613);
(statearr_11623_11652[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11618 === (13)))
{var inst_11606 = cljs.core.async.close_BANG_.call(null,out);var state_11617__$1 = state_11617;var statearr_11624_11653 = state_11617__$1;(statearr_11624_11653[(2)] = inst_11606);
(statearr_11624_11653[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11618 === (6)))
{var state_11617__$1 = state_11617;var statearr_11625_11654 = state_11617__$1;(statearr_11625_11654[(2)] = null);
(statearr_11625_11654[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11618 === (3)))
{var inst_11615 = (state_11617[(2)]);var state_11617__$1 = state_11617;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11617__$1,inst_11615);
} else
{if((state_val_11618 === (12)))
{var inst_11603 = (state_11617[(8)]);var inst_11603__$1 = (state_11617[(2)]);var inst_11604 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11603__$1);var state_11617__$1 = (function (){var statearr_11626 = state_11617;(statearr_11626[(8)] = inst_11603__$1);
return statearr_11626;
})();if(cljs.core.truth_(inst_11604))
{var statearr_11627_11655 = state_11617__$1;(statearr_11627_11655[(1)] = (13));
} else
{var statearr_11628_11656 = state_11617__$1;(statearr_11628_11656[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11618 === (2)))
{var inst_11580 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11581 = (0);var state_11617__$1 = (function (){var statearr_11629 = state_11617;(statearr_11629[(9)] = inst_11580);
(statearr_11629[(7)] = inst_11581);
return statearr_11629;
})();var statearr_11630_11657 = state_11617__$1;(statearr_11630_11657[(2)] = null);
(statearr_11630_11657[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11618 === (11)))
{var inst_11581 = (state_11617[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11617,(10),Object,null,(9));var inst_11590 = chs__$1.call(null,inst_11581);var inst_11591 = done.call(null,inst_11581);var inst_11592 = cljs.core.async.take_BANG_.call(null,inst_11590,inst_11591);var state_11617__$1 = state_11617;var statearr_11631_11658 = state_11617__$1;(statearr_11631_11658[(2)] = inst_11592);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11617__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11618 === (9)))
{var inst_11581 = (state_11617[(7)]);var inst_11594 = (state_11617[(2)]);var inst_11595 = (inst_11581 + (1));var inst_11581__$1 = inst_11595;var state_11617__$1 = (function (){var statearr_11632 = state_11617;(statearr_11632[(7)] = inst_11581__$1);
(statearr_11632[(10)] = inst_11594);
return statearr_11632;
})();var statearr_11633_11659 = state_11617__$1;(statearr_11633_11659[(2)] = null);
(statearr_11633_11659[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11618 === (5)))
{var inst_11601 = (state_11617[(2)]);var state_11617__$1 = (function (){var statearr_11634 = state_11617;(statearr_11634[(11)] = inst_11601);
return statearr_11634;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11617__$1,(12),dchan);
} else
{if((state_val_11618 === (14)))
{var inst_11603 = (state_11617[(8)]);var inst_11608 = cljs.core.apply.call(null,f,inst_11603);var state_11617__$1 = state_11617;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11617__$1,(16),out,inst_11608);
} else
{if((state_val_11618 === (16)))
{var inst_11610 = (state_11617[(2)]);var state_11617__$1 = (function (){var statearr_11635 = state_11617;(statearr_11635[(12)] = inst_11610);
return statearr_11635;
})();var statearr_11636_11660 = state_11617__$1;(statearr_11636_11660[(2)] = null);
(statearr_11636_11660[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11618 === (10)))
{var inst_11585 = (state_11617[(2)]);var inst_11586 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11617__$1 = (function (){var statearr_11637 = state_11617;(statearr_11637[(13)] = inst_11585);
return statearr_11637;
})();var statearr_11638_11661 = state_11617__$1;(statearr_11638_11661[(2)] = inst_11586);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11617__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11618 === (8)))
{var inst_11599 = (state_11617[(2)]);var state_11617__$1 = state_11617;var statearr_11639_11662 = state_11617__$1;(statearr_11639_11662[(2)] = inst_11599);
(statearr_11639_11662[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7271__auto___11647,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__7206__auto__,c__7271__auto___11647,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7207__auto__ = null;
var state_machine__7207__auto____0 = (function (){var statearr_11643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11643[(0)] = state_machine__7207__auto__);
(statearr_11643[(1)] = (1));
return statearr_11643;
});
var state_machine__7207__auto____1 = (function (state_11617){while(true){
var ret_value__7208__auto__ = (function (){try{while(true){
var result__7209__auto__ = switch__7206__auto__.call(null,state_11617);if(cljs.core.keyword_identical_QMARK_.call(null,result__7209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7209__auto__;
}
break;
}
}catch (e11644){if((e11644 instanceof Object))
{var ex__7210__auto__ = e11644;var statearr_11645_11663 = state_11617;(statearr_11645_11663[(5)] = ex__7210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11617);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11644;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11664 = state_11617;
state_11617 = G__11664;
continue;
}
} else
{return ret_value__7208__auto__;
}
break;
}
});
state_machine__7207__auto__ = function(state_11617){
switch(arguments.length){
case 0:
return state_machine__7207__auto____0.call(this);
case 1:
return state_machine__7207__auto____1.call(this,state_11617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7207__auto____0;
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7207__auto____1;
return state_machine__7207__auto__;
})()
;})(switch__7206__auto__,c__7271__auto___11647,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__7273__auto__ = (function (){var statearr_11646 = f__7272__auto__.call(null);(statearr_11646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7271__auto___11647);
return statearr_11646;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7273__auto__);
});})(c__7271__auto___11647,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7271__auto___11772 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7271__auto___11772,out){
return (function (){var f__7272__auto__ = (function (){var switch__7206__auto__ = ((function (c__7271__auto___11772,out){
return (function (state_11748){var state_val_11749 = (state_11748[(1)]);if((state_val_11749 === (7)))
{var inst_11728 = (state_11748[(7)]);var inst_11727 = (state_11748[(8)]);var inst_11727__$1 = (state_11748[(2)]);var inst_11728__$1 = cljs.core.nth.call(null,inst_11727__$1,(0),null);var inst_11729 = cljs.core.nth.call(null,inst_11727__$1,(1),null);var inst_11730 = (inst_11728__$1 == null);var state_11748__$1 = (function (){var statearr_11750 = state_11748;(statearr_11750[(9)] = inst_11729);
(statearr_11750[(7)] = inst_11728__$1);
(statearr_11750[(8)] = inst_11727__$1);
return statearr_11750;
})();if(cljs.core.truth_(inst_11730))
{var statearr_11751_11773 = state_11748__$1;(statearr_11751_11773[(1)] = (8));
} else
{var statearr_11752_11774 = state_11748__$1;(statearr_11752_11774[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11749 === (1)))
{var inst_11719 = cljs.core.vec.call(null,chs);var inst_11720 = inst_11719;var state_11748__$1 = (function (){var statearr_11753 = state_11748;(statearr_11753[(10)] = inst_11720);
return statearr_11753;
})();var statearr_11754_11775 = state_11748__$1;(statearr_11754_11775[(2)] = null);
(statearr_11754_11775[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11749 === (4)))
{var inst_11720 = (state_11748[(10)]);var state_11748__$1 = state_11748;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11748__$1,(7),inst_11720);
} else
{if((state_val_11749 === (6)))
{var inst_11744 = (state_11748[(2)]);var state_11748__$1 = state_11748;var statearr_11755_11776 = state_11748__$1;(statearr_11755_11776[(2)] = inst_11744);
(statearr_11755_11776[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11749 === (3)))
{var inst_11746 = (state_11748[(2)]);var state_11748__$1 = state_11748;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11748__$1,inst_11746);
} else
{if((state_val_11749 === (2)))
{var inst_11720 = (state_11748[(10)]);var inst_11722 = cljs.core.count.call(null,inst_11720);var inst_11723 = (inst_11722 > (0));var state_11748__$1 = state_11748;if(cljs.core.truth_(inst_11723))
{var statearr_11757_11777 = state_11748__$1;(statearr_11757_11777[(1)] = (4));
} else
{var statearr_11758_11778 = state_11748__$1;(statearr_11758_11778[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11749 === (11)))
{var inst_11720 = (state_11748[(10)]);var inst_11737 = (state_11748[(2)]);var tmp11756 = inst_11720;var inst_11720__$1 = tmp11756;var state_11748__$1 = (function (){var statearr_11759 = state_11748;(statearr_11759[(11)] = inst_11737);
(statearr_11759[(10)] = inst_11720__$1);
return statearr_11759;
})();var statearr_11760_11779 = state_11748__$1;(statearr_11760_11779[(2)] = null);
(statearr_11760_11779[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11749 === (9)))
{var inst_11728 = (state_11748[(7)]);var state_11748__$1 = state_11748;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11748__$1,(11),out,inst_11728);
} else
{if((state_val_11749 === (5)))
{var inst_11742 = cljs.core.async.close_BANG_.call(null,out);var state_11748__$1 = state_11748;var statearr_11761_11780 = state_11748__$1;(statearr_11761_11780[(2)] = inst_11742);
(statearr_11761_11780[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11749 === (10)))
{var inst_11740 = (state_11748[(2)]);var state_11748__$1 = state_11748;var statearr_11762_11781 = state_11748__$1;(statearr_11762_11781[(2)] = inst_11740);
(statearr_11762_11781[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11749 === (8)))
{var inst_11729 = (state_11748[(9)]);var inst_11728 = (state_11748[(7)]);var inst_11720 = (state_11748[(10)]);var inst_11727 = (state_11748[(8)]);var inst_11732 = (function (){var c = inst_11729;var v = inst_11728;var vec__11725 = inst_11727;var cs = inst_11720;return ((function (c,v,vec__11725,cs,inst_11729,inst_11728,inst_11720,inst_11727,state_val_11749,c__7271__auto___11772,out){
return (function (p1__11665_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11665_SHARP_);
});
;})(c,v,vec__11725,cs,inst_11729,inst_11728,inst_11720,inst_11727,state_val_11749,c__7271__auto___11772,out))
})();var inst_11733 = cljs.core.filterv.call(null,inst_11732,inst_11720);var inst_11720__$1 = inst_11733;var state_11748__$1 = (function (){var statearr_11763 = state_11748;(statearr_11763[(10)] = inst_11720__$1);
return statearr_11763;
})();var statearr_11764_11782 = state_11748__$1;(statearr_11764_11782[(2)] = null);
(statearr_11764_11782[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7271__auto___11772,out))
;return ((function (switch__7206__auto__,c__7271__auto___11772,out){
return (function() {
var state_machine__7207__auto__ = null;
var state_machine__7207__auto____0 = (function (){var statearr_11768 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11768[(0)] = state_machine__7207__auto__);
(statearr_11768[(1)] = (1));
return statearr_11768;
});
var state_machine__7207__auto____1 = (function (state_11748){while(true){
var ret_value__7208__auto__ = (function (){try{while(true){
var result__7209__auto__ = switch__7206__auto__.call(null,state_11748);if(cljs.core.keyword_identical_QMARK_.call(null,result__7209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7209__auto__;
}
break;
}
}catch (e11769){if((e11769 instanceof Object))
{var ex__7210__auto__ = e11769;var statearr_11770_11783 = state_11748;(statearr_11770_11783[(5)] = ex__7210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11748);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11769;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11784 = state_11748;
state_11748 = G__11784;
continue;
}
} else
{return ret_value__7208__auto__;
}
break;
}
});
state_machine__7207__auto__ = function(state_11748){
switch(arguments.length){
case 0:
return state_machine__7207__auto____0.call(this);
case 1:
return state_machine__7207__auto____1.call(this,state_11748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7207__auto____0;
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7207__auto____1;
return state_machine__7207__auto__;
})()
;})(switch__7206__auto__,c__7271__auto___11772,out))
})();var state__7273__auto__ = (function (){var statearr_11771 = f__7272__auto__.call(null);(statearr_11771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7271__auto___11772);
return statearr_11771;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7273__auto__);
});})(c__7271__auto___11772,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7271__auto___11877 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7271__auto___11877,out){
return (function (){var f__7272__auto__ = (function (){var switch__7206__auto__ = ((function (c__7271__auto___11877,out){
return (function (state_11854){var state_val_11855 = (state_11854[(1)]);if((state_val_11855 === (7)))
{var inst_11836 = (state_11854[(7)]);var inst_11836__$1 = (state_11854[(2)]);var inst_11837 = (inst_11836__$1 == null);var inst_11838 = cljs.core.not.call(null,inst_11837);var state_11854__$1 = (function (){var statearr_11856 = state_11854;(statearr_11856[(7)] = inst_11836__$1);
return statearr_11856;
})();if(inst_11838)
{var statearr_11857_11878 = state_11854__$1;(statearr_11857_11878[(1)] = (8));
} else
{var statearr_11858_11879 = state_11854__$1;(statearr_11858_11879[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11855 === (1)))
{var inst_11831 = (0);var state_11854__$1 = (function (){var statearr_11859 = state_11854;(statearr_11859[(8)] = inst_11831);
return statearr_11859;
})();var statearr_11860_11880 = state_11854__$1;(statearr_11860_11880[(2)] = null);
(statearr_11860_11880[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11855 === (4)))
{var state_11854__$1 = state_11854;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11854__$1,(7),ch);
} else
{if((state_val_11855 === (6)))
{var inst_11849 = (state_11854[(2)]);var state_11854__$1 = state_11854;var statearr_11861_11881 = state_11854__$1;(statearr_11861_11881[(2)] = inst_11849);
(statearr_11861_11881[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11855 === (3)))
{var inst_11851 = (state_11854[(2)]);var inst_11852 = cljs.core.async.close_BANG_.call(null,out);var state_11854__$1 = (function (){var statearr_11862 = state_11854;(statearr_11862[(9)] = inst_11851);
return statearr_11862;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11854__$1,inst_11852);
} else
{if((state_val_11855 === (2)))
{var inst_11831 = (state_11854[(8)]);var inst_11833 = (inst_11831 < n);var state_11854__$1 = state_11854;if(cljs.core.truth_(inst_11833))
{var statearr_11863_11882 = state_11854__$1;(statearr_11863_11882[(1)] = (4));
} else
{var statearr_11864_11883 = state_11854__$1;(statearr_11864_11883[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11855 === (11)))
{var inst_11831 = (state_11854[(8)]);var inst_11841 = (state_11854[(2)]);var inst_11842 = (inst_11831 + (1));var inst_11831__$1 = inst_11842;var state_11854__$1 = (function (){var statearr_11865 = state_11854;(statearr_11865[(8)] = inst_11831__$1);
(statearr_11865[(10)] = inst_11841);
return statearr_11865;
})();var statearr_11866_11884 = state_11854__$1;(statearr_11866_11884[(2)] = null);
(statearr_11866_11884[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11855 === (9)))
{var state_11854__$1 = state_11854;var statearr_11867_11885 = state_11854__$1;(statearr_11867_11885[(2)] = null);
(statearr_11867_11885[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11855 === (5)))
{var state_11854__$1 = state_11854;var statearr_11868_11886 = state_11854__$1;(statearr_11868_11886[(2)] = null);
(statearr_11868_11886[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11855 === (10)))
{var inst_11846 = (state_11854[(2)]);var state_11854__$1 = state_11854;var statearr_11869_11887 = state_11854__$1;(statearr_11869_11887[(2)] = inst_11846);
(statearr_11869_11887[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11855 === (8)))
{var inst_11836 = (state_11854[(7)]);var state_11854__$1 = state_11854;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11854__$1,(11),out,inst_11836);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7271__auto___11877,out))
;return ((function (switch__7206__auto__,c__7271__auto___11877,out){
return (function() {
var state_machine__7207__auto__ = null;
var state_machine__7207__auto____0 = (function (){var statearr_11873 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11873[(0)] = state_machine__7207__auto__);
(statearr_11873[(1)] = (1));
return statearr_11873;
});
var state_machine__7207__auto____1 = (function (state_11854){while(true){
var ret_value__7208__auto__ = (function (){try{while(true){
var result__7209__auto__ = switch__7206__auto__.call(null,state_11854);if(cljs.core.keyword_identical_QMARK_.call(null,result__7209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7209__auto__;
}
break;
}
}catch (e11874){if((e11874 instanceof Object))
{var ex__7210__auto__ = e11874;var statearr_11875_11888 = state_11854;(statearr_11875_11888[(5)] = ex__7210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11854);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11874;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11889 = state_11854;
state_11854 = G__11889;
continue;
}
} else
{return ret_value__7208__auto__;
}
break;
}
});
state_machine__7207__auto__ = function(state_11854){
switch(arguments.length){
case 0:
return state_machine__7207__auto____0.call(this);
case 1:
return state_machine__7207__auto____1.call(this,state_11854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7207__auto____0;
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7207__auto____1;
return state_machine__7207__auto__;
})()
;})(switch__7206__auto__,c__7271__auto___11877,out))
})();var state__7273__auto__ = (function (){var statearr_11876 = f__7272__auto__.call(null);(statearr_11876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7271__auto___11877);
return statearr_11876;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7273__auto__);
});})(c__7271__auto___11877,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7271__auto___11986 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7271__auto___11986,out){
return (function (){var f__7272__auto__ = (function (){var switch__7206__auto__ = ((function (c__7271__auto___11986,out){
return (function (state_11961){var state_val_11962 = (state_11961[(1)]);if((state_val_11962 === (7)))
{var inst_11956 = (state_11961[(2)]);var state_11961__$1 = state_11961;var statearr_11963_11987 = state_11961__$1;(statearr_11963_11987[(2)] = inst_11956);
(statearr_11963_11987[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (1)))
{var inst_11938 = null;var state_11961__$1 = (function (){var statearr_11964 = state_11961;(statearr_11964[(7)] = inst_11938);
return statearr_11964;
})();var statearr_11965_11988 = state_11961__$1;(statearr_11965_11988[(2)] = null);
(statearr_11965_11988[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (4)))
{var inst_11941 = (state_11961[(8)]);var inst_11941__$1 = (state_11961[(2)]);var inst_11942 = (inst_11941__$1 == null);var inst_11943 = cljs.core.not.call(null,inst_11942);var state_11961__$1 = (function (){var statearr_11966 = state_11961;(statearr_11966[(8)] = inst_11941__$1);
return statearr_11966;
})();if(inst_11943)
{var statearr_11967_11989 = state_11961__$1;(statearr_11967_11989[(1)] = (5));
} else
{var statearr_11968_11990 = state_11961__$1;(statearr_11968_11990[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (6)))
{var state_11961__$1 = state_11961;var statearr_11969_11991 = state_11961__$1;(statearr_11969_11991[(2)] = null);
(statearr_11969_11991[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (3)))
{var inst_11958 = (state_11961[(2)]);var inst_11959 = cljs.core.async.close_BANG_.call(null,out);var state_11961__$1 = (function (){var statearr_11970 = state_11961;(statearr_11970[(9)] = inst_11958);
return statearr_11970;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11961__$1,inst_11959);
} else
{if((state_val_11962 === (2)))
{var state_11961__$1 = state_11961;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11961__$1,(4),ch);
} else
{if((state_val_11962 === (11)))
{var inst_11941 = (state_11961[(8)]);var inst_11950 = (state_11961[(2)]);var inst_11938 = inst_11941;var state_11961__$1 = (function (){var statearr_11971 = state_11961;(statearr_11971[(10)] = inst_11950);
(statearr_11971[(7)] = inst_11938);
return statearr_11971;
})();var statearr_11972_11992 = state_11961__$1;(statearr_11972_11992[(2)] = null);
(statearr_11972_11992[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (9)))
{var inst_11941 = (state_11961[(8)]);var state_11961__$1 = state_11961;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11961__$1,(11),out,inst_11941);
} else
{if((state_val_11962 === (5)))
{var inst_11941 = (state_11961[(8)]);var inst_11938 = (state_11961[(7)]);var inst_11945 = cljs.core._EQ_.call(null,inst_11941,inst_11938);var state_11961__$1 = state_11961;if(inst_11945)
{var statearr_11974_11993 = state_11961__$1;(statearr_11974_11993[(1)] = (8));
} else
{var statearr_11975_11994 = state_11961__$1;(statearr_11975_11994[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (10)))
{var inst_11953 = (state_11961[(2)]);var state_11961__$1 = state_11961;var statearr_11976_11995 = state_11961__$1;(statearr_11976_11995[(2)] = inst_11953);
(statearr_11976_11995[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (8)))
{var inst_11938 = (state_11961[(7)]);var tmp11973 = inst_11938;var inst_11938__$1 = tmp11973;var state_11961__$1 = (function (){var statearr_11977 = state_11961;(statearr_11977[(7)] = inst_11938__$1);
return statearr_11977;
})();var statearr_11978_11996 = state_11961__$1;(statearr_11978_11996[(2)] = null);
(statearr_11978_11996[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7271__auto___11986,out))
;return ((function (switch__7206__auto__,c__7271__auto___11986,out){
return (function() {
var state_machine__7207__auto__ = null;
var state_machine__7207__auto____0 = (function (){var statearr_11982 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11982[(0)] = state_machine__7207__auto__);
(statearr_11982[(1)] = (1));
return statearr_11982;
});
var state_machine__7207__auto____1 = (function (state_11961){while(true){
var ret_value__7208__auto__ = (function (){try{while(true){
var result__7209__auto__ = switch__7206__auto__.call(null,state_11961);if(cljs.core.keyword_identical_QMARK_.call(null,result__7209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7209__auto__;
}
break;
}
}catch (e11983){if((e11983 instanceof Object))
{var ex__7210__auto__ = e11983;var statearr_11984_11997 = state_11961;(statearr_11984_11997[(5)] = ex__7210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11961);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11983;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11998 = state_11961;
state_11961 = G__11998;
continue;
}
} else
{return ret_value__7208__auto__;
}
break;
}
});
state_machine__7207__auto__ = function(state_11961){
switch(arguments.length){
case 0:
return state_machine__7207__auto____0.call(this);
case 1:
return state_machine__7207__auto____1.call(this,state_11961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7207__auto____0;
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7207__auto____1;
return state_machine__7207__auto__;
})()
;})(switch__7206__auto__,c__7271__auto___11986,out))
})();var state__7273__auto__ = (function (){var statearr_11985 = f__7272__auto__.call(null);(statearr_11985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7271__auto___11986);
return statearr_11985;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7273__auto__);
});})(c__7271__auto___11986,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7271__auto___12133 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7271__auto___12133,out){
return (function (){var f__7272__auto__ = (function (){var switch__7206__auto__ = ((function (c__7271__auto___12133,out){
return (function (state_12103){var state_val_12104 = (state_12103[(1)]);if((state_val_12104 === (7)))
{var inst_12099 = (state_12103[(2)]);var state_12103__$1 = state_12103;var statearr_12105_12134 = state_12103__$1;(statearr_12105_12134[(2)] = inst_12099);
(statearr_12105_12134[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12104 === (1)))
{var inst_12066 = (new Array(n));var inst_12067 = inst_12066;var inst_12068 = (0);var state_12103__$1 = (function (){var statearr_12106 = state_12103;(statearr_12106[(7)] = inst_12067);
(statearr_12106[(8)] = inst_12068);
return statearr_12106;
})();var statearr_12107_12135 = state_12103__$1;(statearr_12107_12135[(2)] = null);
(statearr_12107_12135[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12104 === (4)))
{var inst_12071 = (state_12103[(9)]);var inst_12071__$1 = (state_12103[(2)]);var inst_12072 = (inst_12071__$1 == null);var inst_12073 = cljs.core.not.call(null,inst_12072);var state_12103__$1 = (function (){var statearr_12108 = state_12103;(statearr_12108[(9)] = inst_12071__$1);
return statearr_12108;
})();if(inst_12073)
{var statearr_12109_12136 = state_12103__$1;(statearr_12109_12136[(1)] = (5));
} else
{var statearr_12110_12137 = state_12103__$1;(statearr_12110_12137[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12104 === (15)))
{var inst_12093 = (state_12103[(2)]);var state_12103__$1 = state_12103;var statearr_12111_12138 = state_12103__$1;(statearr_12111_12138[(2)] = inst_12093);
(statearr_12111_12138[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12104 === (13)))
{var state_12103__$1 = state_12103;var statearr_12112_12139 = state_12103__$1;(statearr_12112_12139[(2)] = null);
(statearr_12112_12139[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12104 === (6)))
{var inst_12068 = (state_12103[(8)]);var inst_12089 = (inst_12068 > (0));var state_12103__$1 = state_12103;if(cljs.core.truth_(inst_12089))
{var statearr_12113_12140 = state_12103__$1;(statearr_12113_12140[(1)] = (12));
} else
{var statearr_12114_12141 = state_12103__$1;(statearr_12114_12141[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12104 === (3)))
{var inst_12101 = (state_12103[(2)]);var state_12103__$1 = state_12103;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12103__$1,inst_12101);
} else
{if((state_val_12104 === (12)))
{var inst_12067 = (state_12103[(7)]);var inst_12091 = cljs.core.vec.call(null,inst_12067);var state_12103__$1 = state_12103;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12103__$1,(15),out,inst_12091);
} else
{if((state_val_12104 === (2)))
{var state_12103__$1 = state_12103;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12103__$1,(4),ch);
} else
{if((state_val_12104 === (11)))
{var inst_12083 = (state_12103[(2)]);var inst_12084 = (new Array(n));var inst_12067 = inst_12084;var inst_12068 = (0);var state_12103__$1 = (function (){var statearr_12115 = state_12103;(statearr_12115[(10)] = inst_12083);
(statearr_12115[(7)] = inst_12067);
(statearr_12115[(8)] = inst_12068);
return statearr_12115;
})();var statearr_12116_12142 = state_12103__$1;(statearr_12116_12142[(2)] = null);
(statearr_12116_12142[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12104 === (9)))
{var inst_12067 = (state_12103[(7)]);var inst_12081 = cljs.core.vec.call(null,inst_12067);var state_12103__$1 = state_12103;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12103__$1,(11),out,inst_12081);
} else
{if((state_val_12104 === (5)))
{var inst_12067 = (state_12103[(7)]);var inst_12068 = (state_12103[(8)]);var inst_12076 = (state_12103[(11)]);var inst_12071 = (state_12103[(9)]);var inst_12075 = (inst_12067[inst_12068] = inst_12071);var inst_12076__$1 = (inst_12068 + (1));var inst_12077 = (inst_12076__$1 < n);var state_12103__$1 = (function (){var statearr_12117 = state_12103;(statearr_12117[(12)] = inst_12075);
(statearr_12117[(11)] = inst_12076__$1);
return statearr_12117;
})();if(cljs.core.truth_(inst_12077))
{var statearr_12118_12143 = state_12103__$1;(statearr_12118_12143[(1)] = (8));
} else
{var statearr_12119_12144 = state_12103__$1;(statearr_12119_12144[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12104 === (14)))
{var inst_12096 = (state_12103[(2)]);var inst_12097 = cljs.core.async.close_BANG_.call(null,out);var state_12103__$1 = (function (){var statearr_12121 = state_12103;(statearr_12121[(13)] = inst_12096);
return statearr_12121;
})();var statearr_12122_12145 = state_12103__$1;(statearr_12122_12145[(2)] = inst_12097);
(statearr_12122_12145[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12104 === (10)))
{var inst_12087 = (state_12103[(2)]);var state_12103__$1 = state_12103;var statearr_12123_12146 = state_12103__$1;(statearr_12123_12146[(2)] = inst_12087);
(statearr_12123_12146[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12104 === (8)))
{var inst_12067 = (state_12103[(7)]);var inst_12076 = (state_12103[(11)]);var tmp12120 = inst_12067;var inst_12067__$1 = tmp12120;var inst_12068 = inst_12076;var state_12103__$1 = (function (){var statearr_12124 = state_12103;(statearr_12124[(7)] = inst_12067__$1);
(statearr_12124[(8)] = inst_12068);
return statearr_12124;
})();var statearr_12125_12147 = state_12103__$1;(statearr_12125_12147[(2)] = null);
(statearr_12125_12147[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7271__auto___12133,out))
;return ((function (switch__7206__auto__,c__7271__auto___12133,out){
return (function() {
var state_machine__7207__auto__ = null;
var state_machine__7207__auto____0 = (function (){var statearr_12129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12129[(0)] = state_machine__7207__auto__);
(statearr_12129[(1)] = (1));
return statearr_12129;
});
var state_machine__7207__auto____1 = (function (state_12103){while(true){
var ret_value__7208__auto__ = (function (){try{while(true){
var result__7209__auto__ = switch__7206__auto__.call(null,state_12103);if(cljs.core.keyword_identical_QMARK_.call(null,result__7209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7209__auto__;
}
break;
}
}catch (e12130){if((e12130 instanceof Object))
{var ex__7210__auto__ = e12130;var statearr_12131_12148 = state_12103;(statearr_12131_12148[(5)] = ex__7210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12103);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12130;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12149 = state_12103;
state_12103 = G__12149;
continue;
}
} else
{return ret_value__7208__auto__;
}
break;
}
});
state_machine__7207__auto__ = function(state_12103){
switch(arguments.length){
case 0:
return state_machine__7207__auto____0.call(this);
case 1:
return state_machine__7207__auto____1.call(this,state_12103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7207__auto____0;
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7207__auto____1;
return state_machine__7207__auto__;
})()
;})(switch__7206__auto__,c__7271__auto___12133,out))
})();var state__7273__auto__ = (function (){var statearr_12132 = f__7272__auto__.call(null);(statearr_12132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7271__auto___12133);
return statearr_12132;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7273__auto__);
});})(c__7271__auto___12133,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7271__auto___12292 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7271__auto___12292,out){
return (function (){var f__7272__auto__ = (function (){var switch__7206__auto__ = ((function (c__7271__auto___12292,out){
return (function (state_12262){var state_val_12263 = (state_12262[(1)]);if((state_val_12263 === (7)))
{var inst_12258 = (state_12262[(2)]);var state_12262__$1 = state_12262;var statearr_12264_12293 = state_12262__$1;(statearr_12264_12293[(2)] = inst_12258);
(statearr_12264_12293[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12263 === (1)))
{var inst_12221 = [];var inst_12222 = inst_12221;var inst_12223 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_12262__$1 = (function (){var statearr_12265 = state_12262;(statearr_12265[(7)] = inst_12223);
(statearr_12265[(8)] = inst_12222);
return statearr_12265;
})();var statearr_12266_12294 = state_12262__$1;(statearr_12266_12294[(2)] = null);
(statearr_12266_12294[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12263 === (4)))
{var inst_12226 = (state_12262[(9)]);var inst_12226__$1 = (state_12262[(2)]);var inst_12227 = (inst_12226__$1 == null);var inst_12228 = cljs.core.not.call(null,inst_12227);var state_12262__$1 = (function (){var statearr_12267 = state_12262;(statearr_12267[(9)] = inst_12226__$1);
return statearr_12267;
})();if(inst_12228)
{var statearr_12268_12295 = state_12262__$1;(statearr_12268_12295[(1)] = (5));
} else
{var statearr_12269_12296 = state_12262__$1;(statearr_12269_12296[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12263 === (15)))
{var inst_12252 = (state_12262[(2)]);var state_12262__$1 = state_12262;var statearr_12270_12297 = state_12262__$1;(statearr_12270_12297[(2)] = inst_12252);
(statearr_12270_12297[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12263 === (13)))
{var state_12262__$1 = state_12262;var statearr_12271_12298 = state_12262__$1;(statearr_12271_12298[(2)] = null);
(statearr_12271_12298[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12263 === (6)))
{var inst_12222 = (state_12262[(8)]);var inst_12247 = inst_12222.length;var inst_12248 = (inst_12247 > (0));var state_12262__$1 = state_12262;if(cljs.core.truth_(inst_12248))
{var statearr_12272_12299 = state_12262__$1;(statearr_12272_12299[(1)] = (12));
} else
{var statearr_12273_12300 = state_12262__$1;(statearr_12273_12300[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12263 === (3)))
{var inst_12260 = (state_12262[(2)]);var state_12262__$1 = state_12262;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12262__$1,inst_12260);
} else
{if((state_val_12263 === (12)))
{var inst_12222 = (state_12262[(8)]);var inst_12250 = cljs.core.vec.call(null,inst_12222);var state_12262__$1 = state_12262;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12262__$1,(15),out,inst_12250);
} else
{if((state_val_12263 === (2)))
{var state_12262__$1 = state_12262;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12262__$1,(4),ch);
} else
{if((state_val_12263 === (11)))
{var inst_12226 = (state_12262[(9)]);var inst_12230 = (state_12262[(10)]);var inst_12240 = (state_12262[(2)]);var inst_12241 = [];var inst_12242 = inst_12241.push(inst_12226);var inst_12222 = inst_12241;var inst_12223 = inst_12230;var state_12262__$1 = (function (){var statearr_12274 = state_12262;(statearr_12274[(11)] = inst_12240);
(statearr_12274[(7)] = inst_12223);
(statearr_12274[(12)] = inst_12242);
(statearr_12274[(8)] = inst_12222);
return statearr_12274;
})();var statearr_12275_12301 = state_12262__$1;(statearr_12275_12301[(2)] = null);
(statearr_12275_12301[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12263 === (9)))
{var inst_12222 = (state_12262[(8)]);var inst_12238 = cljs.core.vec.call(null,inst_12222);var state_12262__$1 = state_12262;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12262__$1,(11),out,inst_12238);
} else
{if((state_val_12263 === (5)))
{var inst_12223 = (state_12262[(7)]);var inst_12226 = (state_12262[(9)]);var inst_12230 = (state_12262[(10)]);var inst_12230__$1 = f.call(null,inst_12226);var inst_12231 = cljs.core._EQ_.call(null,inst_12230__$1,inst_12223);var inst_12232 = cljs.core.keyword_identical_QMARK_.call(null,inst_12223,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_12233 = (inst_12231) || (inst_12232);var state_12262__$1 = (function (){var statearr_12276 = state_12262;(statearr_12276[(10)] = inst_12230__$1);
return statearr_12276;
})();if(cljs.core.truth_(inst_12233))
{var statearr_12277_12302 = state_12262__$1;(statearr_12277_12302[(1)] = (8));
} else
{var statearr_12278_12303 = state_12262__$1;(statearr_12278_12303[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12263 === (14)))
{var inst_12255 = (state_12262[(2)]);var inst_12256 = cljs.core.async.close_BANG_.call(null,out);var state_12262__$1 = (function (){var statearr_12280 = state_12262;(statearr_12280[(13)] = inst_12255);
return statearr_12280;
})();var statearr_12281_12304 = state_12262__$1;(statearr_12281_12304[(2)] = inst_12256);
(statearr_12281_12304[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12263 === (10)))
{var inst_12245 = (state_12262[(2)]);var state_12262__$1 = state_12262;var statearr_12282_12305 = state_12262__$1;(statearr_12282_12305[(2)] = inst_12245);
(statearr_12282_12305[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12263 === (8)))
{var inst_12222 = (state_12262[(8)]);var inst_12226 = (state_12262[(9)]);var inst_12230 = (state_12262[(10)]);var inst_12235 = inst_12222.push(inst_12226);var tmp12279 = inst_12222;var inst_12222__$1 = tmp12279;var inst_12223 = inst_12230;var state_12262__$1 = (function (){var statearr_12283 = state_12262;(statearr_12283[(7)] = inst_12223);
(statearr_12283[(8)] = inst_12222__$1);
(statearr_12283[(14)] = inst_12235);
return statearr_12283;
})();var statearr_12284_12306 = state_12262__$1;(statearr_12284_12306[(2)] = null);
(statearr_12284_12306[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7271__auto___12292,out))
;return ((function (switch__7206__auto__,c__7271__auto___12292,out){
return (function() {
var state_machine__7207__auto__ = null;
var state_machine__7207__auto____0 = (function (){var statearr_12288 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12288[(0)] = state_machine__7207__auto__);
(statearr_12288[(1)] = (1));
return statearr_12288;
});
var state_machine__7207__auto____1 = (function (state_12262){while(true){
var ret_value__7208__auto__ = (function (){try{while(true){
var result__7209__auto__ = switch__7206__auto__.call(null,state_12262);if(cljs.core.keyword_identical_QMARK_.call(null,result__7209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7209__auto__;
}
break;
}
}catch (e12289){if((e12289 instanceof Object))
{var ex__7210__auto__ = e12289;var statearr_12290_12307 = state_12262;(statearr_12290_12307[(5)] = ex__7210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12262);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12289;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12308 = state_12262;
state_12262 = G__12308;
continue;
}
} else
{return ret_value__7208__auto__;
}
break;
}
});
state_machine__7207__auto__ = function(state_12262){
switch(arguments.length){
case 0:
return state_machine__7207__auto____0.call(this);
case 1:
return state_machine__7207__auto____1.call(this,state_12262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7207__auto____0;
state_machine__7207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7207__auto____1;
return state_machine__7207__auto__;
})()
;})(switch__7206__auto__,c__7271__auto___12292,out))
})();var state__7273__auto__ = (function (){var statearr_12291 = f__7272__auto__.call(null);(statearr_12291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7271__auto___12292);
return statearr_12291;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7273__auto__);
});})(c__7271__auto___12292,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map