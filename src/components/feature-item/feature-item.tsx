import { Box, Heading, Text } from '@chakra-ui/react';

type FeatureItemProps = {
	title: string;
	description: string;
	icon: React.ReactNode;
};
function FeatureItem({ title, description, icon }: FeatureItemProps) {
	return (
		<Box
			role='group'
			cursor='pointer'
			userSelect='none'
			_active={{
				transform: 'scale(0.98)',
			}}
			transition='all 0.4s'
		>
			<Box
				_groupHover={{
					color: '#B0BCFF',
				}}
				transition='all 0.2s'
			>
				{icon}
			</Box>
			<Heading
				mt={4}
				fontSize='3xl'
				fontWeight='700'
				color='white'
				opacity={0.8}
			>
				{title}
			</Heading>
			<Text mt={2} maxW='3xl'>
				{description}
			</Text>
		</Box>
	);
}

export { FeatureItem };
