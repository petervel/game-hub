import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
const GameCardSkeleton = () => {
	console.log('RENDERING SKELETON');
	return (
		<Card>
			<Skeleton height="200px" />
			<CardBody>
				<SkeletonText />
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
