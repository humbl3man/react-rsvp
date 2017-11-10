import React from 'react';
import PropTypes from 'prop-types';

const PendingGuest = props =>

	<div className="col-md-4 col-xl-3">
		<div className="card guest pending mb-3">
			<div className="card-header">
				{props.name}
			</div>
			<div className="card-body">
				
			</div>
		</div>
	</div>;

PendingGuest.propTypes = {
	name: PropTypes.string.isRequired
}

export default PendingGuest;


