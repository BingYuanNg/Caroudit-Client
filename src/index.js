import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import {createBrowserHistory} from 'history';

import Login from './js/containers/Login';
import Feed from './js/containers/Feed';

const App = () => {
let browserHistory = createBrowserHistory();
	return (
		<Router history={browserHistory}>
			<Switch>
				<Route exact path="/" component={Login}/>
				<Route exact path="/feed" component={Feed}/>
			</Switch>
		</Router>
	)
}

ReactDOM.render(<App />, document.getElementById('App'));