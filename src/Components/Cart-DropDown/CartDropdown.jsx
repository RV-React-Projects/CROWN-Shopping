import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../Custom-Button/CustomButton';
import './CartDropDown.scss';
import CartItem from '../CartItems/CartItem';
import { selectCartItems } from '../../Redux/Cart/CartSelector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../Redux/Cart/CartAction';

function CartDropdown({ cartItems, history, dispatch }) {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
				) : (
					<span className="empty_message">Your Cart Is Empty</span>
				)}
			</div>
			<CustomButton
				onClick={() => {
					history.push('/checkout');
					dispatch(toggleCartHidden());
				}}
			>
				Go To Checkout
			</CustomButton>
		</div>
	);
}

const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems });

export default withRouter(connect(mapStateToProps)(CartDropdown));
