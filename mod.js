// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,c=n.__lookupSetter__;var l=e,f=function(r,t,e){var l,f,v,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((f="value"in e)&&(u.call(r,t)||c.call(r,t)?(l=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=l):r[t]=e.value),v="get"in e,p="set"in e,f&&(v||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(r,t,e.get),p&&a&&a.call(r,t,e.set),r},v=t()?l:f;var p=function(r,t,e){v(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})};var b=function(r){return"string"==typeof r};var y=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var s=function(){return y&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,m=_;var j=function(r){return m.call(r)},g=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&g.call(r,t)},S="function"==typeof Symbol?Symbol.toStringTag:"",d=O,P=S,h=_;var I=j,w=function(r){var t,e,n;if(null==r)return h.call(r);e=r[P],t=d(r,P);try{r[P]=void 0}catch(t){return h.call(r)}return n=h.call(r),t?r[P]=e:delete r[P],n},N=s()?w:I,T=String.prototype.valueOf;var E=N,V=function(r){try{return T.call(r),!0}catch(r){return!1}},A=s();var F=function(r){return"object"==typeof r&&(r instanceof String||(A?V(r):"[object String]"===E(r)))},G=b,k=F;var x=p,Y=function(r){return G(r)||k(r)},C=F;x(Y,"isPrimitive",b),x(Y,"isObject",C);var M=Y;var q=function(r){return"number"==typeof r},z=Number,B=z.prototype.toString;var D=N,H=z,J=function(r){try{return B.call(r),!0}catch(r){return!1}},K=s();var L=function(r){return"object"==typeof r&&(r instanceof H||(K?J(r):"[object Number]"===D(r)))},Q=q,R=L;var U=p,W=function(r){return Q(r)||R(r)},X=L;U(W,"isPrimitive",q),U(W,"isObject",X);var Z=W;var $=function(r){return r!=r},rr=Z.isPrimitive,tr=$;var er=function(r){return rr(r)&&tr(r)},nr=Z.isObject,or=$;var ir=function(r){return nr(r)&&or(r.valueOf())},ar=er,ur=ir;var cr=p,lr=function(r){return ar(r)||ur(r)},fr=ir;cr(lr,"isPrimitive",er),cr(lr,"isObject",fr);var vr=lr,pr=Number.POSITIVE_INFINITY,br=z.NEGATIVE_INFINITY,yr=Math.floor;var sr=pr,_r=br,mr=function(r){return yr(r)===r};var jr=function(r){return r<sr&&r>_r&&mr(r)},gr=Z.isPrimitive,Or=jr;var Sr=function(r){return gr(r)&&Or(r)},dr=Z.isObject,Pr=jr;var hr=function(r){return dr(r)&&Pr(r.valueOf())},Ir=Sr,wr=hr;var Nr=p,Tr=function(r){return Ir(r)||wr(r)},Er=hr;Nr(Tr,"isPrimitive",Sr),Nr(Tr,"isObject",Er);var Vr,Ar=Tr,Fr=Object.prototype.propertyIsEnumerable;Vr=!Fr.call("beep","0");var Gr=M,kr=vr.isPrimitive,xr=Ar.isPrimitive,Yr=Fr,Cr=Vr;var Mr=function(r,t){var e;return null!=r&&(!(e=Yr.call(r,t))&&Cr&&Gr(r)?!kr(t=+t)&&xr(t)&&t>=0&&t<r.length:e)},qr=Mr;export{qr as default};
//# sourceMappingURL=mod.js.map
