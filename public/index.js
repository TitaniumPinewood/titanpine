
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router';

import SignUp from './SignUp';
import CreateProfile from './createProfile'
import CreateHouse from './createHouse'
import SearchBar from './SearchBar'
import NavBar from './NavBar'
import MainContain from './MainContain'

render((
	<Router history={hashHistory}>
        <Route path='/' component={ NavBar } />
        <Route component={ MainContain }>
            <Route component={ NavBar }>
    			<Route path="/createProfile" component={ CreateProfile } />
    			<Route path='/signup' component={ SignUp } />
    			<Route path='/createHouse' component={ CreateHouse } />
            </Route>
        </Route>
	</Router>
), document.getElementById('app'))
