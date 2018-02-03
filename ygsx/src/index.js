import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import App from './App';
import Details from './components/detalis/Details.js';//详情页
import MyCart from './components/detalis/MyCart.js';//购物车页
import Main from './components/main/main.js';//首页

import { Router, Route, IndexRedirect, hashHistory, Redirect } from 'react-router'

import registerServiceWorker from './registerServiceWorker';

//react-redux
import { Provider } from 'react-redux';
import store from './redux/store'

let routes = <Provider store={store}>
	<Router history={ hashHistory }>
		<Route path="/" component={ App }>
			<IndexRedirect to="home" />
			<Route path="home" component={ Main } />
			<Route path="details" component={ Details } />
			<Route path="mycart" component={ MyCart } />
			<Redirect from="*" to="home" />
		</Route>
	</Router>
</Provider>
ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
