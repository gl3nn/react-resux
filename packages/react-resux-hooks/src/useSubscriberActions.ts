import * as React from 'react';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'redux';
import {bindResuxActionCreators, BoundActionCreatorsMapObject, Subscriber} from 'react-resux';

/**
 * A react hook for returning already bound action creators for the provided subscriber. If you don't want/need
 * to use the hooks api, check [[connectResux]] up.
 *
 * @example
 * const subscriberActions = useSubscriberActions(subscriber);
 *
 * @param subscriber A subscriber instance.
 * @returns An object with already bound action creators. The bound action creators return a promise when invoked,
 *          which can be used to track if the action was properly processed (i.e. resolved) or caused an exception
 *          (i.e. rejected).
 * @category React Hook
 */
export function useSubscriberActions(subscriber: Subscriber): BoundActionCreatorsMapObject {
  const dispatch: Dispatch = useDispatch();
  const actionCreators = React.useMemo(() => subscriber.actionCreators(), [subscriber]);
  return React.useMemo(() => bindResuxActionCreators(actionCreators, dispatch), [subscriber]);
}