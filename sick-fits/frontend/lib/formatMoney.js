export default function formatMoney( amount = 0 ) {

	const options = {
		style: 'currency',
		currency: 'INR',
		minimumFractionDigits: 2,
	};

	if ( 0 === amount % 100 ) {
		options.minimumFractionDigits = 0;
	}

	const formatter = Intl.NumberFormat( 'en-US', options );

	return formatter.format( amount / 100 );
}
