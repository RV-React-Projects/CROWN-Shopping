import React from 'react';
import { connect } from 'react-redux';
import { addItemstoCart, toggleCartHidden } from '../../Redux/Cart/CartAction';
import CustomButton from '../Custom-Button/CustomButton';
import './CollectionItems.scss';

function CollectionItems({ item, addItemstoCart, dispatch }) {
	const { name, price, imageUrl } = item;
	return (
		<div className="collection-item">
			<div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<CustomButton onClick={() => addItemstoCart(item)} inverted>
				Add To Cart
			</CustomButton>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => ({
	addItemstoCart: (item) => dispatch(addItemstoCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItems);
