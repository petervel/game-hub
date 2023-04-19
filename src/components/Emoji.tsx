import like from '../assets/emoji/thumbs-up.webp';
import bullseye from '../assets/emoji/bulls-eye.webp';
import meh from '../assets/emoji/meh.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
	rating: number;
}

const Emoji = ({ rating }: Props) => {
	if (rating < 3) return null;

	const lookup: { [key: number]: ImageProps } = {
		3: {
			src: meh,
			alt: 'meh',
			boxSize: '25px',
		},
		4: {
			src: like,
			alt: 'recommended',
			boxSize: '25px',
		},
		5: {
			src: bullseye,
			alt: 'exceptional',
			boxSize: '35px',
		},
	};
	return <Image {...lookup[rating]} marginTop={1} />;
};

export default Emoji;
