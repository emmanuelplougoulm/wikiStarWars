import { combineReducers } from "redux";
import paginationReducer from "./pagination/reducer/paginationReducer";
import counterReducer from "./counter/reducer/counterReducer";

const rootReducer = combineReducers({
    pagination: paginationReducer,
    counter: counterReducer
});

export default rootReducer;
