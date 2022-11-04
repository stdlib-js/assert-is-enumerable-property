// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";var r=Object.prototype.propertyIsEnumerable;var i=!r.call("beep","0");function n(n,l){var m;return null!=n&&(!(m=r.call(n,l))&&i&&s(n)?!t(l=+l)&&e(l)&&l>=0&&l<n.length:m)}export{n as default};
//# sourceMappingURL=index.mjs.map
