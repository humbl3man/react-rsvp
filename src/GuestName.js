import React from 'react';
import PropTypes from 'prop-types';

const GuestName = props => { 

	if (props.isEditing) {
		return (
			<input type="text"
				className={props.isModelInvalid ? 'error' : ''}	
				value={props.children}
				onChange={props.handleNameEdit}/>
		)
	}

	return (
		<span>{props.children}</span>
	)

}

GuestName.propTypes = {
	isEditing: PropTypes.bool.isRequired,
	isModelInvalid: PropTypes.bool.isRequired,
	handleNameEdit: PropTypes.func.isRequired
};

export default GuestName;


