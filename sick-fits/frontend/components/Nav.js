import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';
import NavStyles from './styles/NavStyles';

export default class Nav extends React.Component {

	render() {
		return (
			<NavStyles>
				<Link href="/">Home</Link>
				<Link href="/products">Products</Link>
				<Link href="/sell">Sell</Link>
				<Link href="/orders">Orders</Link>
				<Link href="/accounts">Accounts</Link>
			</NavStyles>
		)
	}

}
