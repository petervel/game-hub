import { GameQuery } from '../App';
import useData from './useData';
import { Genre } from './useGenres';

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: [{ platform: Platform }];
	metacritic: number;
}

const useGames = (query: GameQuery) => {
	return useData<Game>(
		`/games`,
		{
			params: {
				genres: query.genre?.id,
				parent_platforms: query.platform?.id,
			},
		},
		[query]
	);
};

export default useGames;
