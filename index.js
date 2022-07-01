// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,l=n.__lookupSetter__,a=r,f=function(t,e,r){var a,f,p,b;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(c.call(t,e)||l.call(t,e)?(a=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=a):t[e]=r.value),p="get"in r,b="set"in r,f&&(p||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,e,r.get),b&&u&&u.call(t,e,r.set),t},p=e()?a:f,b=function(t,e,r){p(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},y=function(t){return"string"==typeof t},s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),m=function(){return s&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,v=_,d=function(t){return v.call(t)},j=Object.prototype.hasOwnProperty,g=function(t,e){return null!=t&&j.call(t,e)},O="function"==typeof Symbol?Symbol.toStringTag:"",S=g,P=O,h=_,I=d,T=function(t){var e,r,n;if(null==t)return h.call(t);r=t[P],e=S(t,P);try{t[P]=void 0}catch(e){return h.call(t)}return n=h.call(t),e?t[P]=r:delete t[P],n},w=m()?T:I,E=String.prototype.valueOf,N=w,V=function(t){try{return E.call(t),!0}catch(t){return!1}},x=m(),A=function(t){return"object"==typeof t&&(t instanceof String||(x?V(t):"[object String]"===N(t)))},F=y,G=A,k=b,Y=function(t){return F(t)||G(t)},C=A;k(Y,"isPrimitive",y),k(Y,"isObject",C);var M=Y,q=function(t){return"number"==typeof t},z=Number,B=z.prototype.toString,D=w,H=z,J=function(t){try{return B.call(t),!0}catch(t){return!1}},K=m(),L=function(t){return"object"==typeof t&&(t instanceof H||(K?J(t):"[object Number]"===D(t)))},Q=q,R=L,U=b,W=function(t){return Q(t)||R(t)},X=L;U(W,"isPrimitive",q),U(W,"isObject",X);var Z=W,$=function(t){return t!=t},tt=Z.isPrimitive,et=$,rt=function(t){return tt(t)&&et(t)},nt=Z.isObject,ot=$,it=function(t){return nt(t)&&ot(t.valueOf())},ut=rt,ct=it,lt=b,at=function(t){return ut(t)||ct(t)},ft=it;lt(at,"isPrimitive",rt),lt(at,"isObject",ft);var pt=at,bt=Number.POSITIVE_INFINITY,yt=z.NEGATIVE_INFINITY,st=Math.floor,mt=bt,_t=yt,vt=function(t){return st(t)===t},dt=function(t){return t<mt&&t>_t&&vt(t)},jt=Z.isPrimitive,gt=dt,Ot=function(t){return jt(t)&&gt(t)},St=Z.isObject,Pt=dt,ht=function(t){return St(t)&&Pt(t.valueOf())},It=Ot,Tt=ht,wt=b,Et=function(t){return It(t)||Tt(t)},Nt=ht;wt(Et,"isPrimitive",Ot),wt(Et,"isObject",Nt);var Vt=Et,xt=Object.prototype.propertyIsEnumerable,At=!xt.call("beep","0");return function(t,e){var r;return null!=t&&(!(r=xt.call(t,e))&&At&&M(t)?(e=+e,!pt.isPrimitive(e)&&Vt.isPrimitive(e)&&e>=0&&e<t.length):r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isEnumerableProperty=e();
//# sourceMappingURL=index.js.map
