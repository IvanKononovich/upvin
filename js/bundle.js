!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1),t.exports=n(2)},function(t,e,n){"use strict";var r,a=document.querySelectorAll(".paragraph-list__lists_nested"),o=document.querySelectorAll(".paragraph-list__text-link"),i=!0;function s(){for(var t=0;t<a.length;t++)a[t].classList.add("hidden");for(t=0;t<o.length;t++)o[t].classList.remove("paragraph-list__text-link_active")}function c(t){t.target.classList.contains("paragraph-list__text-link_arrow")&&t.target.parentNode.querySelector(".paragraph-list__lists_nested").classList.toggle("hidden"),t.target.classList.toggle("paragraph-list__text-link_active")}function l(t){t.classList.toggle("header__burger_active"),t.parentNode.classList.toggle("header__wraper_open"),t.parentNode.querySelector(".header__container").classList.toggle("header__container_hidden_mob")}function u(t){t.target.classList.contains("header__burger")&&l(t.target);t.target.parentNode.classList.contains("header__burger")&&l(t.target.parentNode);t.target.classList.contains("paragraph-list__text-link")&&(r===t.target?(s(),r=null):(s(),c(t),r=t.target))}setInterval(function(){document.documentElement.clientWidth>770?(document.addEventListener("mouseover",function(t){t.target.classList.contains("paragraph-list__text-link")&&(s(),c(t))}),document.addEventListener("mouseover",function(t){(t.target.classList.contains("logo")||t.target.classList.contains("main"))&&s()})):(document.addEventListener("touchstart",function(t){i&&(i=!1,u(t),setTimeout(function(){i=!0},150))}),document.addEventListener("click",function(t){i&&(i=!1,u(t),setTimeout(function(){i=!0},150))}))},300)},function(t,e){}]);
//# sourceMappingURL=bundle.js.map