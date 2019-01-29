import { INCREMENT_COUNTER, DECREMENT_COUNTER, INCREMENT_COUNTER_BY_NUMBER, DECREMENT_COUNTER_BY_NUMBER } from '../actionsTypes/actionTypes';

//No need for payload here
export const incrementCounter = () => ({ type: INCREMENT_COUNTER });
export const decrementCounter = () => ({ type: DECREMENT_COUNTER });

export const incrementCounterByNumber = number => ({ type: INCREMENT_COUNTER_BY_NUMBER, payload: number });
export const decrementCounterByNumber = number => ({ type: DECREMENT_COUNTER_BY_NUMBER, payload: number });