!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){r(1),e.exports=r(2)},function(e,t,r){"use strict";var n=document.querySelectorAll(".paragraph-list__lists_nested"),a=document.querySelectorAll(".paragraph-list__text-link");function o(){for(var e=0;e<n.length;e++)n[e].classList.add("hidden");for(e=0;e<a.length;e++)a[e].classList.remove("paragraph-list__text-link_active")}function s(e){e.parentNode.querySelector(".header__container").classList.toggle("show"),document.querySelector(".header__wraper").classList.toggle("header__wraper_open")}document.addEventListener("mouseover",function(e){e.target.classList.contains("paragraph-list__text-link")&&(o(),e.target.classList.contains("paragraph-list__text-link_arrow")&&e.target.parentNode.querySelector(".paragraph-list__lists_nested").classList.remove("hidden"),e.target.classList.add("paragraph-list__text-link_active"))}),document.addEventListener("mouseover",function(e){(e.target.classList.contains("logo")||e.target.classList.contains("main"))&&o()}),document.addEventListener("click",function(e){e.target.classList.contains("header__burger")&&(e.target.classList.toggle("header__burger_active"),s(e.target)),e.target.parentNode.classList.contains("header__burger")&&(e.target.parentNode.classList.toggle("header__burger_active"),s(e.target.parentNode))})},function(e,t){}]);
//# sourceMappingURL=bundle.js.map