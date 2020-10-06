(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{189:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,m=u["".concat(a,".").concat(b)]||u[b]||d[b]||c;return r?o.a.createElement(m,l(l({ref:t},p),{},{components:r})):o.a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<c;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),c=(r(0),r(189)),a={},l={unversionedId:"knowledge",id:"knowledge",isDocsHomePage:!1,title:"knowledge",description:"This knowledge object has the spellCheck method",source:"@site/docs/knowledge.md",slug:"/knowledge",permalink:"/YM-dev-docs/docs/knowledge",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/knowledge.md",version:"current",sidebar:"docs",previous:{title:"interactionType",permalink:"/YM-dev-docs/docs/interactionType"},next:{title:"maskBotMessage",permalink:"/YM-dev-docs/docs/maskBotMessage"}},i=[{value:"Methods",id:"methods",children:[]},{value:"spellCheck",id:"spellcheck",children:[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Example",id:"example",children:[]}]}],p={rightToc:i};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This knowledge object has the spellCheck method\n\u200b"),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"spellCheck")),Object(c.b)("h2",{id:"spellcheck"},"spellCheck"),Object(c.b)("p",null,"Returns the corrected message after spellcheck\n\u200b"),Object(c.b)("h3",{id:"input-parameters"},"Input Parameters"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"message")),Object(c.b)("p",null,"\u200b"),Object(c.b)("h3",{id:"output-parameters"},"Output Parameters"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"The output of the function is ",Object(c.b)("inlineCode",{parentName:"li"},"corrected message"),"\n\u200b")),Object(c.b)("h3",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"app.knowledge.spellCheck( `Your message to run spell check` ).then((correctedMessage) => {\n  // do operation with correctedMessage\n});\n")))}s.isMDXComponent=!0}}]);