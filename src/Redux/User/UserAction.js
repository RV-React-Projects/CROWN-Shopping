import { UserActionTypes } from './UserTypes';

export const SetCurrentUser = (user) => ({
	type: UserActionTypes.SET_CURRENT_USER,
	payload: user
});
