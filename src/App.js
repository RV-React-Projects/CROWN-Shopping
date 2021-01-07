import './App.css';
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Pages/Homepage/Homepage';
import ShopPage from './Pages/ShopPage/ShopPage';
import SigninandSignup from './Pages/SignIN&SignUP/SigninandSignup';
import { auth, createUserProfileDocument } from './Firebase/Firebase';
import { connect } from 'react-redux';
import { SetCurrentUser } from './Redux/User/UserAction';

class App extends Component {
	unScribeFromAuth = null;

	componentDidMount() {
		const { SetCurrentUser } = this.props;
		this.unScribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			// createUserProfileDocument(user);
			// this.setState({ currentUser: user });
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					SetCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					});
				});
			} else {
				SetCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		this.unScribeFromAuth();
	}
	render() {
		return (
			<div>
				<NavBar />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shoping" component={ShopPage} />
					<Route exact path="/signin" render={() => (this.props.currentUser ? <Redirect to="/" /> : <SigninandSignup />)} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = ({ user }) => ({ currentUser: user.currentUser });

const mapDispatchToProps = (dispatch) => ({
	SetCurrentUser: (user) => dispatch(SetCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
