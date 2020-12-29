import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { ReactComponent as CrownSVG } from './crown.svg';
import { auth } from '../../Firebase';
function NavBar({ currentUser }) {
	return (
		<div className="header">
			<Link className="logo-Container" to="/">
				<CrownSVG className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
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

export default NavBar;
