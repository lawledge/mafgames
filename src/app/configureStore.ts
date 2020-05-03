import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";

import { persistedReducer } from "./rootReducer";
import rootSaga from "./rootSaga";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]) ||
  compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducer,
  {},
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

const persistor = persistStore(store);

const configureStore = () => {
  sagaMiddleware.run(rootSaga);
  return store;
};

export { configureStore, persistor };
