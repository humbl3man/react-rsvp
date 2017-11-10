import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => { 

	return (
		<div className="text-right">
			<p>Total guests: <strong>{props.totalGuests}</strong></p>
			<p>Attending guests: <strong>{props.attendingGuests}</strong></p>
			<p>Not attending guests: <strong>{props.notAttendingGuests}</strong></p>
		</div>
	);

}

Counter.propTypes = {
	totalGuests: PropTypes.number.isRequired,
	attendingGuests: PropTypes.number.isRequired,
	notAttendingGuests: PropTypes.number.isRequired
};

export default Counter;


