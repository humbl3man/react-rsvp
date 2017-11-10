import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest';
import PendingGuest from './PendingGuest';

const GuestList = props =>
<div className="guest-list-wrapper container">	
	<div className="row guest-list">
		
		{props.pendingGuest.length > 0
              && <PendingGuest name={props.pendingGuest}/>}
		{props.guests
			.filter(guest => !props.isFiltered || guest.isAttending)	
			.map((guest) =>
			<Guest
				key={guest.id}
				removeGuestFromList={() => props.removeGuestFromList(guest.id)}
				toggleAttendingAt={() => props.toggleAttendingAt(guest.id)}
				toggleEditingAt={() => props.toggleEditingAt(guest.id)}
				setName={text => props.setNameAt(text, guest.id)}
				{...guest} />
		)}

		{!props.guests.length && <div className="col-sm-12">
			<p className="text-muted">No guests...</p>
		</div>}
	</div>
</div>	


GuestList.propTypes = {
	guests: PropTypes.array.isRequired,
	toggleEditingAt: PropTypes.func.isRequired,
	toggleAttendingAt: PropTypes.func.isRequired,
	removeGuestFromList: PropTypes.func.isRequired,
	setNameAt: PropTypes.func.isRequired,
	isFiltered: PropTypes.bool.isRequired,
	pendingGuest: PropTypes.string.isRequired
};

export default GuestList;


