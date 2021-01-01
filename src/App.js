import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Pages/Homepage/Homepage';
import ShopPage from './Pages/ShopPage/ShopPage';
import SigninandSignup from './Pages/SignIN&SignUP/SigninandSignup';
import { auth, createUserProfileDocument } from './Firebase';

export default class App extends Component {
	state = { currentUser: null };
	unScribeFromAuth = null;

	componentDidMount() {
		this.unScribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			// createUserProfileDocument(user);
			// this.setState({ currentUser: user });
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					this.setState({ currentUser: { id: snapShot.id, ...snapShot.data() } });
				});
			} else {
				this.setState({ currentUser: userAuth });
			}
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
