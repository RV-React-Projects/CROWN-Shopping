import React, { Component } from 'react';
import MenuItem from '../MenuItem';
import './Directory.scss';

export class Directory extends Component {
	constructor() {
		super();
		this.state = {
			section: [
				{
					id: 1,
					title: 'HATS',
					imageUrl:
						'https://images.pexels.com/photos/396777/pexels-photo-396777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					linkUrl: 'hats'
				},
				{
					id: 2,
					title: 'Jackets',
					imageUrl: 'https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					linkUrl: ''
				},
				{
					id: 3,
					title: 'Shoes',
					imageUrl:
						'https://images.pexels.com/photos/609771/pexels-photo-609771.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					linkUrl: ''
				},
				{
					id: 4,
					title: 'Womens',
					imageUrl:
						'https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					size: 'large',
					linkUrl: ''
				},
				{
					id: 5,
					title: 'mens',
					imageUrl:
						'https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					size: 'large',
					linkUrl: ''
				}
			]
		};
	}
	render() {
		return (
			<div className="directory-menu">
				{this.state.section.map(({ id, imageUrl, title, size, linkUrl }) => (
					<MenuItem key={id} imageUrl={imageUrl} title={title} size={size} linkUrl={linkUrl} />
				))}
			</div>
		);
	}
}

export default Directory;
