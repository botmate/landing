import { FeatureItem } from '@/components/feature-item/feature-item';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { HiChip, HiCode, HiDatabase, HiShoppingCart } from 'react-icons/hi';

type FeaturesProps = {};
function Overview({}: FeaturesProps) {
	return (
		<Box>
			<Box maxW='7xl' m='auto' px={{ base: 4, lg: 0 }} mb={12}>
				<Heading fontSize='4xl' color='white' mb={2}>
					Open-source. Fast. Secure.
				</Heading>
				<Text maxW='3xl'>
					BotMate is a platform that allows you to manage your Telegram bots. It
					provides a dashboard where you can manage your bots, and a marketplace
					where you can buy and sell plugins for your bots.
				</Text>
			</Box>

			<SimpleGrid
				maxW='7xl'
				m='auto'
				columns={2}
				spacing={12}
				px={{ base: 4, lg: 0 }}
				position='relative'
			>
				<FeatureItem
					title='Free & Open-Source'
					description='We believe in open-source. Forever. The entire codebase is available on GitHub. You can contribute to it and setup your own cloud instance.'
					icon={<HiCode size={50} />}
				/>
				<FeatureItem
					title='Multi-Bot Support'
					description='BotMate supports multiple bots. You can add multiple bots and manage them all from one place.'
					icon={<HiChip size={50} />}
				/>
				<FeatureItem
					title='Self-hosted or Cloud'
					description='Setup BotMate our your own server, or use our cloud platform instance at a very affordable price. Starting at $1.99/month.'
					icon={<HiDatabase size={50} />}
				/>
				<FeatureItem
					title='Marketplace'
					description='BotMate has a marketplace where you can find plugins for your bot and buy them. You can also sell your plugins on the marketplace.'
					icon={<HiShoppingCart size={50} />}
				/>
				{/* 
				<Box
					position='absolute'
					top={'0%'}
					right={'20%'}
					h='200px'
					w='200px'
					zIndex={-1}
					filter='blur(50px)'
					opacity={0.4}
					backgroundImage='radial-gradient(circle at 100% 50%, #6468d8, #7d84e5);'
					rounded='full'
				/> */}
			</SimpleGrid>
		</Box>
	);
}

export { Overview };
