!function(t){"use strict";function e(){}function r(){try{return document.activeElement}catch(t){}}function n(t,e){for(var r=0,n=t.length;n>r;r++)if(t[r]===e)return!0;return!1}function u(t,e,r){return t.addEventListener?t.addEventListener(e,r,!1):t.attachEvent?t.attachEvent("on"+e,r):void 0}function a(t,e){var r;t.createTextRange?(r=t.createTextRange(),r.move("character",e),r.select()):t.selectionStart&&(t.focus(),t.setSelectionRange(e,e))}function l(t,e){try{return t.type=e,!0}catch(t){return!1}}function i(t,e){if(t&&t.getAttribute(B))e(t);else for(var r,n=t?t.getElementsByTagName("input"):P,u=t?t.getElementsByTagName("textarea"):j,a=n?n.length:0,l=u?u.length:0,i=a+l,o=0;i>o;o++)r=a>o?n[o]:u[o-a],e(r)}function o(t){i(t,s)}function c(t){i(t,d)}function s(t,e){var r=!!e&&t.value!==e,n=t.value===t.getAttribute(B);if((r||n)&&"true"===t.getAttribute(S)){t.removeAttribute(S),t.value=t.value.replace(t.getAttribute(B),""),t.className=t.className.replace(w,"");var u=t.getAttribute(R);parseInt(u,10)>=0&&(t.setAttribute("maxLength",u),t.removeAttribute(R));var a=t.getAttribute(L);return a&&(t.type=a),!0}return!1}function d(t){var e=t.getAttribute(B);if(""===t.value&&e){t.setAttribute(S,"true"),t.value=e,t.className+=" "+T;t.getAttribute(R)||(t.setAttribute(R,t.maxLength),t.removeAttribute("maxLength"));return t.getAttribute(L)?t.type="text":"password"===t.type&&l(t,"text")&&t.setAttribute(L,"password"),!0}return!1}function g(t){return function(){q&&t.value===t.getAttribute(B)&&"true"===t.getAttribute(S)?a(t,0):s(t)}}function b(t){return function(){d(t)}}function f(t){return function(){o(t)}}function v(t){return function(e){return x=t.value,"true"===t.getAttribute(S)&&x===t.getAttribute(B)&&n(N,e.keyCode)?(e.preventDefault&&e.preventDefault(),!1):void 0}}function p(t){return function(){s(t,x),""===t.value&&(t.blur(),a(t,0))}}function m(t){return function(){t===r()&&t.value===t.getAttribute(B)&&"true"===t.getAttribute(S)&&a(t,0)}}function h(t){var e=t.form;e&&"string"==typeof e&&(e=document.getElementById(e),e.getAttribute(k)||(u(e,"submit",f(e)),e.setAttribute(k,"true"))),u(t,"focus",g(t)),u(t,"blur",b(t)),q&&(u(t,"keydown",v(t)),u(t,"keyup",p(t)),u(t,"click",m(t))),t.setAttribute(I,"true"),t.setAttribute(B,H),(q||t!==r())&&d(t)}var A=document.createElement("input"),y=void 0!==A.placeholder;if(t.Placeholders={nativeSupport:y,disable:y?e:o,enable:y?e:c},!y){var x,E=["text","search","url","tel","email","password","number","textarea"],N=[27,33,34,35,36,37,38,39,40,8,46],T="placeholdersjs",w=new RegExp("(?:^|\\s)"+T+"(?!\\S)"),B="data-placeholder-value",S="data-placeholder-active",L="data-placeholder-type",k="data-placeholder-submit",I="data-placeholder-bound",R="data-placeholder-maxlength",C=document.getElementsByTagName("head")[0],V=document.documentElement,D=t.Placeholders,P=document.getElementsByTagName("input"),j=document.getElementsByTagName("textarea"),q="false"===V.getAttribute("data-placeholder-focus"),z="false"!==V.getAttribute("data-placeholder-live"),F=document.createElement("style");F.type="text/css";var G=document.createTextNode("."+T+" {color:#ccc;}");F.styleSheet?F.styleSheet.cssText=G.nodeValue:F.appendChild(G),C.insertBefore(F,C.firstChild);for(var H,J,K=0,M=P.length+j.length;M>K;K++)J=K<P.length?P[K]:j[K-P.length],(H=J.attributes.placeholder)&&(H=H.nodeValue)&&n(E,J.type)&&h(J);var O=setInterval(function(){for(var t=0,e=P.length+j.length;e>t;t++)J=t<P.length?P[t]:j[t-P.length],H=J.attributes.placeholder,H?(H=H.nodeValue)&&n(E,J.type)&&(J.getAttribute(I)||h(J),(H!==J.getAttribute(B)||"password"===J.type&&!J.getAttribute(L))&&("password"===J.type&&!J.getAttribute(L)&&l(J,"text")&&J.setAttribute(L,"password"),J.value===J.getAttribute(B)&&(J.value=H),J.setAttribute(B,H))):J.getAttribute(S)&&(s(J),J.removeAttribute(B));z||clearInterval(O)},100);u(t,"beforeunload",function(){D.disable()})}}(this);