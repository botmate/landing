import Head from 'next/head';
import { Features, Footer, Hero, Testimonals } from '@/sections';
import { Header } from '@/components/header';
import { Box, Stack } from '@chakra-ui/react';

// todo: better SEO
export default function Home() {
	return (
		<>
			<Head>
				<title>BotMate</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Box position='relative'>
				<Box
					as='main'
					top={0}
					width='100%'
					height='900px'
					position='absolute'
					zIndex={-1}
					bgGradient='linear(to-t, primary.dark, #1f2030)'
				/>
				<Header />
				<Hero />
				<Stack spacing={20}>
					<Features.Overview />
					<Features.Moderations />
				</Stack>
				<Testimonals />
				<Footer />
			</Box>
		</>
	);
}
