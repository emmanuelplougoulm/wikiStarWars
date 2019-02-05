import { combineReducers } from "redux";
import paginationReducer from "./pagination/reducer";
import counter from "./counter/reducer";
import apiCalls from "./apiCalls/reducer";

const rootReducer = combineReducers({
    // these are two different ways of writing it
    pagination: paginationReducer,
    counter,
    apiCalls
});

export default rootReducer;
