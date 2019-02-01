import { combineReducers } from "redux";
import { INCREMENT_PAGINATION, DECREMENT_PAGINATION } from "./actionsTypes";

const INITIAL_STATE = {
    currentPage: 1,
};

function currentPage(state = INITIAL_STATE.currentPage, action) {
    switch (action.type) {
        case INCREMENT_PAGINATION: {
            return state + 1;
        }
        case DECREMENT_PAGINATION: {
            return state - 1;
        }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    currentPage
});

export default rootReducer;