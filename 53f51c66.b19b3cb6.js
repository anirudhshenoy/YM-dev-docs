(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{189:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,b=l["".concat(o,".").concat(d)]||l[d]||m[d]||c;return r?a.a.createElement(b,i(i({ref:t},p),{},{components:r})):a.a.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),c=(r(0),r(189)),o={},i={unversionedId:"stringMatch",id:"stringMatch",isDocsHomePage:!1,title:"stringMatch",description:"app.stringMatch returns a percentage match between two strings",source:"@site/docs/stringMatch.md",slug:"/stringMatch",permalink:"/YM-dev-docs/docs/stringMatch",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/stringMatch.md",version:"current",sidebar:"docs",previous:{title:"spellCheck",permalink:"/YM-dev-docs/docs/spellCheck"},next:{title:"triggerIntent",permalink:"/YM-dev-docs/docs/triggerIntent"}},s=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Example Usage",id:"example-usage",children:[]}],p={rightToc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"app.stringMatch returns a percentage match between two strings"),Object(c.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(c.b)("p",null,"string1, string2\n\xe2\u20ac\u2039"),Object(c.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(c.b)("p",null,"Integer between 0 and 1. (0 is minimum and 1 is maxium)\n\xe2\u20ac\u2039"),Object(c.b)("h2",{id:"example-usage"},"Example Usage"),Object(c.b)("p",null,"\xe2\u20ac\u2039"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'app.stringMatch("hello", "hello") // 1 (same strings, hence full match)\napp.stringMatch("hello", "he") // 0.4 (partial match between two strings)\n')))}u.isMDXComponent=!0}}]);