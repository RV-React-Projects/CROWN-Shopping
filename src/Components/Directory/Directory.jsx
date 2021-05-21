import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectDirectorySection } from '../../Redux/Directory/DirectorySelector';
import MenuItem from '../MenuItem';
import './Directory.scss';

const Directory = ({ sections }) => (
	<div className="directory-menu">
		{sections.map(({ id, imageUrl, title, size, linkUrl }) => (
			<MenuItem key={id} imageUrl={imageUrl} title={title} size={size} linkUrl={linkUrl} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	sections: SelectDirectorySection
});

export default connect(mapStateToProps)(Directory);
