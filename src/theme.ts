import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
};

const colors = {
	primary: {
		light: 'white',
		dark: '#191a23',
	},

	secondary: {
		light: '#f5f6f859',
		dark: '#1d1e2b',
	},
	text: {},
};

const styles = {
	global: (props: StyleFunctionProps) => ({
		body: {
			color: mode('gray.800', 'whiteAlpha.600')(props),
			bg: mode('primary.light', 'primary.dark')(props),
		},
		html: {
			fontSize: '14px',
		},
	}),
};

const theme = extendTheme({
	config,
	styles,
	colors,
	fonts: {
		heading: `'Open Sans', sans-serif`,
		body: `'Inter', sans-serif`,
	},
	fontSizes: {
		md: '1rem',
		sm: '0.875rem',
	},
});

export default theme;
