(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{174:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(n),m=r,d=l["".concat(a,".").concat(m)]||l[m]||b[m]||c;return n?o.a.createElement(d,i(i({ref:t},p),{},{components:n})):o.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<c;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),c=(n(0),n(174)),a={},i={unversionedId:"setActionFunction",id:"setActionFunction",isDocsHomePage:!1,title:"setActionFunction",description:"app.setActionFunctions",source:"@site/docs/setActionFunction.md",slug:"/setActionFunction",permalink:"/docs/setActionFunction",editUrl:"https://github.com/yellowmessenger/ym-documentation/tree/master/docs/setActionFunction.md",version:"current",sidebar:"docs",previous:{title:"sendEmailMessage",permalink:"/docs/sendEmailMessage"},next:{title:"regexValidator",permalink:"/docs/regexValidator"}},u=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={rightToc:u};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"appsetactionfunctions"},"app.setActionFunctions"),Object(c.b)("p",null,"Sets the actions object"),Object(c.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("strong",{parentName:"li"},"actionFunctions")," :  Javascript Object")),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"app.setActionFunctions(actionFunctions)\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"it is an ",Object(c.b)("strong",{parentName:"p"},"internal")," function .")))}s.isMDXComponent=!0}}]);