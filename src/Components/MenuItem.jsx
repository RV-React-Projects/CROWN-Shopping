import React from 'react';
import './MenuItem.scss';
import { withRouter } from 'react-router-dom';

function MenuItem({ title, imageUrl, size, history, linkUrl, match }) {
	return (
		<div className={`${size} menu-item`} onClick={() => history.push(`${match.url} ${linkUrl}`)}>
			<div className="image-background" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="content">
				<div className="title">{title.toUpperCase()}</div>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
}

export default withRouter(MenuItem);
