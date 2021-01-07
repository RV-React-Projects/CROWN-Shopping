import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { ReactComponent as CrownSVG } from './crown.svg';
import { auth } from '../../Firebase/Firebase';
import { connect } from 'react-redux';
function NavBar({ currentUser }) {
	return (
		<div className="header">
			<Link className="logo-Container" to="/">
				<CrownSVG className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shoping">
					SHOP
				</Link>
				<Link className="option" to="/contact">
					CONTACT
				</Link>
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to="/signin">
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(NavBar);
