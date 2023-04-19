import useData from './useData';
import genres from '../data/genres';

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}
const useGenres = () => {
	const { data: realData, isLoading, error } = useData<Genre>('/genres');

	const data = isLoading ? genres : realData;

	return { data, isLoading: false, error };
};

export default useGenres;
