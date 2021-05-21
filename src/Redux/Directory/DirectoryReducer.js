import DIRECTORY_DATA from './DirectoryData';

const INITIAL_STATE = {
	sections: DIRECTORY_DATA
};

const DirectoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default DirectoryReducer;
