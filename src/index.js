import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore,applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import reducers from './reducers/index';
import App from './App';
import MovieDescription from './components/MovieDescription';
import * as serviceWorker from './serviceWorker';
const createStoreWithMiddleware=applyMiddleware(ReduxPromise)(createStore);
let store = createStoreWithMiddleware(reducers);
ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
<Switch>
<Route exact={true} path="/" component={App} />
<Route exact={true} path="/movies/:id" component={MovieDescription}/>
</Switch>
</BrowserRouter>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
