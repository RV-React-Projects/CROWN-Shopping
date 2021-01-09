import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../Custom-Button/CustomButton';
import './CartDropDown.scss';
import CartItem from '../CartItems/CartItem';

function CartDropdown({ cartItems }) {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">{cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)}</div>
			<CustomButton>Go To Checkout</CustomButton>
		</div>
	);
}

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });

export default connect(mapStateToProps)(CartDropdown);