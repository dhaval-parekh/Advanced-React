import Document, { Html, Head, NextScript, Main } from 'next/document';

export default class AppDocument extends Document {
	render() {
		return (
			<Html lang="en-US">
				{/*<Head></Head>*/ }
				<body>
				<Main/>
				<NextScript/>
				</body>
			</Html>
		)
	}
}