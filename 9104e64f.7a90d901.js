(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{118:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return l}));var r=a(2),n=a(6),o=(a(0),a(174)),c={},i={unversionedId:"app.dataStore_app.datastore",id:"app.dataStore_app.datastore",isDocsHomePage:!1,title:"app.dataStore_app.datastore",description:"app.dataStore \\| app.datastore",source:"@site/docs/app.dataStore_app.datastore.md",slug:"/app.dataStore_app.datastore",permalink:"/docs/app.dataStore_app.datastore",editUrl:"https://github.com/yellowmessenger/ym-documentation/tree/master/docs/app.dataStore_app.datastore.md",version:"current"},b=[{value:"Insert",id:"insert",children:[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Example",id:"example",children:[]},{value:"Syntax",id:"syntax-1",children:[]},{value:"Parameters",id:"parameters-1",children:[]},{value:"Return Value",id:"return-value-1",children:[]},{value:"Example",id:"example-1",children:[]},{value:"Syntax",id:"syntax-2",children:[]},{value:"Parameters",id:"parameters-2",children:[]},{value:"Return Value",id:"return-value-2",children:[]},{value:"Example",id:"example-2",children:[]}]}],p={rightToc:b};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"appdatastore--appdatastore"},"app.dataStore ","|"," app.datastore"),Object(o.b)("p",null,"This ",Object(o.b)("inlineCode",{parentName:"p"},"app.dataStore")," or ",Object(o.b)("inlineCode",{parentName:"p"},"app.datastore")," object provides methods to\ninsert, search, delete and update MongoDB database. ",Object(o.b)("inlineCode",{parentName:"p"},"search")," method is a\nwrapper over full-text search engine\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.elastic.co/"}),"elasticsearch"),"."),Object(o.b)("h1",{id:"methods"},"Methods"),Object(o.b)("h2",{id:"insert"},"Insert"),Object(o.b)("p",null,"Insert method inserts a given record (document in MongoDB terminology)\ninto the table."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"app.dataStore.insert(document) // document => { table: collection, record: recordObject }\n")),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("h4",{id:"document--object"},"document ","|"," ",Object(o.b)("inlineCode",{parentName:"h4"},"object")),Object(o.b)("h4",{id:"table--string"},"table ","|"," ",Object(o.b)("inlineCode",{parentName:"h4"},"string")),Object(o.b)("p",null,"A string representing the name of the record in the table (collections\nin MongoDB)."),Object(o.b)("h4",{id:"record--object"},"record ","|"," ",Object(o.b)("inlineCode",{parentName:"h4"},"object")),Object(o.b)("p",null,"An object representing the data to be inserted into the table."),Object(o.b)("h3",{id:"return-value"},"Return Value"),Object(o.b)("p",null,"returns a Promise which resolves an ",Object(o.b)("inlineCode",{parentName:"p"},"object")," representing the record\ninformation that is just inserted."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"app.dataStore.insert({ table, record }\n    .then(result => result)\n")),Object(o.b)("hr",null),Object(o.b)("h1",{id:"search"},"Search"),Object(o.b)("p",null,"Search method is a wrapper over ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.elastic.co/"}),"elasticsearch"),"\nwhich is used to query the database (MongoDB)."),Object(o.b)("h3",{id:"syntax-1"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"app.dataStore.search(options)\n")),Object(o.b)("h3",{id:"parameters-1"},"Parameters"),Object(o.b)("h4",{id:"options--object"},"options ","|"," ",Object(o.b)("inlineCode",{parentName:"h4"},"object")),Object(o.b)("h4",{id:"table--string-1"},"table ","|"," ",Object(o.b)("inlineCode",{parentName:"h4"},"string")),Object(o.b)("p",null,"A string representing the name of the record in the table (collections\nin MongoDB)."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"record ","|")," ",Object(o.b)("inlineCode",{parentName:"p"},"object")),Object(o.b)("p",null,"An object representing the elasticsearch search syntax to query the\ndatabase."),Object(o.b)("h3",{id:"return-value-1"},"Return Value"),Object(o.b)("p",null,"returns a Promise which resolves an ",Object(o.b)("inlineCode",{parentName:"p"},"object")," representing the meta of\nsearch result and list of resultant records."),Object(o.b)("h3",{id:"example-1"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'app.dataStore.search({\n        table: table,\n        body: {\n            "query": {\n                "term": {\n                    [column]: query\n                }\n            }\n        }\n    }).then(result => result)\n')),Object(o.b)("hr",null),Object(o.b)("h1",{id:"update"},"Update"),Object(o.b)("p",null,"update method updates the given record (document in MongoDB terminology)\nin the table."),Object(o.b)("h3",{id:"syntax-2"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"app.dataStore.update(options)\n")),Object(o.b)("h3",{id:"parameters-2"},"Parameters"),Object(o.b)("h4",{id:"options--object-1"},"options ","|"," ",Object(o.b)("inlineCode",{parentName:"h4"},"object")),Object(o.b)("h4",{id:"table--string-2"},"table ","|"," ",Object(o.b)("inlineCode",{parentName:"h4"},"string")),Object(o.b)("p",null,"A string representing the name of the record in the table (collections\nin MongoDB)."),Object(o.b)("h4",{id:"record--object-1"},"record ","|"," ",Object(o.b)("inlineCode",{parentName:"h4"},"object")),Object(o.b)("p",null,"An object representing record data to be updated in the table."),Object(o.b)("h3",{id:"return-value-2"},"Return Value"),Object(o.b)("p",null,"returns a Promise which resolves an ",Object(o.b)("inlineCode",{parentName:"p"},"object")," representing the record\ninformation that is just updated."),Object(o.b)("h3",{id:"example-2"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"app.dataStore.update({ table, record })\n        .then(result => result)\n")),Object(o.b)("p",null,"Remember, To update the record in the table, we need to pass ",Object(o.b)("inlineCode",{parentName:"p"},"_id")," of\nthe record ( In MongoDB, Every document has a unique ID). So, to get the\n","_","id of the record, we need to do perform a search on database and grab\nthe ","_","id of the record from the result."))}l.isMDXComponent=!0},174:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),d=l(a),u=r,h=d["".concat(c,".").concat(u)]||d[u]||s[u]||o;return a?n.a.createElement(h,i(i({ref:t},p),{},{components:a})):n.a.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=u;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);