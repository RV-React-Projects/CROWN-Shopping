import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../Redux/Cart/CartAction';
import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from './CartIconSVG.svg';

function CartIcon({ toggleCartHidden }) {
	return (
		<div className="cart-icon" onClick={toggleCartHidden}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
