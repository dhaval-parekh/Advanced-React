import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

class Page extends React.Component {

	static propType = {
		children: PropTypes.any,
	}

	render() {
		const { children } = this.props;

		return (
			<div>
				<Header/>
				<h2>I'm Page Layout</h2>
				{ children }
			</div>
		);
	}

}

export default Page;