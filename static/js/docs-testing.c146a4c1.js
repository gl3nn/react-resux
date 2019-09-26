(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./docs/testing.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var s=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),c=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),a={},r="wrapper";function o(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(c.b)(r,Object.assign({},a,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"testing"},"Testing"),Object(c.b)("p",null,"One of the main design decisions of this library, was to keep it easier to test the business logic in your selectors,\nreducers, and effects, in spite of the abstraction. As a matter of fact, we believe it's actually simpler than\ntesting vanilla redux. Given the model below, let's try to test it with ",Object(c.b)("a",Object.assign({parentName:"p"},{href:"https://jestjs.io/"}),"jest"),"."),Object(c.b)("h2",{id:"model"},"Model"),Object(c.b)("h3",{id:"example"},"Example:"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import {Model} from 'react-resux';\nimport _ from 'lodash';\n\nexport const counterModel = new Model({\n    namespace: 'counter',\n    state: {\n        count: 0,\n    },\n    selectors: {\n        count: (state) => state.counter.count,\n    },\n    reducers: {\n        increment(state, {}) {\n          state.count += 1;\n        },\n        decrement(state, {}) {\n          state.count -= 1;\n        },\n        incrementByX(state, {x}) {\n          state.count += x;\n        },\n    },\n    effects: {\n      *asyncIncrement(action, { put }) {\n          // This is not useful in practice, since there's no async behaviour per se, but is defined for\n          // example's sake.\n          yield put({type: \"counter.increment\"});\n      },\n      *asyncDecrement(action, { put }) {\n          // This is not useful in practice, since there's no async behaviour per se, but is defined for\n          // example's sake.\n          yield put({type: \"counter.decrement\"});\n      },\n    },\n});\n")),Object(c.b)("h3",{id:"testing-the-namespace"},"Testing the namespace:"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"it('namespace is set to counter', () => {\n  expect(counterModel.namespace).toEqual('counter');\n});\n")),Object(c.b)("h3",{id:"testing-the-initial-state"},"Testing the initial state:"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"it('namespace is set to counter', () => {\n  expect(counterModel.state).toEqual({\n    count: 0,\n  });\n});\n")),Object(c.b)("h3",{id:"testing-the-reducers"},"Testing the reducers:"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const action = {}; // It's empty, since the reducers don't use the action's data\n\nit('increments reducer change count to current + 1', () => {\n  const state = {...counterModel.state};\n  counterModel.reducers.increment(state, action);\n  expect(state.count).toEqual(1);\n});\n\nit('decrements reducer change count to current - 1', () => {\n  const state = {...counterModel.state};\n  counterModel.reducers.decrement(state, action);\n  expect(state.count).toEqual(-1);\n});\n")),Object(c.b)("h3",{id:"testing-the-effects"},"Testing the effects:"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import * as sagaEffects from 'redux-saga/effects'\n\nconst action = {}; // It's empty, since the effects don't use action's data\nconst actionCreators = counterModel.actionCreators();\n\nit('asyncIncrement effect yields put increment reducer', () => {\n  const gen = counterModel.effects.asyncIncrement(action, sagaEffects);\n  expect(gen.next().value).toEqual(\n    sagaEffects.put(actionCreators.increment())\n  );\n});\n\nit('asyncDecrement effect yields put decrement reducer', () => {\n  const gen = counterModel.effects.asyncDecrement(action, sagaEffects);\n  expect(gen.next().value).toEqual(\n    sagaEffects.put(actionCreators.decrement())\n  );\n});\n")),Object(c.b)("p",null,"In case you are wondering how to test blocking effects, such as the\n",Object(c.b)("a",Object.assign({parentName:"p"},{href:"https://redux-saga.js.org/docs/api/#callfn-args"}),"call")," effect, you can set the value returned by an yield expression\ninside a generator. That's possible by passing an argument to its\n",Object(c.b)("a",Object.assign({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/next"}),"next")," method."),Object(c.b)("h2",{id:"subscriber"},"Subscriber"),Object(c.b)("p",null,"TODO"))}o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/testing.mdx"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-testing.36990c2a959f5e40baab.js.map