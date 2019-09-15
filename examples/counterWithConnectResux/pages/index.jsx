import {
  combineModelReducers,
  Model,
  resuxRootSaga,
  connectModels,
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
        count: (state) => state.counter.count,
    },
    reducers: {
        increment(state, {}) {
          state.count += 1;
        },
        decrement(state, {}) {
          state.count -= 1;
        },
    },
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
  ...combineModelReducers([counterModel]),
}), applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(() => resuxRootSaga([counterModel]));

function TestComponent({count, counter}) {
  // Only used for displaying entire state
  const allState = useSelector(state => state);

  return (
    <>
      <div>
        <strong>Count:</strong> {count}
      </div>
      <div>
        <button onClick={() => counter.increment()}>Increment</button> |{' '}
        <button onClick={() => counter.decrement()}>Decrement</button>
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

function mapStateToProps(state, props, selectors) {
  return {
    count: selectors.counter.count(state),
  };
}

const WrappedTestComponent = connectModels([counterModel], mapStateToProps)(TestComponent);

export default () => {
  return (
    <Provider store={store}>
      <WrappedTestComponent />
    </Provider>
  );
};