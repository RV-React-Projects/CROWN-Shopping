import './App.css';
import HomePage from './Pages/Homepage/Homepage';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './Pages/ShopPage/ShopPage';
import NavBar from './Components/NavBar/NavBar';
import SigninandSignup from './Pages/SignIN&SignUP/SigninandSignup';
import { auth } from './Firebase';

export default class App extends Component {
	state = { currentUser: null };
	unScribeFromAuth = null;

	componentDidMount() {
		this.unScribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });
			console.log(user);
		});
	}

	componentWillUnmount() {
		this.unScribeFromAuth();
	}
	render() {
		return (
			<div>
				<NavBar currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/hats" component={ShopPage} />
					<Route exact path="/signin" component={SigninandSignup} />
				</Switch>
			</div>
		);
	}
}
