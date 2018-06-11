import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import {createBrowserHistory} from 'history';
import dotenv from 'dotenv'


import Home from './js/containers/Home';

const App = () => {
let browserHistory = createBrowserHistory();
	return (
		<Router history={browserHistory}>
			<Switch>
				<Route exact path="/" component={Home}/>
			</Switch>
		</Router>
	)
}

ReactDOM.render(<App />, document.getElementById('App'));