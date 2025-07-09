import{s as T,w as R,h as P,E as B,c as L,T as _,i as j}from"./emotion-element-f0de968e.browser.esm-6b6abe6b.js";import{r as m}from"./index-49dd5b96.js";import{a as E}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-2f2952e5.js";var I={exports:{}},t={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=typeof Symbol=="function"&&Symbol.for,A=o?Symbol.for("react.element"):60103,C=o?Symbol.for("react.portal"):60106,p=o?Symbol.for("react.fragment"):60107,d=o?Symbol.for("react.strict_mode"):60108,b=o?Symbol.for("react.profiler"):60114,g=o?Symbol.for("react.provider"):60109,h=o?Symbol.for("react.context"):60110,w=o?Symbol.for("react.async_mode"):60111,S=o?Symbol.for("react.concurrent_mode"):60111,$=o?Symbol.for("react.forward_ref"):60112,v=o?Symbol.for("react.suspense"):60113,O=o?Symbol.for("react.suspense_list"):60120,F=o?Symbol.for("react.memo"):60115,x=o?Symbol.for("react.lazy"):60116,J=o?Symbol.for("react.block"):60121,U=o?Symbol.for("react.fundamental"):60117,X=o?Symbol.for("react.responder"):60118,G=o?Symbol.for("react.scope"):60119;function s(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case A:switch(e=e.type,e){case w:case S:case p:case b:case d:case v:return e;default:switch(e=e&&e.$$typeof,e){case h:case $:case x:case F:case g:return e;default:return r}}case C:return r}}}function M(e){return s(e)===S}t.AsyncMode=w;t.ConcurrentMode=S;t.ContextConsumer=h;t.ContextProvider=g;t.Element=A;t.ForwardRef=$;t.Fragment=p;t.Lazy=x;t.Memo=F;t.Portal=C;t.Profiler=b;t.StrictMode=d;t.Suspense=v;t.isAsyncMode=function(e){return M(e)||s(e)===w};t.isConcurrentMode=M;t.isContextConsumer=function(e){return s(e)===h};t.isContextProvider=function(e){return s(e)===g};t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===A};t.isForwardRef=function(e){return s(e)===$};t.isFragment=function(e){return s(e)===p};t.isLazy=function(e){return s(e)===x};t.isMemo=function(e){return s(e)===F};t.isPortal=function(e){return s(e)===C};t.isProfiler=function(e){return s(e)===b};t.isStrictMode=function(e){return s(e)===d};t.isSuspense=function(e){return s(e)===v};t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===p||e===S||e===b||e===d||e===v||e===O||typeof e=="object"&&e!==null&&(e.$$typeof===x||e.$$typeof===F||e.$$typeof===g||e.$$typeof===h||e.$$typeof===$||e.$$typeof===U||e.$$typeof===X||e.$$typeof===G||e.$$typeof===J)};t.typeOf=s;I.exports=t;var N=I.exports,z=N,V={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},q={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},D={};D[z.ForwardRef]=V;D[z.Memo]=q;var k=function(r,i){var l=arguments;if(i==null||!P.call(i,"css"))return m.createElement.apply(void 0,l);var f=l.length,a=new Array(f);a[0]=B,a[1]=L(r,i);for(var n=2;n<f;n++)a[n]=l[n];return m.createElement.apply(null,a)};(function(e){var r;r||(r=e.JSX||(e.JSX={}))})(k||(k={}));var Q=R(function(e,r){var i=e.styles,l=T([i],void 0,m.useContext(_)),f=m.useRef();return E(function(){var a=r.key+"-global",n=new r.sheet.constructor({key:a,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy}),y=!1,u=document.querySelector('style[data-emotion="'+a+" "+l.name+'"]');return r.sheet.tags.length&&(n.before=r.sheet.tags[0]),u!==null&&(y=!0,u.setAttribute("data-emotion",a),n.hydrate([u])),f.current=[n,y],function(){n.flush()}},[r]),E(function(){var a=f.current,n=a[0],y=a[1];if(y){a[1]=!1;return}if(l.next!==void 0&&j(r,l.next,!0),n.tags.length){var u=n.tags[n.tags.length-1].nextElementSibling;n.before=u,n.flush()}r.insert("",l,n,!1)},[r,l.name]),null});function W(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return T(r)}const c={primary:{100:"#E5EAFF",200:"#CCD4FF",300:"#AAB6F2",400:"#798DF2",500:"#5C5CE5",600:"#4747B2",700:"#333380",800:"#1F1F4D",900:"#0A0A1A"},secondary:{100:"#E6FFF2",200:"#C2F2DA",300:"#8AE5B8",400:"#57D998",500:"#29CC7A",600:"#179958",700:"#0A6638",800:"#03331B",900:"#001A0D"},grayscale:{100:"#E6E6E6",200:"#CCCCCC",300:"#B3B3B3",400:"#999999",500:"#808080",600:"#666666",700:"#4D4D4D",800:"#333333",900:"#1A1A1A"},warning:{light:"#FFAE33",dark:"#FF5533"},white:"#FFFFFF",black:"#000000",background:"#FFFFFF"},Z=W`
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
    background-color: ${c.background};
    color: ${c.grayscale[900]};
  }

  a {
    color: ${c.primary[500]};
    text-decoration: none;

    &:hover {
      text-decoration: none;
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
    outline: 2px solid ${c.primary[500]};
    outline-offset: 2px;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${c.grayscale[100]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${c.grayscale[400]};
    border-radius: 4px;

    &:hover {
      background: ${c.grayscale[500]};
    }
  }

  ::selection {
    background-color: ${c.primary[200]};
    color: ${c.primary[900]};
  }
`;export{Q as G,c as a,W as c,Z as g};
