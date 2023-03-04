import {
	Box,
	Button,
	Center,
	Flex,
	Heading,
	Image,
	Text,
} from '@chakra-ui/react';
import { HiArrowRight } from 'react-icons/hi';

type HeroProps = {
	// children: React.ReactNode;
};
function Hero({}: HeroProps) {
	return (
		<Flex py={20} flexDirection='column'>
			<Box maxW='5xl' m='auto' textAlign='center'>
				<Center>
					<Text
						py={1}
						px={4}
						bg='secondary.dark'
						rounded='full'
						fontSize={12}
						_hover={{
							color: 'white',
						}}
						cursor='pointer'
						transition='all 0.2s'
					>
						<span role='img' aria-label='rocket'>
							🚀
						</span>{' '}
						BotMate cloud is now live!
					</Text>
				</Center>
				<Heading
					mt={8}
					size='4xl'
					lineHeight={1.1}
					// bgGradient='linear(to-r, #7d86cd, #c6bee5)'
					color='#f5f6ff'
					// bgClip='text'
					fontWeight='600'
				>
					Streamline Bot Development with BotMate
				</Heading>
				<Text maxW='3xl' m='auto' mt={4} fontSize={18}>
					Open-souce platform for build and deploying Telegram bots. Comes with
					an in-built moderation system, analytics, marketplace and much more.
				</Text>
				<Button
					mt={6}
					size='lg'
					rounded='full'
					color='white'
					leftIcon={<HiArrowRight />}
					bgGradient='linear(to-r, #4e44b7, #424ca0)'
					_hover={{
						bgGradient: 'linear(to-r, #4e44b7, #424ca0)',
					}}
					_active={{
						bgGradient: 'linear(to-r, #4e44b7, #424ca0)',
						opacity: 0.8,
					}}
				>
					Get started
				</Button>
			</Box>
			<Box maxW='7xl' m='auto'>
				<Image
					rounded='3xl'
					border='1px solid transparent'
					src='/demo-01.png'
					alt='BotMate Demo'
					mt={20}
					className='shine'
				/>
			</Box>
		</Flex>
	);
}

export { Hero };
