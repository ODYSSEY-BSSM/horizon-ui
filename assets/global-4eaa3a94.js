import{b as T,h as I,E as z,c as D}from"./emotion-styled.browser.esm-1e5c824c.js";import{r as v}from"./index-8b3efc3f.js";var C={exports:{}},r={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=typeof Symbol=="function"&&Symbol.for,$=t?Symbol.for("react.element"):60103,F=t?Symbol.for("react.portal"):60106,l=t?Symbol.for("react.fragment"):60107,f=t?Symbol.for("react.strict_mode"):60108,u=t?Symbol.for("react.profiler"):60114,p=t?Symbol.for("react.provider"):60109,m=t?Symbol.for("react.context"):60110,x=t?Symbol.for("react.async_mode"):60111,y=t?Symbol.for("react.concurrent_mode"):60111,d=t?Symbol.for("react.forward_ref"):60112,b=t?Symbol.for("react.suspense"):60113,P=t?Symbol.for("react.suspense_list"):60120,g=t?Symbol.for("react.memo"):60115,h=t?Symbol.for("react.lazy"):60116,B=t?Symbol.for("react.block"):60121,R=t?Symbol.for("react.fundamental"):60117,_=t?Symbol.for("react.responder"):60118,j=t?Symbol.for("react.scope"):60119;function o(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case $:switch(e=e.type,e){case x:case y:case l:case u:case f:case b:return e;default:switch(e=e&&e.$$typeof,e){case m:case d:case h:case g:case p:return e;default:return n}}case F:return n}}}function E(e){return o(e)===y}r.AsyncMode=x;r.ConcurrentMode=y;r.ContextConsumer=m;r.ContextProvider=p;r.Element=$;r.ForwardRef=d;r.Fragment=l;r.Lazy=h;r.Memo=g;r.Portal=F;r.Profiler=u;r.StrictMode=f;r.Suspense=b;r.isAsyncMode=function(e){return E(e)||o(e)===x};r.isConcurrentMode=E;r.isContextConsumer=function(e){return o(e)===m};r.isContextProvider=function(e){return o(e)===p};r.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===$};r.isForwardRef=function(e){return o(e)===d};r.isFragment=function(e){return o(e)===l};r.isLazy=function(e){return o(e)===h};r.isMemo=function(e){return o(e)===g};r.isPortal=function(e){return o(e)===F};r.isProfiler=function(e){return o(e)===u};r.isStrictMode=function(e){return o(e)===f};r.isSuspense=function(e){return o(e)===b};r.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===l||e===y||e===u||e===f||e===b||e===P||typeof e=="object"&&e!==null&&(e.$$typeof===h||e.$$typeof===g||e.$$typeof===p||e.$$typeof===m||e.$$typeof===d||e.$$typeof===R||e.$$typeof===_||e.$$typeof===j||e.$$typeof===B)};r.typeOf=o;C.exports=r;var L=C.exports,k=L,O={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},J={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},M={};M[k.ForwardRef]=O;M[k.Memo]=J;var w=function(n,i){var S=arguments;if(i==null||!I.call(i,"css"))return v.createElement.apply(void 0,S);var A=S.length,c=new Array(A);c[0]=z,c[1]=D(n,i);for(var s=2;s<A;s++)c[s]=S[s];return v.createElement.apply(null,c)};(function(e){var n;n||(n=e.JSX||(e.JSX={}))})(w||(w={}));function U(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return T(n)}const a={primary:{100:"#E5EAFF",200:"#CCD4FF",300:"#AAB6F2",400:"#798DF2",500:"#5C5CE5",600:"#4747B2",700:"#333380",800:"#1F1F4D",900:"#0A0A1A"},secondary:{100:"#E6FFF2",200:"#C2F2DA",300:"#8AE5B8",400:"#57D998",500:"#29CC7A",600:"#179958",700:"#0A6638",800:"#03331B",900:"#001A0D"},grayscale:{100:"#E6E6E6",200:"#CCCCCC",300:"#B3B3B3",400:"#999999",500:"#808080",600:"#666666",700:"#4D4D4D",800:"#333333",900:"#1A1A1A"},warning:{light:"#FFAE33",dark:"#FF5533"},white:"#FFFFFF",black:"#000000",background:"#FFFFFF"};U`
  @import url('https://cdn.jsdelivr.net/gh/sun-typeface/SUIT@2/fonts/variable/woff2/SUIT-Variable.css');
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,300..400,0..1,0');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    font-family:
      'SUIT Variable',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    line-height: 1.5;
    background-color: ${a.background};
    color: ${a.grayscale[900]};
  }

  a {
    color: ${a.primary[500]};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    font: inherit;
    color: inherit;
  }

  input,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }

  ul,
  ol {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: 600;
    line-height: 1.2;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  :focus-visible {
    outline: 2px solid ${a.primary[500]};
    outline-offset: 2px;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${a.grayscale[100]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${a.grayscale[400]};
    border-radius: 4px;

    &:hover {
      background: ${a.grayscale[500]};
    }
  }

  ::selection {
    background-color: ${a.primary[200]};
    color: ${a.primary[900]};
  }
`;export{U as c};
