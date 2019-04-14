import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';
import './main.css';

import React from 'react';
import NavBar from './navbar/navbar';
import { Router, Route, Link, browserHistory } from 'react-router';
import Login from '../user/login/login';


export default props => (
  <Router history={browserHistory}> 
    <Route path="/" component={NavBar}></Route>
    <Route path="login" component={Login}/>
  </Router>
)