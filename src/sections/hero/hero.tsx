import {
	Box,
	Button,
	Center,
	Flex,
	Heading,
	Image,
	Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';

type HeroProps = {
	// children: React.ReactNode;
};
function Hero({}: HeroProps) {
	return (
		<Flex py={20} flexDirection='column' px={{ base: 4, lg: 0 }}>
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
					size={{
						base: '2xl',
						lg: '4xl',
					}}
					lineHeight={1.1}
					// bgGradient='linear(to-r, #7d86cd, #c6bee5)'
					color='#f5f6ff'
					// bgClip='text'
					fontWeight='600'
				>
					Streamline Bot Development with BotMate
				</Heading>
				<Text
					maxW='3xl'
					m='auto'
					mt={4}
					fontSize={{
						base: 16,
						lg: 18,
					}}
				>
					Open-souce platform for build and deploying Telegram bots. Comes with
					an in-built moderation system, analytics, marketplace and much more.
				</Text>
				<Link href='https://help.botmate.app/'>
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
				</Link>
			</Box>
			<Box maxW='7xl' m='auto' mt={20}>
				<motion.div
					initial={{
						opacity: 0,
						transform: 'perspective(75em) rotateX(15deg)',
					}}
					animate={{ opacity: 1, transform: 'perspective(75em) rotateX(0deg)' }}
					transition={{
						duration: 1,
						delay: 0.5,
						bounce: 0.5,
					}}
				>
					<Image
						rounded='3xl'
						border='1px solid transparent'
						src='/demo-01.png'
						alt='BotMate Demo'
						className='shine'
					/>
				</motion.div>
			</Box>
		</Flex>
	);
}

export { Hero };
