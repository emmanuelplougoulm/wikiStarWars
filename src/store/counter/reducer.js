import { INCREMENT_COUNTER, DECREMENT_COUNTER, INCREMENT_COUNTER_BY_NUMBER, DECREMENT_COUNTER_BY_NUMBER } from "./actionTypes";

const INITIAL_STATE = {
    counter: 0
};

export default function counter(state = INITIAL_STATE.counter, action) {
    switch (action.type) {
        case INCREMENT_COUNTER: {
            return state + 1;
        }
        case DECREMENT_COUNTER: {
            return state - 1;
        }
        case INCREMENT_COUNTER_BY_NUMBER: {
            return state + action.payload;
        }
        case DECREMENT_COUNTER_BY_NUMBER: {
            return state - action.payload;
        }
        default:
            return state;
    }
}