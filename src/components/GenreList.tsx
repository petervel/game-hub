import useGenres, { Genre } from '../hooks/useGenres';
import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
	Spinner,
} from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';

interface Props {
	selectedGenre: Genre | null;
	onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
	const { data: genres, isLoading, error } = useGenres();

	if (error) return null;
	if (isLoading) return <Spinner />;
	return (
		<>
			<Heading fontSize="2xl" marginBottom={3}>
				Genres
			</Heading>
			<List>
				{genres.map((genre) => (
					<ListItem key={genre.id} paddingY={'5px'}>
						<HStack>
							<Image
								boxSize={'32px'}
								objectFit="cover"
								borderRadius={8}
								src={getCroppedImageUrl(genre.image_background)}
							/>
							<Button
								variant="link"
								fontSize="lg"
								whiteSpace="normal"
								textAlign="left"
								onClick={() => onSelectGenre(genre)}
								fontWeight={selectedGenre?.id == genre.id ? 'bold' : 'normal'}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
