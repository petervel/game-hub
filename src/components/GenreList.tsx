import useGenres, { Genre } from '../hooks/useGenres';
import {
	Button,
	HStack,
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
		<List>
			{genres.map((genre) => (
				<ListItem key={genre.id} paddingY={'5px'}>
					<HStack>
						<Image
							boxSize={'32px'}
							borderRadius={8}
							src={getCroppedImageUrl(genre.image_background)}
						/>
						<Button
							variant="link"
							fontSize="lg"
							onClick={() => onSelectGenre(genre)}
							fontWeight={selectedGenre?.id == genre.id ? 'bold' : 'normal'}
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
