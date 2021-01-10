import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../Custom-Button/CustomButton';
import './CartDropDown.scss';
import CartItem from '../CartItems/CartItem';
import { selectCartItems } from '../../Redux/Cart/CartSelector';

function CartDropdown({ cartItems }) {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">{cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)}</div>
			<CustomButton>Go To Checkout</CustomButton>
		</div>
	);
}

const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });

export default connect(mapStateToProps)(CartDropdown);
