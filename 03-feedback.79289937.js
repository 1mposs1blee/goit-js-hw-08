!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};var r,i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",u=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,v=d||s||Function("return this")(),g=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return v.Date.now()};function y(e,t,n){var r,i,u,a,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function y(e){return c=e,f=setTimeout(T,t),d?g(e):a}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function T(){var e=b();if(S(e))return w(e);f=setTimeout(T,function(e){var n=t-(e-l);return s?p(n,u-(e-c)):n}(e))}function w(e){return f=void 0,v&&r?g(e):(r=i=void 0,a)}function h(){var e=b(),n=S(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return y(l);if(s)return f=setTimeout(T,t),g(l)}return void 0===f&&(f=setTimeout(T,t)),a}return t=O(t)||0,j(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(O(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},h.flush=function(){return void 0===f?a:w(b())},h}function j(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==g.call(t)}(t))return NaN;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var r=f.test(t);return r||l.test(t)?c(t.slice(2),r?2:8):a.test(t)?NaN:+t}r=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return j(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var S,T=document.querySelector(".feedback-form"),w=document.querySelector("input"),h=document.querySelector("textarea"),x="feedback-form-state",N=w.name,_=h.name;(S=JSON.parse(localStorage.getItem(x)))&&(w.value=S[N],h.value=S[_]),T.addEventListener("input",e(r)((function(t){var r,i=t.currentTarget.elements.email.value,o=t.currentTarget.elements.message.value;localStorage.setItem(x,JSON.stringify((r={},e(n)(r,N,i),e(n)(r,_,o),r)))}),500,{leading:!0,trailing:!1})),T.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset();var t=JSON.parse(localStorage.getItem(x));t&&console.log(t),localStorage.clear()}))}();
//# sourceMappingURL=03-feedback.79289937.js.map
