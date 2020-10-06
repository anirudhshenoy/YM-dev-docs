(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),c=(n(0),n(189)),o={id:"app.data",title:"app.data",sidebar_label:"app.data"},p={unversionedId:"app.data",id:"app.data",isDocsHomePage:!1,title:"app.data",description:"Object which holds the current user\u2019s typed message, uploaded file or any event triggered in the app.",source:"@site/docs/app-data.md",slug:"/app.data",permalink:"/YM-dev-docs/docs/app.data",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/app-data.md",version:"current",sidebar_label:"app.data",sidebar:"docs",previous:{title:"app.createdUserMessageObject",permalink:"/YM-dev-docs/docs/app.createdUserMessageObject"},next:{title:"app.dataStore",permalink:"/YM-dev-docs/docs/app.dataStore"}},i=[],l={rightToc:i};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Object which holds the current user\u2019s typed message, uploaded file or any event triggered in the app."),Object(c.b)("p",null,"If bot receives user's message, the app.data will be"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n    "message": "hello!"\n}\n')),Object(c.b)("p",null,"If bot receives an image, the app.data will be"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n    "image": "https://cdn.yellowmessenger.com/H79Mp47********.png"\n}\n')),Object(c.b)("p",null,"If bot receives a file, the app.data will be"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n    "file": "https://cdn.yellowmessenger.com/Erz22x********.zip"\n}\n')),Object(c.b)("p",null,"If bot receives an event, the app.data will be"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n    "event": {\n        "code": "event_code",\n        "data": "some_value"\n    }\n}\n')),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Data can be anything that is attached to the event by the source which is triggering the event.")))}s.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,f=u["".concat(o,".").concat(b)]||u[b]||d[b]||c;return n?a.a.createElement(f,p(p({ref:t},l),{},{components:n})):a.a.createElement(f,p({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);