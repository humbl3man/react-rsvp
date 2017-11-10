import React from 'react';
import PropTypes from 'prop-types';
import GuestName from './GuestName';

const Guest = props =>

	<div className="col-md-4 col-xl-3">
		<div className="card guest mb-3">
			<div className="card-header">
				<GuestName
					handleNameEdit={e => props.setName(e.target.value)}
					isModelInvalid={props.isModelInvalid}
					isEditing={props.isEditing}>{props.name}</GuestName>
			</div>
			<div className="card-body">
				<div className="my-3">
					<label><input type="checkbox" checked={props.isAttending} onChange={props.toggleAttendingAt} disabled={props.isModelInvalid}/> Attending</label>
				</div>
				<div>
					<button type="button" className="btn btn-sm btn-primary" onClick={props.toggleEditingAt} disabled={props.isModelInvalid}>
						{props.isEditing ? 'save' : 'edit'}
					</button>
					<button type="button" className="btn btn-sm btn-secondary" onClick={props.removeGuestFromList}>Delete</button>
				</div>
			</div>
		</div>
	</div>;

Guest.propTypes = {
	name: PropTypes.string.isRequired,
	isAttending: PropTypes.bool.isRequired,
	isEditing: PropTypes.bool.isRequired,
	isModelInvalid: PropTypes.bool.isRequired,
	toggleAttendingAt: PropTypes.func.isRequired,
	toggleEditingAt: PropTypes.func.isRequired,
	removeGuestFromList: PropTypes.func.isRequired,
	setName: PropTypes.func.isRequired
};

export default Guest;


