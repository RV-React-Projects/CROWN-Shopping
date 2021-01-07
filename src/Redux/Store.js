import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './RootReducer';

const middleware = [ logger ];

const Store = createStore(rootReducer, applyMiddleware(...middleware));

export default Store;
