(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{124:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,i(i({ref:t},p),{},{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},86:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(124)),c={},i={unversionedId:"app.orchestrator",id:"app.orchestrator",isDocsHomePage:!1,title:"app.orchestrator",description:"This object contains methods and objects for the child bots to start,",source:"@site/docs/app.orchestrator.md",slug:"/app.orchestrator",permalink:"/YM-dev-docs/docs/app.orchestrator",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/app.orchestrator.md",version:"current"},l=[{value:"Objects",id:"objects",children:[{value:"options",id:"options",children:[]}]},{value:"Methods",id:"methods",children:[]},{value:"methodName",id:"methodname",children:[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Example",id:"example-1",children:[]}]}],p={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This object contains methods and objects for the child bots to start,\ndelete, clear child bots"),Object(o.b)("h2",{id:"objects"},"Objects"),Object(o.b)("h3",{id:"options"},"options"),Object(o.b)("p",null,"This object contains confidence values"),Object(o.b)("h4",{id:"example"},"example"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'{\n    "options": {\n        "askConfidence": 0.9,\n        "minConfidence": 0.7,\n        "searchedFilterConfidence": 0.6,\n        "secondaryChildBots": []\n    }\n}\n')),Object(o.b)("hr",null),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h2",{id:"methodname"},"methodName"),Object(o.b)("p",null,"description of method"),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"syntax\n")),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("h4",{id:"parametername"},"parameterName"),Object(o.b)("p",null,"about parameter"),Object(o.b)("h4",{id:"parametername--optional"},"parameterName ","|"," ",Object(o.b)("inlineCode",{parentName:"h4"},"optional")),Object(o.b)("p",null,"about parameter"),Object(o.b)("h3",{id:"return-value"},"Return Value"),Object(o.b)("p",null,"explain about the return value"),Object(o.b)("h3",{id:"example-1"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"example code\n")),Object(o.b)("hr",null))}s.isMDXComponent=!0}}]);