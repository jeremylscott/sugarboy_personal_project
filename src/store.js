import {createStore,applyMiddleware,compose} from "redux";
import promiseMiddleware from "redux-promise-middleware";
import reducer from './ducks/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
    composeEnhancers(applyMiddleware(promiseMiddleware()))     //// for future uses, dont invoke promiseMiddleware!!!!!!!
);

export default store