import e from"react";var r,n={exports:{}},t={};var o,a={};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */"production"===process.env.NODE_ENV?n.exports=function(){if(r)return t;r=1;var n=e,o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,a={},l=null,u=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(u=r.ref),r)i.call(r,t)&&!s.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:o,type:e,key:l,ref:u,props:a,_owner:c.current}}return t.Fragment=a,t.jsx=l,t.jsxs=l,t}():n.exports=(o||(o=1,"production"!==process.env.NODE_ENV&&function(){var r=e,n=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.for("react.offscreen"),g=Symbol.iterator,v="@@iterator",h=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function b(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t];!function(e,r,n){var t=h.ReactDebugCurrentFrame.getStackAddendum();""!==t&&(r+="%s",n=n.concat([t]));var o=n.map((function(e){return String(e)}));o.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,o)}("error",e,n)}var x,_=!1,j=!1,k=!1,w=!1,S=!1;function O(e){return e.displayName||"Context"}function R(e){if(null==e)return null;if("number"==typeof e.tag&&b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case o:return"Fragment";case t:return"Portal";case c:return"Profiler";case i:return"StrictMode";case f:return"Suspense";case p:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case l:return O(e)+".Consumer";case s:return O(e._context)+".Provider";case u:return function(e,r,n){var t=e.displayName;if(t)return t;var o=r.displayName||r.name||"";return""!==o?n+"("+o+")":n}(e,e.render,"ForwardRef");case y:var r=e.displayName||null;return null!==r?r:R(e.type)||"Memo";case d:var n=e,a=n._payload,m=n._init;try{return R(m(a))}catch(e){return null}}return null}x=Symbol.for("react.module.reference");var E,P,N,T,C,$,F,D=Object.assign,I=0;function A(){}A.__reactDisabledLog=!0;var L,W=h.ReactCurrentDispatcher;function z(e,r,n){if(void 0===L)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);L=t&&t[1]||""}return"\n"+L+e}var U,B=!1,M="function"==typeof WeakMap?WeakMap:Map;function Y(e,r){if(!e||B)return"";var n,t=U.get(e);if(void 0!==t)return t;B=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=W.current,W.current=null,function(){if(0===I){E=console.log,P=console.info,N=console.warn,T=console.error,C=console.group,$=console.groupCollapsed,F=console.groupEnd;var e={configurable:!0,enumerable:!0,value:A,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}I++}();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(e){n=e}Reflect.construct(e,[],i)}else{try{i.call()}catch(e){n=e}e.call(i.prototype)}}else{try{throw Error()}catch(e){n=e}e()}}catch(r){if(r&&n&&"string"==typeof r.stack){for(var c=r.stack.split("\n"),s=n.stack.split("\n"),l=c.length-1,u=s.length-1;l>=1&&u>=0&&c[l]!==s[u];)u--;for(;l>=1&&u>=0;l--,u--)if(c[l]!==s[u]){if(1!==l||1!==u)do{if(l--,--u<0||c[l]!==s[u]){var f="\n"+c[l].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&U.set(e,f),f}}while(l>=1&&u>=0);break}}}finally{B=!1,W.current=o,function(){if(0==--I){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:D({},e,{value:E}),info:D({},e,{value:P}),warn:D({},e,{value:N}),error:D({},e,{value:T}),group:D({},e,{value:C}),groupCollapsed:D({},e,{value:$}),groupEnd:D({},e,{value:F})})}I<0&&b("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",y=p?z(p):"";return"function"==typeof e&&U.set(e,y),y}function V(e,r,n){if(null==e)return"";if("function"==typeof e)return Y(e,!(!(t=e.prototype)||!t.isReactComponent));var t;if("string"==typeof e)return z(e);switch(e){case f:return z("Suspense");case p:return z("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case u:return Y(e.render,!1);case y:return V(e.type,r,n);case d:var o=e,a=o._payload,i=o._init;try{return V(i(a),r,n)}catch(e){}}return""}U=new M;var q=Object.prototype.hasOwnProperty,H={},J=h.ReactDebugCurrentFrame;function X(e){if(e){var r=e._owner,n=V(e.type,e._source,r?r.type:null);J.setExtraStackFrame(n)}else J.setExtraStackFrame(null)}var G=Array.isArray;function K(e){return G(e)}function Q(e){return""+e}function Z(e){if(function(e){try{return Q(e),!1}catch(e){return!0}}(e))return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),Q(e)}var ee,re,ne,te=h.ReactCurrentOwner,oe={key:!0,ref:!0,__self:!0,__source:!0};ne={};var ae=function(e,r,t,o,a,i,c){var s={$$typeof:n,type:e,key:r,ref:t,props:c,_owner:i,_store:{}};return Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(s,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(s,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s};function ie(e,r,n,t,o){var a,i={},c=null,s=null;for(a in void 0!==n&&(Z(n),c=""+n),function(e){if(q.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return void 0!==e.key}(r)&&(Z(r.key),c=""+r.key),function(e){if(q.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return void 0!==e.ref}(r)&&(s=r.ref,function(e,r){if("string"==typeof e.ref&&te.current&&r&&te.current.stateNode!==r){var n=R(te.current.type);ne[n]||(b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',R(te.current.type),e.ref),ne[n]=!0)}}(r,o)),r)q.call(r,a)&&!oe.hasOwnProperty(a)&&(i[a]=r[a]);if(e&&e.defaultProps){var l=e.defaultProps;for(a in l)void 0===i[a]&&(i[a]=l[a])}if(c||s){var u="function"==typeof e?e.displayName||e.name||"Unknown":e;c&&function(e,r){var n=function(){ee||(ee=!0,b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}(i,u),s&&function(e,r){var n=function(){re||(re=!0,b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}(i,u)}return ae(e,c,s,o,t,te.current,i)}var ce,se=h.ReactCurrentOwner,le=h.ReactDebugCurrentFrame;function ue(e){if(e){var r=e._owner,n=V(e.type,e._source,r?r.type:null);le.setExtraStackFrame(n)}else le.setExtraStackFrame(null)}function fe(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}function pe(){if(se.current){var e=R(se.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}ce=!1;var ye={};function de(e,r){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var n=function(e){var r=pe();if(!r){var n="string"==typeof e?e:e.displayName||e.name;n&&(r="\n\nCheck the top-level render call using <"+n+">.")}return r}(r);if(!ye[n]){ye[n]=!0;var t="";e&&e._owner&&e._owner!==se.current&&(t=" It was passed a child from "+R(e._owner.type)+"."),ue(e),b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,t),ue(null)}}}function me(e,r){if("object"==typeof e)if(K(e))for(var n=0;n<e.length;n++){var t=e[n];fe(t)&&de(t,r)}else if(fe(e))e._store&&(e._store.validated=!0);else if(e){var o=function(e){if(null===e||"object"!=typeof e)return null;var r=g&&e[g]||e[v];return"function"==typeof r?r:null}(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)fe(a.value)&&de(a.value,r)}}function ge(e){var r,n=e.type;if(null!=n&&"string"!=typeof n){if("function"==typeof n)r=n.propTypes;else{if("object"!=typeof n||n.$$typeof!==u&&n.$$typeof!==y)return;r=n.propTypes}if(r){var t=R(n);!function(e,r,n,t,o){var a=Function.call.bind(q);for(var i in e)if(a(e,i)){var c=void 0;try{if("function"!=typeof e[i]){var s=Error((t||"React class")+": "+n+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw s.name="Invariant Violation",s}c=e[i](r,i,t,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){c=e}!c||c instanceof Error||(X(o),b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",t||"React class",n,i,typeof c),X(null)),c instanceof Error&&!(c.message in H)&&(H[c.message]=!0,X(o),b("Failed %s type: %s",n,c.message),X(null))}}(r,e.props,"prop",t,e)}else void 0===n.PropTypes||ce||(ce=!0,b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",R(n)||"Unknown"));"function"!=typeof n.getDefaultProps||n.getDefaultProps.isReactClassApproved||b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ve(e,r,t,a,g,v){var h=function(e){return"string"==typeof e||"function"==typeof e||!!(e===o||e===c||S||e===i||e===f||e===p||w||e===m||_||j||k)||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===y||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===x||void 0!==e.getModuleId)}(e);if(!h){var O="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(O+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var E,P=function(e){return void 0!==e?"\n\nCheck your code at "+e.fileName.replace(/^.*[\\\/]/,"")+":"+e.lineNumber+".":""}(g);O+=P||pe(),null===e?E="null":K(e)?E="array":void 0!==e&&e.$$typeof===n?(E="<"+(R(e.type)||"Unknown")+" />",O=" Did you accidentally export a JSX literal instead of a component?"):E=typeof e,b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",E,O)}var N=ie(e,r,t,g,v);if(null==N)return N;if(h){var T=r.children;if(void 0!==T)if(a)if(K(T)){for(var C=0;C<T.length;C++)me(T[C],e);Object.freeze&&Object.freeze(T)}else b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else me(T,e)}return e===o?function(e){for(var r=Object.keys(e.props),n=0;n<r.length;n++){var t=r[n];if("children"!==t&&"key"!==t){ue(e),b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",t),ue(null);break}}null!==e.ref&&(ue(e),b("Invalid attribute `ref` supplied to `React.Fragment`."),ue(null))}(N):ge(N),N}var he=function(e,r,n){return ve(e,r,n,!1)},be=function(e,r,n){return ve(e,r,n,!0)};a.Fragment=o,a.jsx=he,a.jsxs=be}()),a);var i=n.exports;!function(e,r){void 0===r&&(r={});var n=r.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".pagination-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.all-pagination-numbers {\n  display: flex;\n  align-items: center;\n  column-gap: 8px;\n  list-style: none;\n}\n.single-pagination-number {\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 500;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0.5rem;\n  color: #667085;\n}\n.single-pagination-number.active {\n  color: #7f56d9;\n  background: #f9f5ff;\n}\n.skip-pagination-button {\n  color: #667085;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 500;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.pagination-next-pre-button-container {\n  display: flex;\n  align-items: center;\n  column-gap: 12px;\n}\n.pagination-next-pre-button {\n  border: 1px solid #d0d5dd;\n  border-radius: 8px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  padding-left: 14px;\n  padding-right: 14px;\n  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);\n  color: #344054;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n}\n.pagination-next-pre-button.disabled {\n  background: #e6e6e6aa;\n  cursor: not-allowed;\n}\n");var c=function(e){var r=e.handlePageChange,n=e.currentPage,t=e.totalPage,o=e.customStyle,a=function(e){e>t||e<1||r(e)},c=function(e){return i.jsx("li",{onClick:function(){return a(e)},className:"single-pagination-number ".concat(n===e?" active":""),children:i.jsx("p",{children:e})},e)},s=function(e,o){return i.jsx("li",{children:i.jsx("p",{onClick:function(){return function(e,o){if(1===n&&"pre"===e||n===t&&"next"===e)return 0;"pre"===e&&n-o>=1?r(n-o):"next"===e&&n+o<=t&&r(n+o)}(e,o)},className:"skip-pagination-button",children:"..."})})},l=function(e,r){return i.jsx("button",{className:"pagination-next-pre-button ".concat(1===n&&"Previous"===e||n===t&&"Next"===e?"disabled":""),onClick:function(){return r()},children:e})};return i.jsxs("div",{className:"pagination-container ".concat(o||""),children:[i.jsx("ul",{className:"all-pagination-numbers",children:t<7?i.jsx(i.Fragment,{children:Array.apply(0,Array(t)).map((function(e,r){return c(r+1)}))}):n%5>=0&&n>4&&n+2<t?i.jsxs(i.Fragment,{children:[c(1),s("pre",2),c(n-1),c(n),c(n+1),s("next",2),c(t)]}):n%5>=0&&n>4&&n+2>=t?i.jsxs(i.Fragment,{children:[c(1),s("pre",n-(t-5)),Array.from({length:5},(function(e,r){return r+t})).map((function(e,r){return c(r+t-4)}))]}):i.jsxs(i.Fragment,{children:[Array.apply(0,Array(5)).map((function(e,r){return c(r+1)})),s("next",6-n),c(t)]})}),i.jsx("div",{className:" pagination-next-pre-button-container",children:i.jsxs(i.Fragment,{children:[l("Previous",(function(){return a(n-1)})),l("Next",(function(){return a(n+1)}))]})})]})};export{c as Pagination};
//# sourceMappingURL=index.js.map