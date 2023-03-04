import { ColorModeScript } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link rel='icon' href='/botmate.svg' />
				<meta
					name='title'
					content='BotMate - Open-source bot platform for Telegram'
				/>
				<meta
					name='description'
					content='Open-source platform for building and deploying Telegram bots. Comes with an in-built moderation system, analytics, marketplace and much more.'
				/>

				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://botmate.app' />
				<meta
					property='og:title'
					content='BotMate - Open-source bot platform for Telegram'
				/>
				<meta
					property='og:description'
					content='Open-source platform for building and deploying Telegram bots. Comes with an in-built moderation system, analytics, marketplace and much more.'
				/>
				<meta
					property='og:image'
					content='https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png'
				/>

				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://botmate.app/' />
				<meta
					property='twitter:title'
					content='BotMate - Open-source bot platform for Telegram'
				/>
				<meta
					property='twitter:description'
					content='Open-source platform for building and deploying Telegram bots. Comes with an in-built moderation system, analytics, marketplace and much more.'
				/>
				<meta
					property='twitter:image'
					content='https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png'
				/>
			</Head>
			<body>
				<ColorModeScript initialColorMode='dark' />
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
