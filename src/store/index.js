import { createStore, applyMiddleware } from "redux";

import rootReducer from "./models/rootReducers";

const enhancer = applyMiddleware();

const store = createStore(rootReducer, enhancer);

export default store;
