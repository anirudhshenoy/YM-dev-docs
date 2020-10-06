(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),c=(n(0),n(189)),i={},o={unversionedId:"analytics",id:"analytics",isDocsHomePage:!1,title:"analytics",description:"This analytics object has methods used to increment or store analytics for an event",source:"@site/docs/analytics.md",slug:"/analytics",permalink:"/YM-dev-docs/docs/analytics",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/analytics.md",version:"current",sidebar:"docs",previous:{title:"virusScanningAPI",permalink:"/YM-dev-docs/docs/virusScanningAPI"},next:{title:"axios",permalink:"/YM-dev-docs/docs/axios"}},l=[{value:"Methods",id:"methods",children:[]},{value:"increment",id:"increment",children:[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Example",id:"example",children:[]}]},{value:"incrementV2",id:"incrementv2",children:[{value:"Input Parameters",id:"input-parameters-1",children:[]},{value:"Output Parameters",id:"output-parameters-1",children:[]},{value:"Example",id:"example-1",children:[]}]}],u={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This analytics object has methods used to increment or store analytics for an event\n\u200b"),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"increment"),Object(c.b)("li",{parentName:"ol"},"incrementV2")),Object(c.b)("h2",{id:"increment"},"increment"),Object(c.b)("h3",{id:"input-parameters"},"Input Parameters"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"event"),Object(c.b)("li",{parentName:"ol"},"tags"),Object(c.b)("li",{parentName:"ol"},"value - optional (default = 1)")),Object(c.b)("p",null,"\u200b"),Object(c.b)("h3",{id:"output-parameters"},"Output Parameters"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"No output")),Object(c.b)("h3",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'app.analytics.increment("event-name", {"tag1":"value1"}, 1);\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'app.analytics.increment("technology", { "type": "Power Drive" });\n')),Object(c.b)("h2",{id:"incrementv2"},"incrementV2"),Object(c.b)("h3",{id:"input-parameters-1"},"Input Parameters"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"dataSource"),Object(c.b)("li",{parentName:"ol"},"tags")),Object(c.b)("p",null,"\u200b"),Object(c.b)("h3",{id:"output-parameters-1"},"Output Parameters"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"No output")),Object(c.b)("h3",{id:"example-1"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'app.analytics.incrementV2("data-source", {"tag1":"value1"});\n')))}p.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||b[m]||c;return n?a.a.createElement(d,o(o({ref:t},u),{},{components:n})):a.a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<c;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);