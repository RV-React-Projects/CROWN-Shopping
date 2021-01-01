import React, { Component } from 'react';
import { auth, createUserProfileDocument } from '../../Firebase';
import CustomButton from '../Custom-Button/CustomButton';
import FormInput from '../FormInput/FormInput';
import './SignUp.scss';

export default class SignUp extends Component {
	state = { displayName: '', email: '', password: '', confirmPassword: '' };

	handleSubmit = async (event) => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("Password Don't Match");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			createUserProfileDocument(user, { displayName });

			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
		} catch (error) {
			console.error(error);
		}
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};
	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="sign-up">
				<h2 className="title">I don't have a Account</h2>
				<span>Sign Up with Your Email and Password</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						onChange={this.handleChange}
						lable="Display Name"
						required
					/>
					<FormInput
						type="email"
						name="email"
						value={email}
						onChange={this.handleChange}
						lable="Email Address"
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
						lable="Password"
						required
					/>
					<FormInput
						type="confirmPassword"
						name="confirmPassword"
						value={confirmPassword}
						onChange={this.handleChange}
						lable="Confirm Password"
						required
					/>
					<CustomButton type="submit">Sign Up</CustomButton>
				</form>
			</div>
		);
	}
}
