import React from 'react';
import { Route } from 'react-router';
import CollectionsOverview from '../../Components/CollectionsOverview/CollectionsOverview.jsx';
import Collection from '../Collection/Collection.js';

const ShopPage = ({ match }) => (
	<div className="shop-page">
		<Route exact path={`${match.path}`} component={CollectionsOverview} />
		<Route path={`${match.path}/:collectionId`} component={Collection} />
	</div>
);

export default ShopPage;
