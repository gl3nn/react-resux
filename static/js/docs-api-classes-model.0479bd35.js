(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./docs/api/classes/model.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),b=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),c={},r="wrapper";function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)(r,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"react-resux-api-reference-guide"},"React-Resux API Reference Guide"),Object(b.b)("p",null,"This reference guide lists all methods exposed by react-resux. Contributions like linguistic improvements, adding\nmore details to the descriptions or additional examples are highly appreciated! Please note that the docs are\ngenerated from source."),Object(b.b)("p",null,Object(b.b)("a",Object.assign({parentName:"p"},{href:"../README.md"}),"react-resux")," \u203a ",Object(b.b)("a",Object.assign({parentName:"p"},{href:"model.md"}),"Model")),Object(b.b)("h1",{id:"class-model"},"Class: Model"),Object(b.b)("p",null,"Models are the most basic data structure/abstraction in this library. They require a set of options to be\nprovided when initializing them. The model will be used to generate the action types, actions, reducers,\ndispatchers, and sagas, based on the model's options that were provided."),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Model"))),Object(b.b)("h2",{id:"index"},"Index"),Object(b.b)("h3",{id:"constructors"},"Constructors"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object.assign({parentName:"li"},{href:"model.md#constructor"}),"constructor"))),Object(b.b)("h3",{id:"accessors"},"Accessors"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object.assign({parentName:"li"},{href:"model.md#effects"}),"effects")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object.assign({parentName:"li"},{href:"model.md#namespace"}),"namespace")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object.assign({parentName:"li"},{href:"model.md#reducers"}),"reducers")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object.assign({parentName:"li"},{href:"model.md#reduxsagas"}),"reduxSagas")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object.assign({parentName:"li"},{href:"model.md#selectors"}),"selectors")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object.assign({parentName:"li"},{href:"model.md#state"}),"state"))),Object(b.b)("h3",{id:"methods"},"Methods"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object.assign({parentName:"li"},{href:"model.md#actioncreators"}),"actionCreators"))),Object(b.b)("h2",{id:"constructors-1"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new Model"),"(",Object(b.b)("inlineCode",{parentName:"p"},"options"),": ",Object(b.b)("a",Object.assign({parentName:"p"},{href:"../interfaces/modeloptions.md"}),"ModelOptions"),"): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object.assign({parentName:"em"},{href:"model.md"}),"Model"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object.assign({parentName:"em"},{href:"https://github.com/kayak/kaytum/blob/44826ea/src/model.ts#L161"}),"model.ts:161"))),Object(b.b)("p",null,"Creates a model instance."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"example")),"\nconst counterModel = new Model({\nnamespace: 'counter',\nstate: {\ncount: 0,\n},\nselectors: {\ncount: (state) => state.count,\n},\nreducers: {\nincrement(state, action) {\nstate.count += 1;\n},\ndecrement(state, action) {\nstate.count -= 1;\n},\n},\n// effects: {...}\n});"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"throws"))," {NamespaceIsntAStringError} When namespace isn't a string."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"throws"))," {EmptyNamespaceError} When namespace is an empty string."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"throws"))," {DuplicatedActionTypesError} When reducer and/or effect action types are duplicated."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(b.b)("a",Object.assign({parentName:"td"},{href:"../interfaces/modeloptions.md"}),"ModelOptions")),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"A model's options.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object.assign({parentName:"em"},{href:"model.md"}),"Model"))),Object(b.b)("h2",{id:"accessors-1"},"Accessors"),Object(b.b)("h3",{id:"effects"},"effects"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"get effects"),"(): ",Object(b.b)("em",{parentName:"p"},"EffectMap")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object.assign({parentName:"em"},{href:"https://github.com/kayak/kaytum/blob/44826ea/src/model.ts#L376"}),"model.ts:376"))),Object(b.b)("p",null,"Returns the effects."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"EffectMap")),Object(b.b)("p",null,"An effect map."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"namespace"},"namespace"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"get namespace"),"(): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object.assign({parentName:"em"},{href:"https://github.com/kayak/kaytum/blob/44826ea/src/model.ts#L340"}),"model.ts:340"))),Object(b.b)("p",null,"Returns the namespace."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"A string."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"reducers"},"reducers"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"get reducers"),"(): ",Object(b.b)("em",{parentName:"p"},"ReducerMap")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object.assign({parentName:"em"},{href:"https://github.com/kayak/kaytum/blob/44826ea/src/model.ts#L367"}),"model.ts:367"))),Object(b.b)("p",null,"Returns the reducers."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"ReducerMap")),Object(b.b)("p",null,"A reducer function."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"reduxsagas"},"reduxSagas"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"get reduxSagas"),"(): ",Object(b.b)("em",{parentName:"p"},"Saga[]")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object.assign({parentName:"em"},{href:"https://github.com/kayak/kaytum/blob/44826ea/src/model.ts#L322"}),"model.ts:322"))),Object(b.b)("p",null,"Returns an array of sagas, one for each of the declared effects. They will default to taking every action and\ncalling its respective effect. For taking only latest or leading actions, at any given moment, look for\nsubscribers instead."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Saga[]")),Object(b.b)("p",null,"An array of sagas."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"selectors"},"selectors"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"get selectors"),"(): ",Object(b.b)("em",{parentName:"p"},"SelectorMap")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object.assign({parentName:"em"},{href:"https://github.com/kayak/kaytum/blob/44826ea/src/model.ts#L358"}),"model.ts:358"))),Object(b.b)("p",null,"Returns the selectors."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"SelectorMap")),Object(b.b)("p",null,"A selectors map."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"state"},"state"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"get state"),"(): ",Object(b.b)("em",{parentName:"p"},"State")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object.assign({parentName:"em"},{href:"https://github.com/kayak/kaytum/blob/44826ea/src/model.ts#L349"}),"model.ts:349"))),Object(b.b)("p",null,"Returns the initial state."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"State")),Object(b.b)("p",null,"An initial state."),Object(b.b)("h2",{id:"methods-1"},"Methods"),Object(b.b)("h3",{id:"actioncreators"},"actionCreators"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"actionCreators"),"(): ",Object(b.b)("em",{parentName:"p"},"ActionCreatorsMapObject")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object.assign({parentName:"em"},{href:"https://github.com/kayak/kaytum/blob/44826ea/src/model.ts#L256"}),"model.ts:256"))),Object(b.b)("p",null,"Returns an object with action creators, one for each of the declared reducers and effects. Only useful for\ntesting purposes, read the docs section on testing for more info. Also supports the inner workings of this\nclass."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"ActionCreatorsMapObject")),Object(b.b)("p",null,"an action creator's map object."))}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/api/classes/model.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-api-classes-model.a8e423490831aef2efdd.js.map