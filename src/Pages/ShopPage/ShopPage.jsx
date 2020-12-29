import React, { Component } from 'react';
import PreviewCollection from '../../Components/PreviewCollection/PreviewCollection.jsx';
import SHOP_DATA from './ShopData.js';

export class ShopPage extends Component {
	state = { collection: SHOP_DATA };
	render() {
		const { collection } = this.state;
		return (
			<div>{collection.map(({ id, title, items }) => <PreviewCollection key={id} title={title} items={items} />)}</div>
		);
	}
}

export default ShopPage;
