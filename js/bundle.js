!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){r(1),t.exports=r(2)},function(t,e,r){"use strict";var n=document.querySelectorAll(".paragraph-list__lists_nested");n=Array.from(n);var o=document.querySelectorAll(".paragraph-list__text");function a(){n.forEach(function(t){t.classList.add("hidden")}),o.forEach(function(t){t.classList.remove("paragraph-list__text_active")})}o=Array.from(o),document.addEventListener("mouseover",function(t){t.target.classList.contains("paragraph-list__text")&&(a(),t.target.classList.contains("paragraph-list__text_arrow")&&t.target.parentNode.querySelector(".paragraph-list__lists_nested").classList.remove("hidden"),t.target.classList.add("paragraph-list__text_active"))}),document.querySelector("main").addEventListener("mouseover",function(){a()})},function(t,e){}]);
//# sourceMappingURL=bundle.js.map