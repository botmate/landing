import { ColorModeScript } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link rel='icon' href='/botmate.svg' />
			</Head>
			<body>
				<ColorModeScript initialColorMode='dark' />
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
