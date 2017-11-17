import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducers imports
import AppReducers from 'src/features/App/reducers';
//
// const createLocalStore = compose(
//   persistState(['cachedLS'], {
//     key: ''
//   })
// )(createStore);
//
// const mergedReducers = {
//   ...AppReducers,
// };

// let store = createLocalStore(combineReducers(mergedReducers), {}, composeWithDevTools(applyMiddleware(thunk)));

const store = createStore( () => {}, {});

export default store;
