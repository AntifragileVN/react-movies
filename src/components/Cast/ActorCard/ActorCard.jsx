import {
	Card,
	ActorImage,
	CharacterName,
	ActorName,
	Info,
} from './ActorCard.styled';
import PropTypes from 'prop-types';
import * as api from 'services/index';

const ActorCard = ({ character, actor, img }) => {
	return (
		<Card>
			<ActorImage src={api.getImage(img)} />
			<Info>
				<CharacterName>{character}</CharacterName>
				<ActorName>{actor}</ActorName>
			</Info>
		</Card>
	);
};

ActorCard.propType = {
	character: PropTypes.string.isRequired,
	actor: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
};

export default ActorCard;
