import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../Redux/Shop/ShopSelector';
import PreviewCollection from '../PreviewCollection/PreviewCollection';
import './CollectionsOverview.scss';

function CollectionsOverview({ collections }) {
	return (
		<div className="collections-overview">
			{collections.map(({ id, title, items }) => <PreviewCollection key={id} title={title} items={items} />)}
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview
});
export default connect(mapStateToProps)(CollectionsOverview);
