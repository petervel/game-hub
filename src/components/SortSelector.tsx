import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
	sorting: string | null;
	onSelectSorting: (sorting: string) => void;
}
const SortSelector = ({ sorting, onSelectSorting }: Props) => {
	const sortingMap = [
		{ value: 'relevance', label: 'Relevance' },
		{ value: '-added', label: 'Date added' },
		{ value: 'name', label: 'Name' },
		{ value: '-released', label: 'Release date' },
		{ value: '-metacritic', label: 'Popularity' },
		{ value: '-rating', label: 'Average rating' },
	];

	const currentSorting = sortingMap.find((s) => s.value == sorting);

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{currentSorting?.label ?? 'Order by: Relevance'}
			</MenuButton>
			<MenuList>
				{sortingMap.map((item) => (
					<MenuItem
						key={item.value}
						onClick={() => onSelectSorting(item.value)}
					>
						{item.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
