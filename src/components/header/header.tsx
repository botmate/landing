import {
	Button,
	Center,
	HStack,
	IconButton,
	Image,
	Spacer,
	Text,
} from '@chakra-ui/react';
import { FaCloud, FaGithub } from 'react-icons/fa';

type HeaderItemProps = {
	title: string;
	href: string;
	active?: boolean;
};
function HeaderItem({ title, href }: HeaderItemProps) {
	return (
		<Text
			cursor='pointer'
			transition='all 0.2s'
			_hover={{
				opacity: 0.8,
			}}
		>
			{title}
		</Text>
	);
}

export { HeaderItem };

type HeaderProps = {
	// children: React.ReactNode;
};
function Header({}: HeaderProps) {
	return (
		<HStack
			maxW='6xl'
			m='auto'
			textAlign='center'
			gap={4}
			py={2}
			px={{ base: 4, lg: 0 }}
			color='white'
		>
			<Image src='/botmate-logo-dark.svg' alt='BotMate Logo' w={8} h={8} />
			<HeaderItem title='Home' href='/' />
			<HeaderItem title='Product' href='/' />
			<HeaderItem title='Documentation' href='/' />
			<Spacer />
			<HStack>
				<IconButton variant='outline' aria-label='github' icon={<FaGithub />} />
				<Button leftIcon={<FaCloud />}>Cloud</Button>
			</HStack>
		</HStack>
	);
}

export { Header };
