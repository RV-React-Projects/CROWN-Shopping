import React from 'react';
import { connect } from 'react-redux';
import { clereItemFromCart, addItemstoCart, removeItem } from '../../Redux/Cart/CartAction';
import './CheckoutItems.scss';

function CheckoutItems({ cartItem, clearItem, addItem, removeItem }) {
	const { name, imageUrl, quantity, price } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div onClick={() => removeItem(cartItem)} className="arrow">
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div onClick={() => addItem(cartItem)} className="arrow">
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<div onClick={() => clearItem(cartItem)} className="remove-button">
				&#9940;
			</div>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clereItemFromCart(item)),
	addItem: (item) => dispatch(addItemstoCart(item)),
	removeItem: (item) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItems);
