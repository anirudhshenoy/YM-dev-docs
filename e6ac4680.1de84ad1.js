(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(175)),s={},c={unversionedId:"app.renderMessage",id:"app.renderMessage",isDocsHomePage:!1,title:"app.renderMessage",description:"Refer\xa0[this",source:"@site/docs/app.renderMessage.md",slug:"/app.renderMessage",permalink:"/docs/app.renderMessage",editUrl:"https://github.com/yellowmessenger/ym-documentation/docs/app.renderMessage.md",version:"current",sidebar:"docs",previous:{title:"app.translate",permalink:"/docs/app.translate"},next:{title:"app.phonetics",permalink:"/docs/app.phonetics"}},i=[{value:"Use case",id:"use-case",children:[]},{value:"Format of the function",id:"format-of-the-function",children:[]},{value:"Usage of the function",id:"usage-of-the-function",children:[]}],p={rightToc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Refer\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://yellowmessenger.atlassian.net/wiki/spaces/docs/pages/90275883/Language+Translation"}),"this\nlink"),"\xa0for\nmore info."),Object(o.b)("p",null,"Process to get text message from code."),Object(o.b)("h2",{id:"use-case"},"Use case"),Object(o.b)("p",null,"There are lot of instances in functions where bot needs to send\nresponses through code. To get the text message from these codes we use\nrenderMessage in our function."),Object(o.b)("h2",{id:"format-of-the-function"},"Format of the function"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"app.renderMessage('code-goes-here',{input parameters as object},'default message')\n")),Object(o.b)("p",null,"The first argument is the code that we add in the localization tab.",Object(o.b)("br",{parentName:"p"}),"\n","The second argument deals with the value you want to pass.",Object(o.b)("br",{parentName:"p"}),"\n","The third argument sets a fall back message which gets displayed if it\nis unable to generate the text message."),Object(o.b)("h2",{id:"usage-of-the-function"},"Usage of the function"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'app.sendTexMessage(app.renderMessage("id-number"),{id : id_number},"Here are the details for your login id: {{id_no}}")\n')))}u.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(n),f=r,b=l["".concat(s,".").concat(f)]||l[f]||d[f]||o;return n?a.a.createElement(b,c(c({ref:t},p),{},{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var p=2;p<o;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);