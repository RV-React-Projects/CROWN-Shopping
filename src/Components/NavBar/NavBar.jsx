import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { ReactComponent as CrownSVG } from './crown.svg';
import { auth } from '../../Firebase/Firebase';
import { connect } from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../Cart-DropDown/CartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../Redux/User/UserSelector';
import { selectCartHidden } from '../../Redux/Cart/CartSelector';
function NavBar({ currentUser, hidden }) {
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
				<CartIcon />
			</div>
			{hidden ? null : <CartDropdown />}
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

export default connect(mapStateToProps)(NavBar);
