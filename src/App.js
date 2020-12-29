import './App.css';
import HomePage from './Pages/Homepage/Homepage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './Pages/ShopPage/ShopPage';
import NavBar from './Components/NavBar/NavBar';

function App() {
	return (
		<div>
			<NavBar />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/hats" component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
