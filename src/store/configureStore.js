import { createStore, combineReducers } from 'redux';

import AppReducer from './../features/App/reducers';
import ProductList from './../features/ProductList/reducers';

const rootReducer = {
  ...AppReducer,
  ...ProductList
};

const configureStore = (initialState) => createStore(
  combineReducers(rootReducer),
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore;