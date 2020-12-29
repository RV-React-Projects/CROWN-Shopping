import React from 'react';
import './FormInput.scss';

function FormInput({ lable, ...otherProps }) {
	return (
		<div className="group">
			<input className="form-input" {...otherProps} />
			{lable ? <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{lable}</label> : null}
		</div>
	);
}

export default FormInput;
