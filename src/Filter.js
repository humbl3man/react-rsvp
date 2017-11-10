import React from 'react';
import PropTypes from 'prop-types';

const Filter = props => { 

	return (
		<div>
			<label>
				<input type="checkbox" onChange={props.toggleFilter} checked={props.isFiltered} /> Hide those who haven't responded
			</label>
		</div>
	);

}

Filter.propTypes = {
	isFiltered: PropTypes.bool.isRequired,
	toggleFilter: PropTypes.func.isRequired
};

export default Filter;


