import Page from '../components/Page';
import Router  from 'next/router';

// Todo: swap with our own.
import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';
import '../components/styles/nprogress.css'
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';

Router.events.on( 'routeChangeStart', () => NProgress.start() );
Router.events.on( 'routeChangeComplete', () => NProgress.done() );
Router.events.on( 'routeChangeError', () => NProgress.done() );

function App( { Component, pageProps, apollo } ) {

	return (
		<ApolloProvider client={apollo}>
		<Page>
			<Component { ...pageProps }/>
		</Page>
		</ApolloProvider>
	);
}

App.getInitialProps= async function({Component, ctx}){
	let pageProps = {};

	if ( Component.getInitialProps ) {
		pageProps = await Component.getInitialProps( ctx );
	}

	pageProps.query = ctx.query;

	return pageProps;
}

export default withData( App );
