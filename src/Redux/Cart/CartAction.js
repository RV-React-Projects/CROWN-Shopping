import { CartActionTypes } from './CartTypes';

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItemstoCart = (item) => ({
	type: CartActionTypes.ADD_ITEMS,
	payload: item
});

export const clereItemFromCart = (item) => ({
	type: CartActionTypes.CLEAR_ITEM_FROM_CART,
	payload: item
});

export const removeItem = (item) => ({
	type: CartActionTypes.REMOVE_ITEM,
	payload: item
});
