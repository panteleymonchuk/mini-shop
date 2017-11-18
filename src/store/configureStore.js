import { createStore, combineReducers } from 'redux';

import AppReducer from './../features/App/reducers';
import ProductList from './../features/ProductList/reducers';
import CartList from './../features/CartList/reducers';

const rootReducer = {
  ...AppReducer,
  ...ProductList,
  ...CartList
};

const configureStore = (initialState) => createStore(
  combineReducers(rootReducer),
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore;