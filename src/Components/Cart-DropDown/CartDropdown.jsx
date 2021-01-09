import React from 'react';
import CustomButton from '../Custom-Button/CustomButton';
import './CartDropDown.scss';

function CartDropdown() {
	return (
		<div className="cart-dropdown">
			<div className="cart-items" />
			<CustomButton>Go To Checkout</CustomButton>
		</div>
	);
}

export default CartDropdown;
