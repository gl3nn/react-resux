(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./docs/gettingStarted.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),r={},s="wrapper";function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(s,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"getting-started"},"Getting Started"),Object(o.b)("p",null,"This tutorial will introduce you to the basics of react-resux by building a counter application, which will\nnot only display the current counter value, but that also provides the means for incrementing/decrementing.\nAdditionaly, the application requires a confirmation step, whenever its user tries to increment/decrement\nthe counter value."),Object(o.b)("h2",{id:"tldr"},"TLDR"),Object(o.b)("p",null,"This tutorial is composed of both the\n",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/kayak/react-resux/tree/master/examples/counterWithConnectResux"}),"counterWithConnectResux")," and\n",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/kayak/react-resux/tree/master/examples/counterWithConnectResuxAndConfirmationDialog"}),"counterWithConnectResuxAndConfirmationDialog"),"\nexamples. In the end, our high order component (",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://reactjs.org/docs/higher-order-components.html"}),"HOC"),") API will be replaced with its hook based equivalent,\nsuch as in ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/kayak/react-resux/tree/master/examples/counterWithHooks"}),"counterWithHooks")," example.\nTo see all examples click ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/kayak/react-resux#demos"}),"here"),"."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"This tutorial assumes that you know the basics of how to use ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://reactjs.org/"}),"react"),". If you don't know what ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://reactjs.org/"}),"react")," is and how to\nuse it, you may wish to read ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://facebook.github.io/react/tutorial/tutorial.html"}),"this tutorial")," first."),Object(o.b)("h3",{id:"do-i-need-to-learn-redux-and-react-redux"},"Do I need to learn redux and react-redux?"),Object(o.b)("p",null,"React-resux is heavily based on ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://redux.js.org/"}),"redux")," and ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://react-redux.js.org/"}),"react-redux"),". A basic understanding of ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://redux.js.org/"}),"redux")," will help you\nbeing familiar with concepts such as reducers, actions, action creators, middlewares, etc, which react-resux\nalso depend upon. Likewise, knowing ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://react-redux.js.org/"}),"react-redux")," will help the connecting of the data with ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://reactjs.org/"}),"react")," components."),Object(o.b)("h3",{id:"do-i-need-to-learn-redux-saga"},"Do I need to learn redux-saga?"),Object(o.b)("p",null,"React-resux uses ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://redux-saga.js.org/"}),"redux-saga")," for asynchronous bits, when implementing asynchronous workflows that would often\ninvolve multiple reducers at different points in time. If you don't know what ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://redux-saga.js.org/"}),"redux-saga")," is and how to\nuse it, you may wish to read ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html"}),"this tutorial"),"\nfirst."),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"React-resux is an opinionated, ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://redux.js.org/"}),"redux")," abstraction with built-in immutability, async and more. If the above sentence\nconfused you, don't worry. We will dive deeper together and explore what it means step by step."),Object(o.b)("h2",{id:"getting-started-1"},"Getting Started"),Object(o.b)("p",null,"When building applications with react-resux, the first exercise that will help you building your application is\nthinking about what is the minimal set of entities. In our example application we will deal with a counter, so we\nneed a counter entity. The counter entity will have a count attribute, in order to track the count number."),Object(o.b)("p",null,"So far our entities and their attributes look like this:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"counter",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"count")))),Object(o.b)("h2",{id:"creating-our-first-model"},"Creating our first model"),Object(o.b)("p",null,"Central to react-resux is the concept of a ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/concepts#model"}),"model"),". The ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/concepts#model"}),"model")," consists of the set of state, selectors, actions,\nreducers and asynchrounous workflows (i.e. effects) that are related to a given entity. In orther words, they\nrepresent the boilerplate around a given reducer plus the async bits handled by some ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://redux.js.org/advanced/middleware"}),"redux middleware"),". This\nmeans that in order to make our application work, we need to describe to react-resux how our ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/concepts#model"}),"model")," looks like."),Object(o.b)("p",null,"To define a ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/concepts#model"}),"model")," for an entity in react-resux is to provide a set of options when instantiating a ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/concepts#model"}),"model")," class.\nEach instanted ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/concepts#model"}),"model")," needs at least its namespace and initial state to be provided. Therefore, the simplest\n",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/concepts#model"}),"model")," we could define would be:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import {Model} from 'react-resux';\n\nexport const countModel = new Model({\n    // Mandatory options\n    namespace: 'counter',\n    state: {\n        count: 0,\n    },\n});\n")),Object(o.b)("p",null,"At this point were not even using this ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/concepts#model"}),"model"),", so let's try to display that count value we defined in the state\noption. Before proceeding with actual UI work, we'd need to hook our ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/concepts#model"}),"model")," to both ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://redux.js.org/"}),"redux")," and our favourite\n",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://redux.js.org/advanced/middleware"}),"redux middleware")," (i.e. ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://redux-saga.js.org/"}),"redux-saga"),") for handling async workflows. The way we can do that is explained in the\n",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/redux-integration"}),"Integrating with Redux/Redux Saga")," section. Assuming you've set everything right, you can now try to see your\nmodels' state in your application redux state, by using something like\n",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd"}),"Redux DevTools"),"."),Object(o.b)("p",null,"For the sake of example, the application state would be somewhat similar to:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),"{\n  counter: {\n    count: 0\n  },\n  // your other reducer's state\n}\n")),Object(o.b)("p",null,"Notice that countModel.state is namespaced with the namespace option provided to the ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/concepts#model"}),"model"),". By now you probably\nrealised that ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/concepts#model"}),"model"),"'s namespaces must be unique. And you'd be totally right to assume that. In fact react-resux\nwill enforce that when calling\n",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://kayak.github.io/react-resux/README.md#combinemodelreducers"}),"combineModelReducers")," function. Enough of\ndigressions though."),Object(o.b)("h2",{id:"getting-to-the-ui"},"Getting to the UI"),Object(o.b)("p",null,"Let's assume a very simple component, that just displays the counter's count. Something on the lines of:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"export function Counter({count}) {\n  return count;\n}\n")),Object(o.b)("p",null,"That doesn't have access to the counter ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/concepts#model"}),"model")," yet, so let's do that. Since react-resux uses ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://redux.js.org/"}),"redux"),", we could just\nuse the ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://react-redux.js.org/api/connect"}),"connect")," high order component (",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://reactjs.org/docs/higher-order-components.html"}),"HOC"),") like:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import {connect} from 'react-redux';\nimport {countModel} from './models';\n\nexport function Counter({count}) {\n  return count;\n}\n\nfunction mapStateToProps(state, props) {\n  return {\n    count: state.counter.count,\n  };\n}\n\nexport default connect(mapStateToProps)(Counter);\n")),Object(o.b)("p",null,"That's all nice and swell, but react-resux actually provide more powerful constructs for connecting your components\nto the redux state. For such we have two options. To use ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://kayak.github.io/react-resux/README.md#connectresux"}),"connectResux")," high order component (",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://reactjs.org/docs/higher-order-components.html"}),"HOC"),") or the equivalent\n",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://reactjs.org/docs/hooks-reference.html"}),"hooks")," API. Later on we will dive into the ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://reactjs.org/docs/hooks-reference.html"}),"hooks")," API, but for now ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://kayak.github.io/react-resux/README.md#connectresux"}),"connectResux")," will do the trick."),Object(o.b)("h2",{id:"reading-data-through-selectors"},"Reading data through selectors"),Object(o.b)("p",null,"As you might have imagined, ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://kayak.github.io/react-resux/README.md#connectresux"}),"connectResux")," is to react-resux, what ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://react-redux.js.org/api/connect"}),"connect")," is to ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://redux.js.org/"}),"redux"),". In other words, it allows\nyour component to dispatch action, for modifying the state, or reading from the state. But before we go about\nusing ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://kayak.github.io/react-resux/README.md#connectresux"}),"connectResux"),", let's add a selector to our ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/concepts#model"}),"model"),", so that we can read data from it."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import {Model} from 'react-resux';\n\nexport const countModel = new Model({\n    // Mandatory options\n    namespace: 'counter',\n    state: {\n        count: 0,\n    },\n    selectors: {\n      count: (namespacedState) => namespacedState.count\n    },\n});\n")),Object(o.b)("p",null,"Now let's change our component to use ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://kayak.github.io/react-resux/README.md#connectresux"}),"connectResux"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import {connectResux} from 'react-resux';\nimport {countModel} from './models';\n\nfunction CountComponent({count}) {\n  return count;\n}\n\nfunction mapStateToProps(state, props, selectors) {\n  return {\n    count: selectors.counter.count(state),\n  };\n}\n\nexport default connectResux([countModel], mapStateToProps)(CountComponent);\n")),Object(o.b)("p",null,"So we can definitely see a few similarities between ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://kayak.github.io/react-resux/README.md#connectresux"}),"connectResux")," and ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://react-redux.js.org/api/connect"}),"connect")," here. Both have an user defined\nmapStateToProps and, as a matter of fact, can also have an user defined mapDispatchToProps function. Notice\nthat the first argument of ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://kayak.github.io/react-resux/README.md#connectresux"}),"connectResux")," is the list of models the component is going to employ. You might have\nalso noticed that the ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://kayak.github.io/react-resux/README.md#connectresux"}),"connectResux"),"'s mapStateToProps also get a third argument. Namely the selectors object,\nwhich contain namespaced references to all the selectors in the ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://kayak.github.io/react-resux/README.md#connectresux"}),"connectResux"),"'s provided models. It's important\nto mention that those selectors are all memoised under the hood, so that more complex selectors don't get\nre-computed when data hasn't actually changed."),Object(o.b)("p",null,"You can also extra arguments to the selectors, perhaps some id you get from the props. For such just pass extra\npositional arguments to the selector call in the mapStateToProps function. Such as in:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"function mapStateToProps(state, props, selectors) {\n  return {\n    count: selectors.counter.count(state, props.someValue),\n  };\n}\n")),Object(o.b)("h2",{id:"modifying-data-through-reducers"},"Modifying data through reducers"),Object(o.b)("p",null,"Given we can now display the counter's count, how about adding two buttons to our UI. One for incrementing and\none for decrementing the count. Before we do any sort of UI work, we need to define those reducers in our ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/concepts#model"}),"model"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import {Model} from 'react-resux';\n\nexport const countModel = new Model({\n    // Mandatory options\n    namespace: 'counter',\n    state: {\n        count: 0,\n    },\n    selectors: {\n      count: (namespacedState) => namespacedState.count\n    },\n    reducers: {\n      increment(state, action) {\n        state.count += 1;\n      },\n      decrement(state, action) {\n        state.count -= 1;\n      },\n      changeCountByX(state, {x}) {\n        state.count += x;\n      },\n    }\n});\n")),Object(o.b)("p",null,"Notice we have declared three different reducers. Those are mostly for example's sake, since changeCountByX alone\nwould suffice. More importantly, is the fact that we are changing the redux state inplace, which might seem a\nterrible practice to some of you. That's not the case since react-resux will enforce immutability via property\naccessors with ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/immerjs/immer"}),"immer"),", so don't ever bother about destructuring/constructing data and/or deep copying values\never again. As a consequence, you can just use shallow comparisons, in order to decide when you need to\nre-render a component."),Object(o.b)("p",null,"Despite that, you might be curious on how actions can trigger the reducers we have just created. That's actually\nquite simple. See a few action examples below:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"{type: 'counter.increment'}"),Object(o.b)("li",{parentName:"ul"},"{type: 'counter.decrement'}"),Object(o.b)("li",{parentName:"ul"},"{type: 'counter.changeCountByX', x: 1}")),Object(o.b)("p",null,"One can rightfully assume here they could dispatch those actions and have the respective ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/concepts#model"}),"model"),"'s reducers triggered.\nIn other words, any action with type as modelNamespace.reducerName, will trigger the reducerName in question.\nUnlike ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://react-redux.js.org/api/connect"}),"connect"),", ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://kayak.github.io/react-resux/README.md#connectresux"}),"connectResux")," won't inject dispatch into connected components. That's because it sets a default\nmapStateToProps, if you havent set any. This default mapDispatchToProps, would have a shape like:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),"{\n  modelANamespace: {\n    modelAReducer1Name: (objectToBeMergedWithAction) => ...\n    modelAEffect1Name: (objectToBeMergedWithAction) => ...\n    // your other reducer and effect's\n  },\n  // your other models\n}\n")),Object(o.b)("p",null,"So like selectors, in mapStateToProps, your default mapDispatchToProps is namespaced by the models' namespace.\nLet's try to change the example with selectors, in other to use the default mapDispatchToProps for modifying our\nredux state via reducers:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import {connectResux} from 'react-resux';\nimport {countModel} from './models';\n\nfunction CountComponent({count, counter}) {\n  return (\n    <div>\n      <div>Count: {count}</div>\n      <div>\n        <button onClick={counter.increment}>Increment</button> | <button onClick={\n          () => {\n            // We could actually use decrement, but used this for showing how to pass parameters to your dispatchers\n            counter.changeCountByX({x: -1});\n          }\n        }>Decrement</button>\n      </div>\n    </div>\n  );\n}\n\nfunction mapStateToProps(state, props, selectors) {\n  return {\n    count: selectors.counter.count(state),\n  };\n}\n\nexport default connectResux([countModel], mapStateToProps)(CountComponent);\n")),Object(o.b)("p",null,"Simple right. We just needed to get the counter prop, since that's the namespace of the counter ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/concepts#model"}),"model")," and voil\xe0.\nBut what about when you want to define a custom mapDispatchToProps, like when you need to mix vanilla ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://redux.js.org/"}),"redux")," with\nreact-resux. Like in react-redux, mapDispatchToProps can be declared in either a function form or a object shortand\nnotation. As a function that would look like:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import {connectResux} from 'react-resux';\nimport {countModel} from './models';\n\nfunction CountComponent({count, increment, decrement}) {\n  return (\n    <div>\n      <div>Count: {count}</div>\n      <div>\n        <button onClick={increment}>Increment</button> | <button onClick={decrement}>Decrement</button>\n      </div>\n    </div>\n  );\n}\n\nfunction mapStateToProps(state, props, selectors) {\n  return {\n    count: selectors.counter.count(state),\n  };\n}\n\nfunction mapDispatchToProps(dispatch, props, actionCreators) {\n  return {\n    increment: () => dispatch(actionCreators.counter.increment()),\n    decrement: () => dispatch(actionCreators.counter.decrement()),\n  };\n}\n\nexport default connectResux([countModel], mapStateToProps, mapDispatchToProps);\n")),Object(o.b)("p",null,"Meanwhile by using the object shorthand notation you could just have:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import {connectResux} from 'react-resux';\nimport {countModel} from './models';\n\nfunction CountComponent({count, increment, decrement}) {\n  return (\n    <div>\n      <div>Count: {count}</div>\n      <div>\n        <button onClick={increment}>Increment</button> | <button onClick={decrement}>Decrement</button>\n      </div>\n    </div>\n  );\n}\n\nfunction mapStateToProps(state, props, selectors) {\n  return {\n    count: selectors.counter.count(state),\n  };\n}\n\nconst mapDispatchToProps = {increment, decrement} = countModel.actionCreators();\n\nexport default connectResux([countModel], mapStateToProps, mapDispatchToProps);\n")),Object(o.b)("p",null,"All that said, you probably noticed that the default mapStateToProps is way easier to implement than both of these\nsolutions, so stick with it unless you have a good reason not to."),Object(o.b)("h2",{id:"having-a-confirmation-dialog"},"Having a confirmation dialog"),Object(o.b)("p",null,"Now we have the basic functionality, we still need a confirmation step via a dialog, whenever users try to\nincrement/decrement the counter value. For such dialog we are going to use the ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://sweetalert2.github.io/"}),"sweetalert2"),", but any would fit."),Object(o.b)("p",null,"Although we could implement that with reducers, effects would better capture the logic and\nallow for easier testability, that's harder when the logic for displaying plus confiming is on the component\nlevel. Effects are essentialy an way to implement asynchronous workflows that are very easy to test. Certainly\na consequence of effects being based on ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://redux-saga.js.org/"}),"redux-saga"),". That said, let's see how our counter ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/concepts#model"}),"model")," should look\nlike with the bespoke effects:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),'import {Model} from \'react-resux\';\nimport Swal from "sweetalert2";\n\n// Fyi async/await functions are just syntax sugar for functions that return a promisse\nasync function showConfirm(options) {\n  const result = await ReactSwal.fire({\n    showCancelButton: true,\n    showConfirmButton: true,\n      ...options\n  });\n  if (result.value !== true) return false;\n  return true;\n}\n\nexport const countModel = new Model({\n    // Mandatory options\n    namespace: \'counter\',\n    state: {\n        count: 0,\n    },\n    selectors: {\n      count: (namespacedState) => namespacedState.count\n    },\n    reducers: {\n      increment(state, action) {\n        state.count += 1;\n      },\n      decrement(state, action) {\n        state.count -= 1;\n      },\n      changeCountByX(state, {x}) {\n        state.count += x;\n      },\n    },\n    effects: {\n      confirmBeforeIncrementing(action, {call, put}, {increment, decrement}) {\n        // Arguments are action, sagaEffects and actionCreators\n        const hasConfirmed = yield sagaEffects.call(showConfirm, {\n          text: "Are you sure you want to increment?"\n        });\n\n        if (hasConfirmed) yield put(increment());\n      },\n      confirmBeforeDecrementing(action, {call, put}, {increment, decrement}) {\n        // Arguments are action, sagaEffects and actionCreators\n        const hasConfirmed = yield sagaEffects.call(showConfirm, {\n          text: "Are you sure you want to decrement?"\n        });\n\n        if (hasConfirmed) yield put(decrement());\n      },\n    }\n});\n')),Object(o.b)("p",null,"As you might have noticed by now, effects are just normal ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://redux-saga.js.org/"}),"redux-saga"),"'s sagas. For our example, a simple\n",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://redux-saga.js.org/docs/api/"}),"call")," and a simple\n",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://redux-saga.js.org/docs/api/#putaction"}),"put")," effect creators, are enough to do the job. How are we\ngoing to use them in the component level, you might be wondering. And actually they're accessed the same way\nas reducers on the component level. So you could just change your component to, assuming the one using a default\nmapDispatchToProps:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import {connectResux} from 'react-resux';\nimport {countModel} from './models';\n\nfunction CountComponent({count, counter}) {\n  return (\n    <div>\n      <div>Count: {count}</div>\n      <div>\n        <button onClick={counter.confirmBeforeIncrementing}>Increment</button> |\n        <button onClick={counter.confirmBeforeDecrementing}>Decrement</button>\n      </div>\n    </div>\n  );\n}\n\nfunction mapStateToProps(state, props, selectors) {\n  return {\n    count: selectors.counter.count(state),\n  };\n}\n\nexport default connectResux([countModel], mapStateToProps)(CountComponent);\n")),Object(o.b)("p",null,"Neat right? That covers basically all the functionality that the ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/concepts#model"}),"model")," class exposes. So now you can go ahead and\nimplement your own."),Object(o.b)("h2",{id:"going-further-using-our-hooks-api"},"Going further: Using our Hooks API"),Object(o.b)("p",null,Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://reactjs.org/docs/hooks-reference.html"}),"Hooks")," are the new sensation in the ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://reactjs.org/"}),"react")," world and rightfully so. In fact, we took them into account since\nthe get go. For such, we expose three ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://reactjs.org/docs/hooks-reference.html"}),"hooks"),", namely ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/README.md#usemodelactions"}),"useModelActions"),", ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/README.md#usesubscriberactions"}),"useSubscriberActions"),", and\n",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/README.md#usemodelselector"}),"useModelSelector"),". So that we could, write the previous examples as:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import {useModelActions, useModelSelector} from 'react-resux';\nimport {countModel} from './models';\n\nexport default function CountComponent({count, counter}) {\n  const {confirmBeforeIncrementing, confirmBeforeDecrementing} = useModelActions(counterModel);\n  const count = useModelSelector(counterModel, (state, selectors) => selectors.count(state));\n\n  return (\n    <div>\n      <div>Count: {count}</div>\n      <div>\n        <button onClick={confirmBeforeIncrementing}>Increment</button> |\n        <button onClick={confirmBeforeDecrementing}>Decrement</button>\n      </div>\n    </div>\n  );\n}\n")),Object(o.b)("p",null,"It does look more compact than previous solutions, so we'd strongly recommend you to use our ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://reactjs.org/docs/hooks-reference.html"}),"hooks")," API instead of\nthe ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://kayak.github.io/react-resux/README.md#connectresux"}),"connectResux")," high order component (",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://reactjs.org/docs/higher-order-components.html"}),"HOC"),")."),Object(o.b)("h2",{id:"next-up"},"Next up"),Object(o.b)("p",null,"In (the still TODO) part 2 of this tutorial, we will discover how to use a ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/concepts#subscriber"}),"subscriber")," to make ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/react-resux/concepts#model"}),"model")," collaborate\nvia a simple interface."))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/gettingStarted.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-getting-started.a8e423490831aef2efdd.js.map