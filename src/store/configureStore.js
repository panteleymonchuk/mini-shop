import { createStore } from 'redux';

// reducers import
import app from './../features/App/reducers/app';


// const configureStore = createStore( () => {}, {});

const configureStore = (initialState) => {
  return createStore(app, initialState);
};

export default configureStore;