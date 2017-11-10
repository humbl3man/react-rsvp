import React from 'react';
import PropTypes from 'prop-types';


const AddGuest = props => <div className="app-searchbar-wrapper">
	
	<form onSubmit={e => {
			e.preventDefault();
			props.addGuestToList(props.name);
		}}>
		<input type="text" className="app-searchbar" onChange={(e) => {
			props.addPendingGuest(e.target.value)
		}} value={props.name} />
		<button type="submit">Invite</button>
	</form>
</div>;

AddGuest.propTypes = {
	addGuestToList: PropTypes.func.isRequired,
	addPendingGuest: PropTypes.func.isRequired,
	clearPendingGuest: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired
}

export default AddGuest;