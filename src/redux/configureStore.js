import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import monitorReducerEnhancer from "./enhancers/monitorReducer";
import loggerMiddleware from "./middleware/logger";
import rootReducer from "./reducers";

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewaresEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewaresEnhancer, monitorReducerEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  // if (process.env.NOTE_ENV !== "production" && module.hot) {
  //   module.hot.accept("./reducers/reducers", () =>
  //     store.replaceReducer(rootReducer)
  //   );
  // }

  return store;
}
