import { CartActionTypes } from './CartTypes';

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItemstoCart = (item) => ({
	type: CartActionTypes.ADD_ITEMS,
	payload: item
});
