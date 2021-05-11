import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

export default class Nav extends React.Component {

	render() {
		return (
			<nav>
				<Link href="/">Home</Link>
				<Link href="/products">Products</Link>
				<Link href="/sell">Sell</Link>
				<Link href="/orders">Orders</Link>
				<Link href="/accounts">Accounts</Link>
			</nav>
		)
	}

}