import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import todoApp from './reducers';

import App from './features/App/components/App';

// import app from './../features/App/reducers/app';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

// import configureStore from './store/configureStore';

// let store = createStore(todoApp);
const store = createStore(() => {}, {});


// const initState = {
//   test: 1
// };

// const Store = configureStore(initState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
