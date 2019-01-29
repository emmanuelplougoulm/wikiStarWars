import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App from "./containers/App";
import rootReducer from "./store/rootReducer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider
        store={createStoreWithMiddleware(
            rootReducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
    >
        <App />
    </Provider>, document.querySelector('#toto')
);
