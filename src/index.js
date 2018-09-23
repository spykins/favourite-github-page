import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/createStore'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';


let wrappedApp = (
    <Provider store={store}>
        <App />
    </Provider>
);


ReactDOM.render(wrappedApp, document.getElementById('root'));
registerServiceWorker();
