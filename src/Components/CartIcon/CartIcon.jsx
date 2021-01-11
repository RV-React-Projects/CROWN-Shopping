import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../Redux/Cart/CartAction';
import { selectCartItemsCount } from '../../Redux/Cart/CartSelector';
import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from './CartIconSVG.svg';

function CartIcon({ toggleCartHidden, itemCount }) {
	return (
		<div className="cart-icon" onClick={toggleCartHidden}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{itemCount}</span>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector ({
	itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
