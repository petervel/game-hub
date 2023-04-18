import React from 'react';
import useGenres, { Genre } from '../hooks/useGenres';
import { Text } from '@chakra-ui/react';
import useData from '../hooks/useData';

const GenreList = () => {
	const { data: genres } = useGenres();
	return (
		<ul>
			{genres.map((genre) => (
				<li key={genre.id}>{genre.name}</li>
			))}
		</ul>
	);
};

export default GenreList;
