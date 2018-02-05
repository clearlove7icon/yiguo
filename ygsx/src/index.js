import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'antd-mobile/dist/antd-mobile.css'; 
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Router,Route,IndexRedirect,hashHistory} from 'react-router'


import Main from './components/main/Main'
import Sort from './components/sort/sort'
import Lunch from './components/lunch/lunch'
import Cart from './components/cart/cart'
import Mine from './components/mine/mine'


let routes = <Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRedirect to="main"/>
        <Route path="main" component={Main}/>
        <Route path="sort" component={Sort}/>
        <Route path="lunch" component={Lunch}/>
        <Route path="cart" component={Cart}/>
        <Route path="mine" component={Mine}/>
    </Route>
</Router>



ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
