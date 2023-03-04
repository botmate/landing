import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme';

import '@fontsource/inter/400.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/satisfy/400.css';

export default function BotMateLanding({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
