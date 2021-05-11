import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';
import Nav from './Nav';

export default class Header extends React.Component {

	render() {
		return (
			<header>
				<div className="bar">

				</div>
				<div className="sub-bar">
					<p>Search</p>
				</div>
				<Nav/>
			</header>
		)
	}

}