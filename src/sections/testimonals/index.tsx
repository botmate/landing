import {
	Avatar,
	Box,
	Divider,
	Heading,
	HStack,
	SimpleGrid,
	Text,
} from '@chakra-ui/react';
import { FaSmile } from 'react-icons/fa';

type TestimonalProps = {
	name: string;
	avatar: string;
	testimonial: string;
};
const Testimonal = ({ name, avatar, testimonial }: TestimonalProps) => (
	<Box p={4} rounded='xl' bg='#1d1e2b' borderWidth='1px'>
		<HStack spacing={4}>
			<Avatar size='md' name={name} src={avatar} />
			<Box>
				<Heading size='md'>{name}</Heading>
				<Text fontSize={12} mt={1}>
					CEO of Company
				</Text>
			</Box>
		</HStack>
		<Text mt={4}>{testimonial}</Text>
	</Box>
);

function Testimonals() {
	return (
		<>
			<Divider my={12} />

			<Box maxW='7xl' m='auto'>
				<Heading color='white'>
					Here are some of the things people are saying about us
				</Heading>

				<SimpleGrid columns={2} spacing={8} mt={12}>
					<Testimonal
						name='John Doe'
						avatar='https://bit.ly/dan-abramov'
						testimonial='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nunc vel tincidunt lacinia, nisl nisl aliquet nisl, et
            aliquam ante nisl eget nunc. Donec euismod, nunc vel tincidunt
            lacinia, nisl nisl aliquet nisl, et aliquam ante nisl eget nunc.'
					/>

					<Testimonal
						name='Sage Adebayo'
						avatar='https://bit.ly/sage-adebayo'
						testimonial='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nunc vel tincidunt lacinia, nisl nisl aliquet nisl, et
            aliquam ante nisl eget nunc. Donec euismod, nunc vel tincidunt
            lacinia, nisl nisl aliquet nisl, et aliquam ante nisl eget nunc.'
					/>

					<Testimonal
						name='Karl Marx'
						avatar='https://bit.ly/kent-c-dodds'
						testimonial='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nunc vel tincidunt lacinia, nisl nisl aliquet nisl, et
            aliquam ante nisl eget nunc. Donec euismod, nunc vel tincidunt
            lacinia, nisl nisl aliquet nisl, et aliquam ante nisl eget nunc.'
					/>

					<Testimonal
						name='Ryan Florence'
						avatar='https://bit.ly/ryan-florence'
						testimonial='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nunc vel tincidunt lacinia, nisl nisl aliquet nisl, et
            aliquam ante nisl eget nunc. Donec euismod, nunc vel tincidunt
            lacinia, nisl nisl aliquet nisl, et aliquam ante nisl eget nunc.'
					/>
				</SimpleGrid>
			</Box>
		</>
	);
}

export { Testimonals };
