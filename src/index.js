import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
//把设置文件引入
import '@libs'
// import store from './store'
// import './proxy'
ReactDOM.render(
    // <Provider store = {store}>
        
    // </Provider>,
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
