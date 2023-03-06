import {
	Box,
	Center,
	Heading,
	HStack,
	SimpleGrid,
	Text,
} from '@chakra-ui/react';
import React from 'react';
import {
	HiFilter,
	HiGlobeAlt,
	HiLightningBolt,
	HiShieldCheck,
	HiStop,
} from 'react-icons/hi';

type ModerationItemProps = {
	title: string;
	description: string;
	icon: React.ReactNode;
	color: string;
};
const ModerationItem = ({
	title,
	description,
	icon,
	color,
}: ModerationItemProps) => (
	<Box>
		<HStack alignItems='flex-start' spacing={4}>
			<Center
				p={2}
				rounded='xl'
				bg={`${color}.100`}
				color={`${color}.500`}
				fontSize='3xl'
			>
				{icon}
			</Center>
			<Box>
				<Heading size='md' color='white'>
					{title}
				</Heading>
				<Text mt={2}>{description}</Text>
			</Box>
		</HStack>
	</Box>
);

function Moderations() {
	return (
		<Box>
			<Box maxW='7xl' m='auto' textAlign='center'>
				<Center color='#B0BCFF'>
					<HiShieldCheck size={100} />
				</Center>
				<Heading mt={4} size='2xl' color='white'>
					Moderations? Built-in.
				</Heading>
				<Text maxW='3xl' m='auto' mt={4} fontSize={16}>
					BotMate comes with a built-in moderation system that allows you to
					moderate your groups and channels with ease.
				</Text>
			</Box>

			<SimpleGrid
				columns={{ base: 1, lg: 2 }}
				spacing={12}
				maxW='7xl'
				m='auto'
				mt={16}
			>
				<ModerationItem
					title='Anti-Spam'
					description='Anti-spam system allows you add spam protection in your group. It supports multiple languages.'
					icon={<HiStop />}
					color='red'
				/>
				<ModerationItem
					title='Filters'
					description='Filter system allows you to restrict certain messages from being sent to your group.'
					icon={<HiFilter />}
					color='cyan'
				/>
				<ModerationItem
					title='Actions Runner'
					description='Actions runner allows you to run actions on certain events. For example, you can mute a user when they send a certain message.'
					icon={<HiLightningBolt />}
					color='green'
				/>
				<ModerationItem
					title='Federation'
					description='Federation allows you to connect your groups and channels with other groups and channels.'
					icon={<HiGlobeAlt />}
					color='purple'
				/>
			</SimpleGrid>
		</Box>
	);
}

export { Moderations };
