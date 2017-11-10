import React from 'react';
import PropTypes from 'prop-types';
const Header = props =>

	<header className="app-header jumbotron">
		<div className="container">
			<div className="greeting text-center">
				<h1>{props.appName}</h1>
				<p>{props.slogan}</p>
			</div>
		</div>
	</header>;


Header.propTypes = {
	appName: PropTypes.string.isRequired,
	slogan: PropTypes.string.isRequired
};

export default Header;





