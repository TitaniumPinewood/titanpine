import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router';

import SignUp from './SignUp';
import CreateProfile from './createProfile'
import CreateHouse from './createHouse'
import SearchBar from './SearchBar'

render((
	<Router history={hashHistory}>
		<Route path="/signup" component={ SignUp } />
    	<Route path="/createProfile" component={ CreateProfile } />
    	<Route path="/createHouse" component={ CreateHouse } />
    	<Route path="/searchbar" component={ SearchBar } />
	</Router>
), document.getElementById('app'))
