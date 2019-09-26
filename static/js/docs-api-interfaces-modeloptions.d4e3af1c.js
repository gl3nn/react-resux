(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./docs/api/interfaces/modeloptions.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),r={},c="wrapper";function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)(c,Object.assign({},r,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"react-resux-api-reference-guide"},"React-Resux API Reference Guide"),Object(s.b)("p",null,"This reference guide lists all methods exposed by react-resux. Contributions like linguistic improvements, adding\nmore details to the descriptions or additional examples are highly appreciated! Please note that the docs are\ngenerated from source."),Object(s.b)("p",null,Object(s.b)("a",Object.assign({parentName:"p"},{href:"../README.md"}),"react-resux")," \u203a ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"modeloptions.md"}),"ModelOptions")),Object(s.b)("h1",{id:"interface-modeloptions"},"Interface: ModelOptions"),Object(s.b)("p",null,"Model options are used for initialising a ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"../classes/model.md"}),"Model")," instance."),Object(s.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"ModelOptions"))),Object(s.b)("h2",{id:"index"},"Index"),Object(s.b)("h3",{id:"properties"},"Properties"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"modeloptions.md#optional-effects"}),"effects")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"modeloptions.md#namespace"}),"namespace")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"modeloptions.md#optional-reducers"}),"reducers")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"modeloptions.md#optional-selectors"}),"selectors")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"modeloptions.md#state"}),"state"))),Object(s.b)("h2",{id:"properties-1"},"Properties"),Object(s.b)("h3",{id:"optional-effects"},Object(s.b)("inlineCode",{parentName:"h3"},"Optional")," effects"),Object(s.b)("p",null,"\u2022 ",Object(s.b)("strong",{parentName:"p"},"effects"),"? : ",Object(s.b)("em",{parentName:"p"},"EffectMap")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Defined in ",Object(s.b)("a",Object.assign({parentName:"em"},{href:"https://github.com/kayak/kaytum/blob/1a49497/src/model.ts#L146"}),"model.ts:146"))),Object(s.b)("p",null,"Effects are functions used for performing asynchronous state changes. An effect will be triggered whenever\nan action is dispatched, which contains an actionType equal to modelNamespace.effectName. They are wrapped\nby a ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://redux-saga.js.org/docs/api/#takeeverypattern-saga-args"}),"takeEvery")," effect, from redux-saga.\nAn effect function receives an action and an object with redux saga's effects as arguments respectively.\nThe saga effects won't include takeLeading, takeLatest, and takeEvery blocking effects. For using those\nemploy a Subscriber instead."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"example")),"\n*fetchPostsByUser({ userId }, sagaEffects, actionCreators) {\ntry {\nconst data = yield sagaEffects.call(fetchApi, ",Object(s.b)("inlineCode",{parentName:"p"},"http://jsonplaceholder.typicode.com/posts/?user=${userId}"),");\nyield sagaEffects.put(actionCreators.saveUser({data, userId}));\n} catch (error) {\nconsole.log(error)\n}\n},"),Object(s.b)("hr",null),Object(s.b)("h3",{id:"namespace"},"namespace"),Object(s.b)("p",null,"\u2022 ",Object(s.b)("strong",{parentName:"p"},"namespace"),": ",Object(s.b)("em",{parentName:"p"},"string")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Defined in ",Object(s.b)("a",Object.assign({parentName:"em"},{href:"https://github.com/kayak/kaytum/blob/1a49497/src/model.ts#L80"}),"model.ts:80"))),Object(s.b)("p",null,"The namespace of a model will prefix all its reducers and effects' action types. This value must be unique\nand, as a matter of fact, resux will enforce it."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"example"))," namespace: 'pageA'"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"example"))," namespace: 'pageB'"),Object(s.b)("hr",null),Object(s.b)("h3",{id:"optional-reducers"},Object(s.b)("inlineCode",{parentName:"h3"},"Optional")," reducers"),Object(s.b)("p",null,"\u2022 ",Object(s.b)("strong",{parentName:"p"},"reducers"),"? : ",Object(s.b)("em",{parentName:"p"},"ReducerMap")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Defined in ",Object(s.b)("a",Object.assign({parentName:"em"},{href:"https://github.com/kayak/kaytum/blob/1a49497/src/model.ts#L127"}),"model.ts:127"))),Object(s.b)("p",null,"Reducers are functions used for synchronously changing the current state of a given model. A reducer will\nbe triggered whenever an action is dispatched, which contains a type equal to modelNamespace.reducerName.\nA reducer function receives the entire state and the action as arguments respectively. It shouldn't return\ndata, like vanilla reducers. Instead it should change the state argument in place. Resux uses\n",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/immerjs/immer"}),"immer")," under the hood, which means that the state is made immutable\nby tracking property access."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"example")),"\nincrement(state, action) {\nstate.count += 1;\n}"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"example")),"\ndecrement: (state, action) => {\nstate.count -= 1;\n}"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"example")),"\nsaveData(state, { data, userId }) {\nstate.isLoading","[userId]"," = false;\nstate.data","[userId]"," = data;\n}"),Object(s.b)("hr",null),Object(s.b)("h3",{id:"optional-selectors"},Object(s.b)("inlineCode",{parentName:"h3"},"Optional")," selectors"),Object(s.b)("p",null,"\u2022 ",Object(s.b)("strong",{parentName:"p"},"selectors"),"? : ",Object(s.b)("em",{parentName:"p"},"SelectorMap")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Defined in ",Object(s.b)("a",Object.assign({parentName:"em"},{href:"https://github.com/kayak/kaytum/blob/1a49497/src/model.ts#L104"}),"model.ts:104"))),Object(s.b)("p",null,"Selectors are functions that receive the entire state and returns a piece of it or, perhaps transform it.\nSelectors will memoize the returned data, in order to avoid any re-renders caused by shallow\ncomparing its variables. The first argument of a selector function is the namespaced state, following\nby any other positional arguments passed in an eventual call within a mapStateToProps. Last but not least,\nthe last argument is the entire redux state."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"example"))," count: (state) => state,"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"example"))," userIds: (state, allState) => allState.modelNamespace.data.map(user => user.id),"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"example"))," user: (state, userId) => state.data","[userId]",","),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"example"))," isLoading: (state, userId, allState) => allState.modelNamespace.isLoading","[userId]",","),Object(s.b)("hr",null),Object(s.b)("h3",{id:"state"},"state"),Object(s.b)("p",null,"\u2022 ",Object(s.b)("strong",{parentName:"p"},"state"),": ",Object(s.b)("em",{parentName:"p"},"State")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Defined in ",Object(s.b)("a",Object.assign({parentName:"em"},{href:"https://github.com/kayak/kaytum/blob/1a49497/src/model.ts#L91"}),"model.ts:91"))),Object(s.b)("p",null,"State represents the initial state of the model's reducer."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"example"))," state: 0"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"example"))," state: []"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"example"))," state: {\nisLoading: {},\ndata: {},\n}"))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/api/interfaces/modeloptions.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-api-interfaces-modeloptions.36990c2a959f5e40baab.js.map