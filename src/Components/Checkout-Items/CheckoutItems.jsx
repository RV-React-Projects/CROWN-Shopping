import React from 'react';
import './CheckoutItems.scss';

function CheckoutItems({ cartItem: { name, imageUrl, quantity, price } }) {
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">{quantity}</span>
			<span className="price">{price}</span>
			<div className="remove-button">&#9940;</div>
		</div>
	);
}

export default CheckoutItems;
