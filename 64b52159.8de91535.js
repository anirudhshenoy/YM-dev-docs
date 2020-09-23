(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,g=u["".concat(l,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(g,i(i({ref:t},p),{},{components:n})):o.a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(0),n(124)),l={id:"app.logger",title:"app.logger"},i={unversionedId:"app.logger",id:"app.logger",isDocsHomePage:!1,title:"app.logger",description:"This object contains log method to log data to console",source:"@site/docs/app-logger.md",slug:"/app.logger",permalink:"/YM-dev-docs/docs/app.logger",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/app-logger.md",version:"current"},c=[{value:"Methods",id:"methods",children:[]},{value:"log",id:"log",children:[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}]}],p={rightToc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This object contains ",Object(a.b)("inlineCode",{parentName:"p"},"log")," method to log data to console"),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("h2",{id:"log"},"log"),Object(a.b)("p",null,"This method logs data to the console (debugging purpose)"),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"app.logger.log(data, tag);\nor\napp.log(data, tag);\n")),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("h4",{id:"data"},"data"),Object(a.b)("p",null,"This is data to be logged to the console. This can be a string, int,\nobject, boolean"),Object(a.b)("h4",{id:"tag--optional"},"tag ","|"," ",Object(a.b)("inlineCode",{parentName:"h4"},"optional")),Object(a.b)("p",null,"This is similar to the key to identify logged data. This is optional,\nthe default value is ",Object(a.b)("inlineCode",{parentName:"p"},"tag")),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'let message = "This is sample log";\napp.log(message, "test log");\n//the log will be\ntest log:  This is sample log\n')),Object(a.b)("hr",null))}s.isMDXComponent=!0}}]);