---
title: Hooks
id: hooks
---

> WARNING: This requires the react-resux-hooks package to be installed.

React-Resux is a hooks-first library and it provides three distinct hooks as part of its public API. They are:

## useModelSelector
Returns the result of a given a selector, which has the state and perhaps additional arguments as arguments. For
more info see its [API](api/README.md#usemodelselector) reference.

#### Read data example:
```javascript
import {useModelSelector} from 'react-resux-hooks';
import {modelX} from './modelX';

export default function({page}) {
  // We assume here that modelX has a selector defined.
  // Fyi modelXSelectors arg will include all selectors defined on modelX.
  const xData = useModelSelector(modelX, (state, modelXSelectors) => modelXSelectors.dataByPage(page));

  return items.map(
    item => <span key={item.id}>{xData.label}</span>
  );
}
```

## useModelActions

Returns an object with all reducer/effect action creators, defined in the provided model, already bound with
redux's dispatch. For more info see its [API](api/README.md#usemodelactions) reference.

#### Read data example:
```javascript
import {useModelActions} from 'react-resux-hooks';
import {modelX} from './modelX';

export default function({page}) {
  // We assume here that modelX has a reducer called swapValue defined.
  // Fyi modelXActions will contain all reducers/effects defined on modelX.
  const modelXActions = useModelActions(modelX);

  return (<button onClick={modelXActions.swapValue}>Click here to swap value!</button>);
}
```

## useSubscriberActions

Returns an object with all effect action creators, defined in the provided subscriber, already bound with redux's
dispatch. For more info see its [API](api/README.md#usesubscriberactions) reference.

#### Read data example:
```javascript
import {useSubscriberActions} from 'react-resux-hooks';
import {subscriberX} from './modelX';

export default function({page}) {
  // We assume here that modelX has an effect called fetchPageA defined.
  // Fyi subscriberXActions will contain all effects defined on subscriberX.
  const subscriberXActions = useSubscriberActions(subscriberX);

  return (<button onClick={subscriberXActions.fetchPageA}>Click here to fetch page a!</button>)
}
```
