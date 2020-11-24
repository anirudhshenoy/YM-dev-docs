(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{112:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(175)),c={},i={unversionedId:"isBotPaused",id:"isBotPaused",isDocsHomePage:!1,title:"isBotPaused",description:"Input Parameters",source:"@site/docs/isBotPaused.md",slug:"/isBotPaused",permalink:"/docs/isBotPaused",editUrl:"https://github.com/yellowmessenger/ym-documentation/docs/isBotPaused.md",version:"current",sidebar:"docs",previous:{title:"triggerJourney",permalink:"/docs/triggerJourney"},next:{title:"extractName",permalink:"/docs/extractName"}},u=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={rightToc:u};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"app.bot : bot id"),Object(o.b)("li",{parentName:"ol"},"app.sender : sender value"),Object(o.b)("li",{parentName:"ol"},"app.source : source/platform")),Object(o.b)("p",null,"\u200b"),Object(o.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'returns a promise, if the bot is in paused state--\x3e returns " {"paused":true} "\n\u200b')),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("p",null,"\u200b"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{})," app.isBotPaused(app.bot, app.sender, app.source)\n                    .then((data)=>console.log(data,`Pause status of the bot ${app.bot}-${app.source} : `))\n                    .catch(E=>console.log(E))\n\n\n")),Object(o.b)("p",null,"\u200b"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This method can be utilised to check if the bot is in pause state. This functionality can be used while pausing an unpausing the bot from connecting\nagent.")))}s.isMDXComponent=!0},175:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(r),d=n,m=l["".concat(c,".").concat(d)]||l[d]||b[d]||o;return r?a.a.createElement(m,i(i({ref:t},p),{},{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);