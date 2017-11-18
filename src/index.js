import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux';


import configureStore from './store/configureStore'

import './index.css';
import App from './features/App/components/App';
import registerServiceWorker from './registerServiceWorker';

const Store = createStore( () => {}, {});

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
