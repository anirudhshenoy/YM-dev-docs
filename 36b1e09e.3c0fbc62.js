(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{189:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),g=r,b=p["".concat(i,".").concat(g)]||p[g]||d[g]||o;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(189)),i={},c={unversionedId:"setTargetLanguage",id:"setTargetLanguage",isDocsHomePage:!1,title:"setTargetLanguage",description:"app.setTargetLanguage() sets the default language the should respond with.",source:"@site/docs/setTargetLanguage.md",slug:"/setTargetLanguage",permalink:"/YM-dev-docs/docs/setTargetLanguage",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/setTargetLanguage.md",version:"current",sidebar:"docs",previous:{title:"setStep",permalink:"/YM-dev-docs/docs/setStep"},next:{title:"shouldEndSession",permalink:"/YM-dev-docs/docs/shouldEndSession"}},u=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Example Usage",id:"example-usage",children:[]},{value:"Note:",id:"note",children:[]},{value:"Note:",id:"note-1",children:[]}],s={rightToc:u};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"app.setTargetLanguage() sets the default language the should respond with."),Object(o.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(o.b)("p",null,"A two letter ISO 639-1 code representing the langauge (eg: 'fr' for French)\n\xe2\u20ac\u2039"),Object(o.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(o.b)("p",null,"None\n\xe2\u20ac\u2039"),Object(o.b)("h2",{id:"example-usage"},"Example Usage"),Object(o.b)("p",null,"\xe2\u20ac\u2039"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'app.setTargetLanguage("fr");\n')),Object(o.b)("h2",{id:"note"},"Note:"),Object(o.b)("p",null,"This function cannot be used directly. The bot needs to be configured to respond in multiple languages (English being the default language).\nTo do this, head to the general settings of the bot (Configuration > General). Scroll down to 'Additional Languages', and add the langauges you wish to add. "),Object(o.b)("p",null,"After this, in app.start(), add ",Object(o.b)("inlineCode",{parentName:"p"},"i18: true")," in the bot options object. Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"app.start({i18: true});\n")),Object(o.b)("p",null,"Once this is done, the above function will work."),Object(o.b)("h2",{id:"note-1"},"Note:"),Object(o.b)("p",null,"For a detailed list on all the codes for the langauges supported by our platform, please refer to: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"}),"List of ISO 639-1 codes")))}l.isMDXComponent=!0}}]);