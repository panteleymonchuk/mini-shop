import { createStore, applyMiddleware } from 'redux';

// reducers import
import AppReducers from './../features/App/reducers/app';


const configureStore = (initialState) => {
  const store = createStore(AppReducers, initialState);
  return store;
};

export default configureStore;