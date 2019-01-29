import { combineReducers } from "redux";
import { INCREMENT_PAGINATION } from "../actionsTypes/actionsTypes";

const INITIAL_STATE = {
    currentPage: 1,
    toto: 5
};

// MASTER MOREAU VERSION 
function currentPage(state = INITIAL_STATE.currentPage, action) {
    console.log({ action });
    switch (action.type) {
        case INCREMENT_PAGINATION: {
            console.log(action);
            return state + 1;
        }
        default:
            return state;
    }
}

function toto(state = INITIAL_STATE.toto, action) {
    switch (action.type) {
        case INCREMENT_PAGINATION:
            return state + 1;
    }
    return state;
}

const rootReducer = combineReducers({
    currentPage,
    toto
});

export default rootReducer;