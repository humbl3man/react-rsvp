import React from 'react';
import PropTypes from 'prop-types';

const Notification = props => { 

	if (props.isVisible) {
		return (
			<div className="alert alert-danger text-center notification">
				{props.children}
			</div>
		);
	}

	return null;

}

Notification.propTypes = {
	isVisible: PropTypes.bool.isRequired
};

export default Notification;


