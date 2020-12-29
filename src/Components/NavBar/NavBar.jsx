import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { ReactComponent as CrownSVG } from './crown.svg';
function NavBar() {
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
			</div>
		</div>
	);
}

export default NavBar;
