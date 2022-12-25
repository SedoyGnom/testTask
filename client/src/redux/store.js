import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers/rootReducer";
import createSagaMiddleware from 'redux-saga'
import sagaWatcher from "./sagas/sagas";

const saga = createSagaMiddleware()

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)))

saga.run(sagaWatcher)
