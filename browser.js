// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var a=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=t?e+i(n):i(n)+e,a&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=a(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=a(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):n.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,w=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,i,a=parseFloat(e.arg);if(!isFinite(a)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);a=e.arg}switch(e.specifier){case"e":case"E":i=a.toExponential(e.precision);break;case"f":case"F":i=a.toFixed(e.precision);break;case"g":case"G":p(a)<1e-4?((r=e.precision)>0&&(r-=1),i=a.toExponential(r)):i=a.toPrecision(e.precision),e.alternate||(i=f.call(i,y,"$1e"),i=f.call(i,v,"e"),i=f.call(i,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,b,"$1.e")),a>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):l.call(i)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var i=r-e.length;return i<0?e:e=t?e+_(i):_(i)+e}var k=String.fromCharCode,x=isNaN,S=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,i,n,o,p,l,u,f;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(s(i=e[u]))p+=i;else{if(r=void 0!==i.precision,!(i=j(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,x(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,x(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!x(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=x(o)?String(i.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=E(i.arg,i.width,i.padRight)),p+=i.arg||"",l+=1}return p}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $(e){var r,t,i,a;for(t=[],a=0,i=I.exec(e);i;)(r=e.slice(a,I.lastIndex-i[0].length)).length&&t.push(r),t.push(T(i)),a=I.lastIndex,i=I.exec(e);return(r=e.slice(a)).length&&t.push(r),t}function F(e){return"string"==typeof e}function O(e){var r,t;if(!F(e))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[$(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return V.apply(null,r)}var A=Object.prototype,C=A.toString,P=A.__defineGetter__,R=A.__defineSetter__,Z=A.__lookupGetter__,G=A.__lookupSetter__,N=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(Z.call(e,r)||G.call(e,r)?(i=e.__proto__,e.__proto__=A,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&P&&P.call(e,r,t.get),o&&R&&R.call(e,r,t.set),e};function W(e,r,t){N(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(e){return"string"==typeof e}function U(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var X=U();function M(){return X&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function q(e,r){return null!=e&&Y.call(e,r)}var B="function"==typeof Symbol?Symbol:void 0,D="function"==typeof B?B.toStringTag:"",H=M()?function(e){var r,t,i;if(null==e)return z.call(e);t=e[D],r=q(e,D);try{e[D]=void 0}catch(r){return z.call(e)}return i=z.call(e),r?e[D]=t:delete e[D],i}:function(e){return z.call(e)},J=String.prototype.valueOf,K=M();function Q(e){return"object"==typeof e&&(e instanceof String||(K?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object String]"===H(e)))}function ee(e){return L(e)||Q(e)}W(ee,"isPrimitive",L),W(ee,"isObject",Q);var re="function"==typeof Object.defineProperty?Object.defineProperty:null,te=Object.defineProperty;function ie(e){return"number"==typeof e}function ae(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ne(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+ae(a):ae(a)+e,i&&(e="-"+e)),e}var oe=String.prototype.toLowerCase,ce=String.prototype.toUpperCase;function se(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ie(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=ne(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=ne(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===ce.call(e.specifier)?ce.call(t):oe.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function pe(e){return"string"==typeof e}var le=Math.abs,ue=String.prototype.toLowerCase,fe=String.prototype.toUpperCase,ge=String.prototype.replace,de=/e\+(\d)$/,he=/e-(\d)$/,be=/^(\d+)$/,we=/^(\d+)e/,ve=/\.0$/,ye=/\.0*e/,me=/(\..*[^0])0*e/;function _e(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ie(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":le(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=ge.call(t,me,"$1e"),t=ge.call(t,ye,"e"),t=ge.call(t,ve,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=ge.call(t,de,"e+0$1"),t=ge.call(t,he,"e-0$1"),e.alternate&&(t=ge.call(t,be,"$1."),t=ge.call(t,we,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===fe.call(e.specifier)?fe.call(t):ue.call(t)}function Ee(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function ke(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Ee(i):Ee(i)+e}var xe=String.fromCharCode,Se=isNaN,je=Array.isArray;function Ve(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ie(e){var r,t,i,a,n,o,c,s,p;if(!je(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(pe(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Ve(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Se(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Se(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=se(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Se(i.arg)){if((n=parseInt(i.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Se(n)?String(i.arg):xe(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=_e(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ne(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=ke(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Te=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $e(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Fe(e){var r,t,i,a;for(t=[],a=0,i=Te.exec(e);i;)(r=e.slice(a,Te.lastIndex-i[0].length)).length&&t.push(r),t.push($e(i)),a=Te.lastIndex,i=Te.exec(e);return(r=e.slice(a)).length&&t.push(r),t}function Oe(e){return"string"==typeof e}function Ae(e){var r,t;if(!Oe(e))throw new TypeError(Ae("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Fe(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Ie.apply(null,r)}var Ce=Object.prototype,Pe=Ce.toString,Re=Ce.__defineGetter__,Ze=Ce.__defineSetter__,Ge=Ce.__lookupGetter__,Ne=Ce.__lookupSetter__,We=function(){try{return re({},"x",{}),!0}catch(e){return!1}}()?te:function(e,r,t){var i,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===Pe.call(e))throw new TypeError(Ae("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Pe.call(t))throw new TypeError(Ae("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(Ge.call(e,r)||Ne.call(e,r)?(i=e.__proto__,e.__proto__=Ce,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&Re&&Re.call(e,r,t.get),o&&Ze&&Ze.call(e,r,t.set),e};function Le(e,r,t){We(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Ue="function"==typeof Object.defineProperty?Object.defineProperty:null,Xe=Object.defineProperty;function Me(e){return"number"==typeof e}function ze(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Ye(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+ze(a):ze(a)+e,i&&(e="-"+e)),e}var qe=String.prototype.toLowerCase,Be=String.prototype.toUpperCase;function De(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!Me(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Ye(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Ye(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Be.call(e.specifier)?Be.call(t):qe.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function He(e){return"string"==typeof e}var Je=Math.abs,Ke=String.prototype.toLowerCase,Qe=String.prototype.toUpperCase,er=String.prototype.replace,rr=/e\+(\d)$/,tr=/e-(\d)$/,ir=/^(\d+)$/,ar=/^(\d+)e/,nr=/\.0$/,or=/\.0*e/,cr=/(\..*[^0])0*e/;function sr(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!Me(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Je(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=er.call(t,cr,"$1e"),t=er.call(t,or,"e"),t=er.call(t,nr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=er.call(t,rr,"e+0$1"),t=er.call(t,tr,"e-0$1"),e.alternate&&(t=er.call(t,ir,"$1."),t=er.call(t,ar,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Qe.call(e.specifier)?Qe.call(t):Ke.call(t)}function pr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function lr(e,r,t){var i=r-e.length;return i<0?e:e=t?e+pr(i):pr(i)+e}var ur=String.fromCharCode,fr=isNaN,gr=Array.isArray;function dr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function hr(e){var r,t,i,a,n,o,c,s,p;if(!gr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(He(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=dr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,fr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,fr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=De(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!fr(i.arg)){if((n=parseInt(i.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=fr(n)?String(i.arg):ur(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=sr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Ye(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=lr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var br=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function wr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function vr(e){var r,t,i,a;for(t=[],a=0,i=br.exec(e);i;)(r=e.slice(a,br.lastIndex-i[0].length)).length&&t.push(r),t.push(wr(i)),a=br.lastIndex,i=br.exec(e);return(r=e.slice(a)).length&&t.push(r),t}function yr(e){return"string"==typeof e}function mr(e){var r,t;if(!yr(e))throw new TypeError(mr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[vr(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return hr.apply(null,r)}var _r=Object.prototype,Er=_r.toString,kr=_r.__defineGetter__,xr=_r.__defineSetter__,Sr=_r.__lookupGetter__,jr=_r.__lookupSetter__,Vr=function(){try{return Ue({},"x",{}),!0}catch(e){return!1}}()?Xe:function(e,r,t){var i,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===Er.call(e))throw new TypeError(mr("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Er.call(t))throw new TypeError(mr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(Sr.call(e,r)||jr.call(e,r)?(i=e.__proto__,e.__proto__=_r,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&kr&&kr.call(e,r,t.get),o&&xr&&xr.call(e,r,t.set),e};function Ir(e,r,t){Vr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Tr(e){return"number"==typeof e}var $r=U();function Fr(){return $r&&"symbol"==typeof Symbol.toStringTag}var Or=Object.prototype.toString,Ar="function"==typeof Symbol?Symbol:void 0,Cr="function"==typeof Ar?Ar.toStringTag:"",Pr=Fr()?function(e){var r,t,i;if(null==e)return Or.call(e);t=e[Cr],r=q(e,Cr);try{e[Cr]=void 0}catch(r){return Or.call(e)}return i=Or.call(e),r?e[Cr]=t:delete e[Cr],i}:function(e){return Or.call(e)},Rr=Number,Zr=Rr.prototype.toString,Gr=Fr();function Nr(e){return"object"==typeof e&&(e instanceof Rr||(Gr?function(e){try{return Zr.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Pr(e)))}function Wr(e){return Tr(e)||Nr(e)}function Lr(e){return e!=e}function Ur(e){return Tr(e)&&Lr(e)}function Xr(e){return Nr(e)&&Lr(e.valueOf())}function Mr(e){return Ur(e)||Xr(e)}Ir(Wr,"isPrimitive",Tr),Ir(Wr,"isObject",Nr),Le(Mr,"isPrimitive",Ur),Le(Mr,"isObject",Xr);var zr="function"==typeof Object.defineProperty?Object.defineProperty:null,Yr=Object.defineProperty;function qr(e){return"number"==typeof e}function Br(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Dr(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+Br(a):Br(a)+e,i&&(e="-"+e)),e}var Hr=String.prototype.toLowerCase,Jr=String.prototype.toUpperCase;function Kr(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!qr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Dr(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Dr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Jr.call(e.specifier)?Jr.call(t):Hr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Qr(e){return"string"==typeof e}var et=Math.abs,rt=String.prototype.toLowerCase,tt=String.prototype.toUpperCase,it=String.prototype.replace,at=/e\+(\d)$/,nt=/e-(\d)$/,ot=/^(\d+)$/,ct=/^(\d+)e/,st=/\.0$/,pt=/\.0*e/,lt=/(\..*[^0])0*e/;function ut(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!qr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":et(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=it.call(t,lt,"$1e"),t=it.call(t,pt,"e"),t=it.call(t,st,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=it.call(t,at,"e+0$1"),t=it.call(t,nt,"e-0$1"),e.alternate&&(t=it.call(t,ot,"$1."),t=it.call(t,ct,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===tt.call(e.specifier)?tt.call(t):rt.call(t)}function ft(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function gt(e,r,t){var i=r-e.length;return i<0?e:e=t?e+ft(i):ft(i)+e}var dt=String.fromCharCode,ht=isNaN,bt=Array.isArray;function wt(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function vt(e){var r,t,i,a,n,o,c,s,p;if(!bt(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Qr(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=wt(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,ht(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,ht(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Kr(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!ht(i.arg)){if((n=parseInt(i.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=ht(n)?String(i.arg):dt(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=ut(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Dr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=gt(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var yt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function mt(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function _t(e){var r,t,i,a;for(t=[],a=0,i=yt.exec(e);i;)(r=e.slice(a,yt.lastIndex-i[0].length)).length&&t.push(r),t.push(mt(i)),a=yt.lastIndex,i=yt.exec(e);return(r=e.slice(a)).length&&t.push(r),t}function Et(e){return"string"==typeof e}function kt(e){var r,t;if(!Et(e))throw new TypeError(kt("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[_t(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return vt.apply(null,r)}var xt=Object.prototype,St=xt.toString,jt=xt.__defineGetter__,Vt=xt.__defineSetter__,It=xt.__lookupGetter__,Tt=xt.__lookupSetter__,$t=function(){try{return zr({},"x",{}),!0}catch(e){return!1}}()?Yr:function(e,r,t){var i,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===St.call(e))throw new TypeError(kt("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===St.call(t))throw new TypeError(kt("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(It.call(e,r)||Tt.call(e,r)?(i=e.__proto__,e.__proto__=xt,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&jt&&jt.call(e,r,t.get),o&&Vt&&Vt.call(e,r,t.set),e};function Ft(e,r,t){$t(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Ot=Number.POSITIVE_INFINITY,At=Rr.NEGATIVE_INFINITY,Ct=Math.floor;function Pt(e){return e<Ot&&e>At&&Ct(r=e)===r;var r}function Rt(e){return Tr(e)&&Pt(e)}function Zt(e){return Nr(e)&&Pt(e.valueOf())}function Gt(e){return Rt(e)||Zt(e)}Ft(Gt,"isPrimitive",Rt),Ft(Gt,"isObject",Zt);var Nt=Object.prototype.propertyIsEnumerable,Wt=!Nt.call("beep","0");return function(e,r){var t;return null!=e&&(!(t=Nt.call(e,r))&&Wt&&ee(e)?!Ur(r=+r)&&Rt(r)&&r>=0&&r<e.length:t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isEnumerableProperty=r();
//# sourceMappingURL=browser.js.map
