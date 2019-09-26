!function(e){function t(t){for(var r,n,a=t[0],o=t[1],d=t[2],u=t[3]||[],i=0,l=[];i<a.length;i++)n=a[i],Object.prototype.hasOwnProperty.call(R,n)&&R[n]&&l.push(R[n][0]),R[n]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(T&&T(t),j.push.apply(j,u);l.length;)l.shift()();return D.push.apply(D,d||[]),s()}function s(){for(var e,t=0;t<D.length;t++){for(var s=D[t],r=!0,n=1;n<s.length;n++){var a=s[n];0!==R[a]&&(r=!1)}r&&(D.splice(t--,1),e=M(M.s=s[0]))}return 0===D.length&&(j.forEach((function(e){if(void 0===R[e]){R[e]=null;var t=document.createElement("link");t.crossOrigin="anonymous",M.nc&&t.setAttribute("nonce",M.nc),t.rel="prefetch",t.as="script",t.href=_(e),document.head.appendChild(t)}})),j.length=0),e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!k[e])return;for(var s in k[e]=!1,t)Object.prototype.hasOwnProperty.call(t,s)&&(m[s]=t[s]);0===--x&&0===b&&I()}(e,t),r&&r(e,t)};var n,a=!0,o="36990c2a959f5e40baab",d=1e4,u={},i=[],l=[];function c(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,s){if(void 0===e)t._selfAccepted=!0;else if("function"===typeof e)t._selfAccepted=e;else if("object"===typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=s||function(){};else t._acceptedDependencies[e]=s||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"===typeof e)for(var s=0;s<e.length;s++)t._declinedDependencies[e[s]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var s=t._disposeHandlers.indexOf(e);s>=0&&t._disposeHandlers.splice(s,1)},check:P,apply:A,status:function(e){if(!e)return h;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:u[e]};return n=void 0,t}var p=[],h="idle";function f(e){h=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var g,m,v,x=0,b=0,y={},k={},w={};function O(e){return+e+""===e?+e:e}function P(e){if("idle"!==h)throw new Error("check() is only allowed in idle status");return a=e,f("check"),(t=d,t=t||1e4,new Promise((function(e,s){if("undefined"===typeof XMLHttpRequest)return s(new Error("No browser support"));try{var r=new XMLHttpRequest,n=M.p+""+o+".hot-update.json";r.open("GET",n,!0),r.timeout=t,r.send(null)}catch(a){return s(a)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)s(new Error("Manifest request to "+n+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)s(new Error("Manifest request to "+n+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(a){return void s(a)}e(t)}}}))).then((function(e){if(!e)return f("idle"),null;k={},y={},w=e.c,v=e.h,f("prepare");var t=new Promise((function(e,t){g={resolve:e,reject:t}}));for(var s in m={},R)E(s);return"prepare"===h&&0===b&&0===x&&I(),t}));var t}function E(e){w[e]?(k[e]=!0,x++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=M.p+""+e+"."+o+".hot-update.js",t.crossOrigin="anonymous",document.head.appendChild(t)}(e)):y[e]=!0}function I(){f("ready");var e=g;if(g=null,e)if(a)Promise.resolve().then((function(){return A(a)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var s in m)Object.prototype.hasOwnProperty.call(m,s)&&t.push(O(s));e.resolve(t)}}function A(t){if("ready"!==h)throw new Error("apply() is only allowed in ready status");var s,r,n,a,d;function l(e){for(var t=[e],s={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var n=r.pop(),o=n.id,d=n.chain;if((a=S[o])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:o};if(a.hot._main)return{type:"unaccepted",chain:d,moduleId:o};for(var u=0;u<a.parents.length;u++){var i=a.parents[u],l=S[i];if(l){if(l.hot._declinedDependencies[o])return{type:"declined",chain:d.concat([i]),moduleId:o,parentId:i};-1===t.indexOf(i)&&(l.hot._acceptedDependencies[o]?(s[i]||(s[i]=[]),c(s[i],[o])):(delete s[i],t.push(i),r.push({chain:d.concat([i]),id:i})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:s}}function c(e,t){for(var s=0;s<t.length;s++){var r=t[s];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},g=[],x={},b=function(){console.warn("[HMR] unexpected require("+k.moduleId+") to disposed module")};for(var y in m)if(Object.prototype.hasOwnProperty.call(m,y)){var k;d=O(y);var P=!1,E=!1,I=!1,A="";switch((k=m[y]?l(d):{type:"disposed",moduleId:y}).chain&&(A="\nUpdate propagation: "+k.chain.join(" -> ")),k.type){case"self-declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(P=new Error("Aborted because of self decline: "+k.moduleId+A));break;case"declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(P=new Error("Aborted because of declined dependency: "+k.moduleId+" in "+k.parentId+A));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(k),t.ignoreUnaccepted||(P=new Error("Aborted because "+d+" is not accepted"+A));break;case"accepted":t.onAccepted&&t.onAccepted(k),E=!0;break;case"disposed":t.onDisposed&&t.onDisposed(k),I=!0;break;default:throw new Error("Unexception type "+k.type)}if(P)return f("abort"),Promise.reject(P);if(E)for(d in x[d]=m[d],c(g,k.outdatedModules),k.outdatedDependencies)Object.prototype.hasOwnProperty.call(k.outdatedDependencies,d)&&(p[d]||(p[d]=[]),c(p[d],k.outdatedDependencies[d]));I&&(c(g,[k.moduleId]),x[d]=b)}var D,j=[];for(r=0;r<g.length;r++)d=g[r],S[d]&&S[d].hot._selfAccepted&&x[d]!==b&&j.push({module:d,errorHandler:S[d].hot._selfAccepted});f("dispose"),Object.keys(w).forEach((function(e){!1===w[e]&&function(e){delete R[e]}(e)}));for(var _,H,C=g.slice();C.length>0;)if(d=C.pop(),a=S[d]){var q={},T=a.hot._disposeHandlers;for(n=0;n<T.length;n++)(s=T[n])(q);for(u[d]=q,a.hot.active=!1,delete S[d],delete p[d],n=0;n<a.children.length;n++){var G=S[a.children[n]];G&&((D=G.parents.indexOf(d))>=0&&G.parents.splice(D,1))}}for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(a=S[d]))for(H=p[d],n=0;n<H.length;n++)_=H[n],(D=a.children.indexOf(_))>=0&&a.children.splice(D,1);for(d in f("apply"),o=v,x)Object.prototype.hasOwnProperty.call(x,d)&&(e[d]=x[d]);var L=null;for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(a=S[d])){H=p[d];var F=[];for(r=0;r<H.length;r++)if(_=H[r],s=a.hot._acceptedDependencies[_]){if(-1!==F.indexOf(s))continue;F.push(s)}for(r=0;r<F.length;r++){s=F[r];try{s(H)}catch(U){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:d,dependencyId:H[r],error:U}),t.ignoreErrored||L||(L=U)}}}for(r=0;r<j.length;r++){var z=j[r];d=z.module,i=[d];try{M(d)}catch(U){if("function"===typeof z.errorHandler)try{z.errorHandler(U)}catch(J){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:J,originalError:U}),t.ignoreErrored||L||(L=J),L||(L=U)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:d,error:U}),t.ignoreErrored||L||(L=U)}}return L?(f("fail"),Promise.reject(L)):(f("idle"),new Promise((function(e){e(g)})))}var S={},R={1:0},D=[],j=[];function _(e){return M.p+"static/js/"+({2:"docs-api-classes-model",3:"docs-api-classes-subscriber",4:"docs-api-interfaces-modeloptions",5:"docs-api-readme",6:"docs-concepts",7:"docs-development",8:"docs-faq",9:"docs-getting-started",10:"docs-hooks",11:"docs-index",12:"docs-redux",13:"docs-testing"}[e]||e)+"."+{2:"462d37a9",3:"8aed54ed",4:"d4e3af1c",5:"8f94f86d",6:"8beb8a6c",7:"924fbbf9",8:"86b89e9b",9:"f5e5527f",10:"1ba5325c",11:"a24bed11",12:"a5b1475b",13:"c146a4c1"}[e]+".js"}function M(t){if(S[t])return S[t].exports;var s=S[t]={i:t,l:!1,exports:{},hot:c(t),parents:(l=i,i=[],l),children:[]};return e[t].call(s.exports,s,s.exports,function(e){var t=S[e];if(!t)return M;var s=function(s){return t.hot.active?(S[s]?-1===S[s].parents.indexOf(e)&&S[s].parents.push(e):(i=[e],n=s),-1===t.children.indexOf(s)&&t.children.push(s)):(console.warn("[HMR] unexpected require("+s+") from disposed module "+e),i=[]),M(s)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return M[e]},set:function(t){M[e]=t}}};for(var a in M)Object.prototype.hasOwnProperty.call(M,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(s,a,r(a));return s.e=function(e){return"ready"===h&&f("prepare"),b++,M.e(e).then(t,(function(e){throw t(),e}));function t(){b--,"prepare"===h&&(y[e]||E(e),0===b&&0===x&&I())}},s.t=function(e,t){return 1&t&&(e=s(e)),M.t(e,-2&t)},s}(t)),s.l=!0,s.exports}M.e=function(e){var t=[],s=R[e];if(0!==s)if(s)t.push(s[2]);else{var r=new Promise((function(t,r){s=R[e]=[t,r]}));t.push(s[2]=r);var n,a=document.createElement("script");a.charset="utf-8",a.timeout=120,M.nc&&a.setAttribute("nonce",M.nc),a.src=_(e),0!==a.src.indexOf(window.location.origin+"/")&&(a.crossOrigin="anonymous");var o=new Error;n=function(t){a.onerror=a.onload=null,clearTimeout(d);var s=R[e];if(0!==s){if(s){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",o.name="ChunkLoadError",o.type=r,o.request=n,s[1](o)}R[e]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:a})}),12e4);a.onerror=a.onload=n,document.head.appendChild(a)}return Promise.all(t)},M.m=e,M.c=S,M.d=function(e,t,s){M.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},M.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},M.t=function(e,t){if(1&t&&(e=M(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(M.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)M.d(s,r,function(t){return e[t]}.bind(null,r));return s},M.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return M.d(t,"a",t),t},M.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},M.p="/react-resux/",M.oe=function(e){throw console.error(e),e},M.h=function(){return o};var H=window.webpackJsonp=window.webpackJsonp||[],C=H.push.bind(H);H.push=t,H=H.slice();for(var q=0;q<H.length;q++)t(H[q]);var T=C,G=(D.push([0,0]),s());t([[],{},0,[0,2,3,4,5,6,7,8,9,10,11,12,13]])}({"./.docz/app/db.json":function(e){e.exports=JSON.parse('{"config":{"title":"React-Resux","description":"Opinionated, Redux abstraction with built-in immutability, normalization, and selectors support","menu":["Getting Started","Concepts","Hooks","Integrating with Redux/Redux Saga","Testing","Development","API"],"version":"0.3.0","repository":"https://github.com/kayak/react-resux","native":false,"codeSandbox":true,"themeConfig":{"mode":"dark"},"separator":"-","typescript":true,"base":"/react-resux/","ignore":["readme.md","changelog.md","code_of_conduct.md","contributing.md","license.md","docs/headers/*"]},"props":[],"entries":[{"key":"docs/concepts.mdx","value":{"name":"Concepts","route":"/react-resux/concepts","id":"75a82cca9418ac146039aef151eb1886","filepath":"docs/concepts.mdx","link":"https://github.com/kayak/react-resux/edit/master/docs/concepts.mdx","slug":"docs-concepts","menu":"","headings":[{"slug":"model","depth":2,"value":"Model"},{"slug":"example","depth":4,"value":"Example:"},{"slug":"model-options","depth":3,"value":"Model Options"},{"slug":"modelss-api","depth":3,"value":"Models\'s API"},{"slug":"subscriber","depth":2,"value":"Subscriber"},{"slug":"example-1","depth":4,"value":"Example:"},{"slug":"subscribers-api","depth":3,"value":"Subscriber\'s API"}]}},{"key":"docs/development.mdx","value":{"name":"Development","route":"/react-resux/development","id":"daf528bb743f99f962adc42f09612d05","filepath":"docs/development.mdx","link":"https://github.com/kayak/react-resux/edit/master/docs/development.mdx","slug":"docs-development","menu":"","headings":[{"slug":"development","depth":1,"value":"Development"},{"slug":"building","depth":2,"value":"Building"},{"slug":"linting","depth":2,"value":"Linting"},{"slug":"testing","depth":2,"value":"Testing"},{"slug":"documentation","depth":2,"value":"Documentation"},{"slug":"changelog","depth":2,"value":"Changelog"},{"slug":"deploying--publishing","depth":2,"value":"Deploying & Publishing"},{"slug":"license","depth":2,"value":"License"}]}},{"key":"docs/faq.mdx","value":{"name":"FAQ","route":"/react-resux/faq","id":"141f605d6e4faa6ff97a347752eeac4c","filepath":"docs/faq.mdx","link":"https://github.com/kayak/react-resux/edit/master/docs/faq.mdx","slug":"docs-faq","menu":"","headings":[{"slug":"faq","depth":1,"value":"FAQ"},{"slug":"is-using-vanilla-reduxredux-sagas-and-react-resux-together-fine","depth":2,"value":"Is using vanilla redux/redux-sagas and react-resux together fine?"},{"slug":"how-does-this-compare-to-dva","depth":2,"value":"How does this compare to dva?"},{"slug":"are-there-similar-alternatives-to-this-library","depth":2,"value":"Are there similar alternatives to this library?"},{"slug":"i-like-redux-thunks-redux-observable-redux-pack-or-other-async-middleware-is-it-possible-to-use-anything-other-than-redux-saga-for-effects-in-modelssubscribers","depth":2,"value":"I like redux-thunks, redux-observable, redux-pack, or other async middleware. Is it possible to use anything other than redux-saga for effects in models/subscribers?"}]}},{"key":"docs/gettingStarted.mdx","value":{"name":"Getting Started","route":"/react-resux/gettingStarted","id":"eddadf72ea6d3c4f3aff4c60442c21e2","filepath":"docs/gettingStarted.mdx","link":"https://github.com/kayak/react-resux/edit/master/docs/gettingStarted.mdx","slug":"docs-getting-started","menu":"","headings":[{"slug":"getting-started","depth":1,"value":"Getting Started"},{"slug":"tldr","depth":2,"value":"TLDR"},{"slug":"prerequisites","depth":2,"value":"Prerequisites"},{"slug":"do-i-need-to-learn-redux","depth":3,"value":"Do I need to learn redux?"},{"slug":"do-i-need-to-learn-redux-saga","depth":3,"value":"Do I need to learn redux-saga?"},{"slug":"how-to-follow-this-tutorial","depth":2,"value":"How to follow this tutorial"},{"slug":"overview","depth":2,"value":"Overview"},{"slug":"example","depth":4,"value":"Example:"},{"slug":"model-options","depth":3,"value":"Model Options"},{"slug":"modelss-api","depth":3,"value":"Models\'s API"},{"slug":"subscriber","depth":2,"value":"Subscriber"},{"slug":"example-1","depth":4,"value":"Example:"},{"slug":"subscribers-api","depth":3,"value":"Subscriber\'s API"}]}},{"key":"docs/hooks.mdx","value":{"name":"Hooks","route":"/react-resux/hooks","id":"157848edbe2b857079e219bdd1694ee4","filepath":"docs/hooks.mdx","link":"https://github.com/kayak/react-resux/edit/master/docs/hooks.mdx","slug":"docs-hooks","menu":"","headings":[{"slug":"hooks","depth":1,"value":"Hooks"},{"slug":"usemodelselector","depth":2,"value":"useModelSelector"},{"slug":"read-data-example","depth":4,"value":"Read data example:"},{"slug":"usemodelactions","depth":2,"value":"useModelActions"},{"slug":"read-data-example-1","depth":4,"value":"Read data example:"},{"slug":"usesubscriberactions","depth":2,"value":"useSubscriberActions"},{"slug":"read-data-example-2","depth":4,"value":"Read data example:"}]}},{"key":"docs/index.mdx","value":{"name":"Getting Started","route":"/react-resux/","id":"73498ad0e1e62a714b08085d318f9de1","filepath":"docs/index.mdx","link":"https://github.com/kayak/react-resux/edit/master/docs/index.mdx","slug":"docs-index","menu":"","headings":[{"slug":"introduction","depth":1,"value":"Introduction"},{"slug":"benefits","depth":2,"value":"Benefits"},{"slug":"installation","depth":2,"value":"Installation"}]}},{"key":"docs/testing.mdx","value":{"name":"Testing","route":"/react-resux/testing","id":"d97f4871f16abaa0711a61f9c1548fcb","filepath":"docs/testing.mdx","link":"https://github.com/kayak/react-resux/edit/master/docs/testing.mdx","slug":"docs-testing","menu":"","headings":[{"slug":"testing","depth":1,"value":"Testing"},{"slug":"model","depth":2,"value":"Model"},{"slug":"example","depth":3,"value":"Example:"},{"slug":"testing-the-namespace","depth":3,"value":"Testing the namespace:"},{"slug":"testing-the-initial-state","depth":3,"value":"Testing the initial state:"},{"slug":"testing-the-reducers","depth":3,"value":"Testing the reducers:"},{"slug":"testing-the-effects","depth":3,"value":"Testing the effects:"},{"slug":"subscriber","depth":2,"value":"Subscriber"}]}},{"key":"docs/redux.mdx","value":{"name":"Integrating with Redux/Redux Saga","route":"/react-resux/redux-integration","id":"d07964a4a6e4c03b5e4a3d2e5e5b9bb8","filepath":"docs/redux.mdx","link":"https://github.com/kayak/react-resux/edit/master/docs/redux.mdx","slug":"docs-redux","menu":"","headings":[{"slug":"integrating-with-reduxredux-saga","depth":1,"value":"Integrating with Redux/Redux Saga"}]}},{"key":"docs/api/README.md","value":{"name":"Index","menu":"API","route":"/react-resux/README.md","id":"0f72f7af9b98c6cb0c52d489836df1e8","filepath":"docs/api/README.md","link":"https://github.com/kayak/react-resux/edit/master/docs/api/README.md","slug":"docs-api-readme","headings":[{"slug":"react-resux-api-reference-guide","depth":1,"value":"React-Resux API Reference Guide"},{"slug":"react-resux","depth":1,"value":"react-resux"},{"slug":"index","depth":2,"value":"Index"},{"slug":"classes","depth":3,"value":"Classes"},{"slug":"interfaces","depth":3,"value":"Interfaces"},{"slug":"high-order-component-hoc-functions","depth":3,"value":"High Order Component (HOC) Functions"},{"slug":"react-hook-functions","depth":3,"value":"React Hook Functions"},{"slug":"reduxsaga-setup-functions","depth":3,"value":"Redux/Saga Setup Functions"},{"slug":"high-order-component-hoc-functions-1","depth":2,"value":"High Order Component (HOC) Functions"},{"slug":"connectresux","depth":3,"value":"connectResux"},{"slug":"react-hook-functions-1","depth":2,"value":"React Hook Functions"},{"slug":"usemodelactions","depth":3,"value":"useModelActions"},{"slug":"usemodelselector","depth":3,"value":"useModelSelector"},{"slug":"usesubscriberactions","depth":3,"value":"useSubscriberActions"},{"slug":"reduxsaga-setup-functions-1","depth":2,"value":"Redux/Saga Setup Functions"},{"slug":"combinemodelreducers","depth":3,"value":"combineModelReducers"},{"slug":"resuxrootsaga","depth":3,"value":"resuxRootSaga"}]}},{"key":"docs/api/classes/model.md","value":{"name":"Classes - Model","menu":"API","route":"/react-resux/classes/model.md","id":"981a334b83c17e638a18416f398b6c75","filepath":"docs/api/classes/model.md","link":"https://github.com/kayak/react-resux/edit/master/docs/api/classes/model.md","slug":"docs-api-classes-model","headings":[{"slug":"react-resux-api-reference-guide","depth":1,"value":"React-Resux API Reference Guide"},{"slug":"class-model","depth":1,"value":"Class: Model"},{"slug":"hierarchy","depth":2,"value":"Hierarchy"},{"slug":"index","depth":2,"value":"Index"},{"slug":"constructors","depth":3,"value":"Constructors"},{"slug":"accessors","depth":3,"value":"Accessors"},{"slug":"methods","depth":3,"value":"Methods"},{"slug":"constructors-1","depth":2,"value":"Constructors"},{"slug":"constructor","depth":3,"value":"constructor"},{"slug":"accessors-1","depth":2,"value":"Accessors"},{"slug":"effects","depth":3,"value":"effects"},{"slug":"namespace","depth":3,"value":"namespace"},{"slug":"reducers","depth":3,"value":"reducers"},{"slug":"reduxsagas","depth":3,"value":"reduxSagas"},{"slug":"selectors","depth":3,"value":"selectors"},{"slug":"state","depth":3,"value":"state"},{"slug":"methods-1","depth":2,"value":"Methods"},{"slug":"actioncreators","depth":3,"value":"actionCreators"}]}},{"key":"docs/api/classes/subscriber.md","value":{"name":"Classes - Subscriber","menu":"API","route":"/react-resux/classes/subscriber.md","id":"ebdadfe7409c95c57501ade2ddb7181b","filepath":"docs/api/classes/subscriber.md","link":"https://github.com/kayak/react-resux/edit/master/docs/api/classes/subscriber.md","slug":"docs-api-classes-subscriber","headings":[{"slug":"react-resux-api-reference-guide","depth":1,"value":"React-Resux API Reference Guide"},{"slug":"class-subscriber","depth":1,"value":"Class: Subscriber"},{"slug":"hierarchy","depth":2,"value":"Hierarchy"},{"slug":"index","depth":2,"value":"Index"},{"slug":"constructors","depth":3,"value":"Constructors"},{"slug":"properties","depth":3,"value":"Properties"},{"slug":"accessors","depth":3,"value":"Accessors"},{"slug":"methods","depth":3,"value":"Methods"},{"slug":"constructors-1","depth":2,"value":"Constructors"},{"slug":"constructor","depth":3,"value":"constructor"},{"slug":"properties-1","depth":2,"value":"Properties"},{"slug":"effectnames","depth":3,"value":"effectNames"},{"slug":"models","depth":3,"value":"models"},{"slug":"accessors-1","depth":2,"value":"Accessors"},{"slug":"reduxsagas","depth":3,"value":"reduxSagas"},{"slug":"methods-1","depth":2,"value":"Methods"},{"slug":"actioncreators","depth":3,"value":"actionCreators"},{"slug":"takeevery","depth":3,"value":"takeEvery"},{"slug":"takelatest","depth":3,"value":"takeLatest"},{"slug":"takeleading","depth":3,"value":"takeLeading"}]}},{"key":"docs/api/interfaces/modeloptions.md","value":{"name":"Interface - ModelOptions","menu":"API","route":"/react-resux/interfaces/modeloptions.md","id":"714f027523efd02c7d1277a24c4441ea","filepath":"docs/api/interfaces/modeloptions.md","link":"https://github.com/kayak/react-resux/edit/master/docs/api/interfaces/modeloptions.md","slug":"docs-api-interfaces-modeloptions","headings":[{"slug":"react-resux-api-reference-guide","depth":1,"value":"React-Resux API Reference Guide"},{"slug":"interface-modeloptions","depth":1,"value":"Interface: ModelOptions"},{"slug":"hierarchy","depth":2,"value":"Hierarchy"},{"slug":"index","depth":2,"value":"Index"},{"slug":"properties","depth":3,"value":"Properties"},{"slug":"properties-1","depth":2,"value":"Properties"},{"slug":"optional-effects","depth":3,"value":"Optional  effects"},{"slug":"namespace","depth":3,"value":"namespace"},{"slug":"optional-reducers","depth":3,"value":"Optional  reducers"},{"slug":"optional-selectors","depth":3,"value":"Optional  selectors"},{"slug":"state","depth":3,"value":"state"}]}}]}')},"./.docz/app/index.jsx":function(e,t,s){"use strict";s.r(t);var r=s("./node_modules/react/index.js"),n=s.n(r),a=s("./node_modules/react-dom/index.js"),o=s.n(a),d=s("./node_modules/docz/dist/index.esm.js"),u=s("./node_modules/docz-theme-default/dist/index.esm.js"),i={"docs/concepts.mdx":function(){return Promise.all([s.e(0),s.e(6)]).then(s.bind(null,"./docs/concepts.mdx"))},"docs/development.mdx":function(){return Promise.all([s.e(0),s.e(7)]).then(s.bind(null,"./docs/development.mdx"))},"docs/faq.mdx":function(){return Promise.all([s.e(0),s.e(8)]).then(s.bind(null,"./docs/faq.mdx"))},"docs/gettingStarted.mdx":function(){return Promise.all([s.e(0),s.e(9)]).then(s.bind(null,"./docs/gettingStarted.mdx"))},"docs/hooks.mdx":function(){return Promise.all([s.e(0),s.e(10)]).then(s.bind(null,"./docs/hooks.mdx"))},"docs/index.mdx":function(){return Promise.all([s.e(0),s.e(11)]).then(s.bind(null,"./docs/index.mdx"))},"docs/testing.mdx":function(){return Promise.all([s.e(0),s.e(13)]).then(s.bind(null,"./docs/testing.mdx"))},"docs/redux.mdx":function(){return Promise.all([s.e(0),s.e(12)]).then(s.bind(null,"./docs/redux.mdx"))},"docs/api/README.md":function(){return Promise.all([s.e(0),s.e(5)]).then(s.bind(null,"./docs/api/README.md"))},"docs/api/classes/model.md":function(){return Promise.all([s.e(0),s.e(2)]).then(s.bind(null,"./docs/api/classes/model.md"))},"docs/api/classes/subscriber.md":function(){return Promise.all([s.e(0),s.e(3)]).then(s.bind(null,"./docs/api/classes/subscriber.md"))},"docs/api/interfaces/modeloptions.md":function(){return Promise.all([s.e(0),s.e(4)]).then(s.bind(null,"./docs/api/interfaces/modeloptions.md"))}},l=s("./.docz/app/db.json"),c=function(){return n.a.createElement(u.a,{linkComponent:d.b,db:l},n.a.createElement(d.c,{imports:i}))},p=[],h=[],f=function(){return p.forEach((function(e){return e&&e()}))},g=function(){return h.forEach((function(e){return e&&e()}))},m=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;f(),o.a.render(n.a.createElement(e,null),m,g)}(c)},0:function(e,t,s){e.exports=s("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.36990c2a959f5e40baab.js.map