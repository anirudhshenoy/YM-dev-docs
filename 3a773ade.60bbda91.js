(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=b(n),u=r,d=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return n?a.a.createElement(d,l(l({ref:t},p),{},{components:n})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(124)),c={},l={unversionedId:"app.xmlToJSON",id:"app.xmlToJSON",isDocsHomePage:!1,title:"app.xmlToJSON",description:"This object contains two methods toJson and toXml. These methods are",source:"@site/docs/app.xmlToJSON.md",slug:"/app.xmlToJSON",permalink:"/YM-dev-docs/docs/app.xmlToJSON",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/app.xmlToJSON.md",version:"current"},i=[{value:"Methods",id:"methods",children:[]},{value:"toJson",id:"tojson",children:[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Example",id:"example-2",children:[]}]},{value:"toXml",id:"toxml",children:[{value:"Syntax",id:"syntax-1",children:[]},{value:"Parameters",id:"parameters-1",children:[]},{value:"Return Value",id:"return-value-1",children:[]},{value:"Example",id:"example-5",children:[]}]}],p={rightToc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This object contains two methods ",Object(o.b)("inlineCode",{parentName:"p"},"toJson")," and ",Object(o.b)("inlineCode",{parentName:"p"},"toXml"),". These methods are\nused to convert XML to JSON and vice versa."),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h2",{id:"tojson"},"toJson"),Object(o.b)("p",null,"This is used to convert XML to JSON"),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"app.xmlToJSON.toJson(xml)\n")),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("h4",{id:"xml--string"},"xml ","|"," ",Object(o.b)("inlineCode",{parentName:"h4"},"string")),Object(o.b)("p",null,"An XML string to convert it into JSON"),Object(o.b)("h4",{id:"example"},"example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"})," \n \n   Tove \n   Jani \n   Reminder \n   Don't forget me this weekend! \n \n")),Object(o.b)("h3",{id:"return-value"},"Return Value"),Object(o.b)("p",null,"It returns a JSON string (use ",Object(o.b)("inlineCode",{parentName:"p"},"JSON.parse")," to convert it into JSON\nobject)"),Object(o.b)("h4",{id:"example-1"},"example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'{"note":{"to":"Tove","from":"Jani","heading":"Reminder","body":"Don\'t forget me this weekend!"}}\n')),Object(o.b)("h3",{id:"example-2"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"let xml = ` \n \n   Tove \n   Jani \n   Reminder \n   Don't forget me this weekend! \n `;\n\nlet json = app.xmlToJSON.toJson(xml);\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"toxml"},"toXml"),Object(o.b)("p",null,"This is opposite to ",Object(o.b)("inlineCode",{parentName:"p"},"toJson")," method because it converts JSON to XML"),Object(o.b)("h3",{id:"syntax-1"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"app.xmlToJSON.toXml(json)\n")),Object(o.b)("h3",{id:"parameters-1"},"Parameters"),Object(o.b)("h4",{id:"json--string"},"json ","|"," ",Object(o.b)("inlineCode",{parentName:"h4"},"string")),Object(o.b)("p",null,"A JSON string to convert it into XML"),Object(o.b)("h4",{id:"example-3"},"example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'{"note":{"to":"Tove","from":"Jani","heading":"Reminder","body":"Don\'t forget me this weekend!"}}\n')),Object(o.b)("h3",{id:"return-value-1"},"Return Value"),Object(o.b)("p",null,"It returns an XML string"),Object(o.b)("h4",{id:"example-4"},"example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"  \n")),Object(o.b)("h3",{id:"example-5"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'let json = `{"note":{"to":"Tove","from":"Jani","heading":"Reminder","body":"Don\'t forget me this weekend!"}}`;\nlet xml = app.xmlToJSON.toXml(json);\n')),Object(o.b)("hr",null))}b.isMDXComponent=!0}}]);