import {
  combineModelReducers,
  connectResux,
  Model,
  resuxRootSaga,
} from 'react-resux';
import createSagaMiddleware from 'redux-saga';
import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import logger from 'redux-logger';
import {
  Provider,
  useSelector,
} from 'react-redux';
import * as React from 'react';
import JSONTree from 'react-json-tree';

export const counterModel = new Model({
  namespace: 'counter',
  state: {
    count: 0,
  },
  selectors: {
    count: (state) => state.count,
  },
  reducers: {
    increment(state, _action) {
      state.count += 1;
    },
    decrement(state, _action) {
      state.count -= 1;
    },
  },
});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

const store = createStore(combineReducers({
  ...combineModelReducers([counterModel]),
}), applyMiddleware(...middlewares));

sagaMiddleware.run(() => resuxRootSaga([counterModel]));

function TestComponent({count, counter}) {
  // Only used for displaying entire state
  const allState = useSelector(state => state);

  return (
    <>
      <div>
        <strong>Count:</strong> <span id="counterValue">{count}</span>
      </div>
      <div>
        <button id="incrementButton" onClick={() => counter.increment()}>Increment</button> |{' '}
        <button id="decrementButton" onClick={() => counter.decrement()}>Decrement</button>
      </div>
      <br/>
      <hr/>
      <br/>
      <div>
        <strong>State (Open console to see actions as they are triggered):</strong>
        <JSONTree data={allState} />
      </div>
    </>
  );
}

function mapStateToProps(state, _props, selectors) {
  return {
    count: selectors.counter.count(state),
  };
}

const WrappedTestComponent = connectResux([counterModel], mapStateToProps)(TestComponent);

export default () => {
  return (
    <Provider store={store}>
      <WrappedTestComponent />
    </Provider>
  );
};
