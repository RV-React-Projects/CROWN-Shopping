import React from 'react';
import CollectionItems from '../CollectionItems/CollectionItems';
import './PreviewCollection.scss';

function PreviewCollection({ title, items }) {
	return (
		<div className="Preview-Collection">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{items
					.filter((item, index) => index < 4)
					.map((item) => (
						<CollectionItems key={item.id} item={item} />
					))}
			</div>
		</div>
	);
}

export default PreviewCollection;
