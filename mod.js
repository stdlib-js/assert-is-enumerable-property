// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,u=e.__defineSetter__,i=e.__lookupGetter__,c=e.__lookupSetter__;var a=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,a){var l,f,p,b;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof a||null===a||"[object Array]"===n.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((f="value"in a)&&(i.call(t,r)||c.call(t,r)?(l=t.__proto__,t.__proto__=e,delete t[r],t[r]=a.value,t.__proto__=l):t[r]=a.value),p="get"in a,b="set"in a,f&&(p||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,r,a.get),b&&u&&u.call(t,r,a.set),t};function l(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function f(t){return"string"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var _="function"==typeof Symbol?Symbol.toStringTag:"";var s=b()?function(t){var r,e,n,o,u;if(null==t)return y.call(t);e=t[_],u=_,r=null!=(o=t)&&v.call(o,u);try{t[_]=void 0}catch(r){return y.call(t)}return n=y.call(t),r?t[_]=e:delete t[_],n}:function(t){return y.call(t)},m=String.prototype.valueOf;var j=b();function g(t){return"object"==typeof t&&(t instanceof String||(j?function(t){try{return m.call(t),!0}catch(t){return!1}}(t):"[object String]"===s(t)))}function O(t){return f(t)||g(t)}function S(t){return"number"==typeof t}l(O,"isPrimitive",f),l(O,"isObject",g);var d=Number,h=d.prototype.toString;var I=b();function P(t){return"object"==typeof t&&(t instanceof d||(I?function(t){try{return h.call(t),!0}catch(t){return!1}}(t):"[object Number]"===s(t)))}function w(t){return S(t)||P(t)}function N(t){return t!=t}function T(t){return S(t)&&N(t)}function E(t){return P(t)&&N(t.valueOf())}function V(t){return T(t)||E(t)}l(w,"isPrimitive",S),l(w,"isObject",P),l(V,"isPrimitive",T),l(V,"isObject",E);var A=Number.POSITIVE_INFINITY,F=d.NEGATIVE_INFINITY,G=Math.floor;function k(t){return t<A&&t>F&&G(r=t)===r;var r}function x(t){return S(t)&&k(t)}function Y(t){return P(t)&&k(t.valueOf())}function C(t){return x(t)||Y(t)}l(C,"isPrimitive",x),l(C,"isObject",Y);var M=Object.prototype.propertyIsEnumerable;var q=!M.call("beep","0");function z(t,r){var e;return null!=t&&(!(e=M.call(t,r))&&q&&O(t)?!T(r=+r)&&x(r)&&r>=0&&r<t.length:e)}export{z as default};
//# sourceMappingURL=mod.js.map
