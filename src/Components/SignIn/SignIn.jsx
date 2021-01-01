import React, { Component } from 'react';
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../Custom-Button/CustomButton';
import { auth, signInWithGoogle } from '../../Firebase';

export class SignIn extends Component {
	state = {
		email: '',
		password: ''
	};
	handleSubmit = async (event) => {
		event.preventDefault();
		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
		} catch (error) {
			console.log(error);
		}

		this.setState({ email: '', password: '' });
	};

	handleChanges = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};
	render() {
		return (
			<div className="sign-in">
				<h2>I Already Have an Account</h2>
				<span className="title">Sign-In with Your Email And Password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						name="email"
						value={this.state.email}
						onChange={this.handleChanges}
						lable="Email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChanges}
						lable="Password"
						required
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign-in</CustomButton>
						<CustomButton isGoogleSignIn onClick={signInWithGoogle}>
							SIgn-In With Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
