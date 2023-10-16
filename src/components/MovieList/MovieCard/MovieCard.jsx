import PropTypes from 'prop-types';
import { Card, CardInfo, Poster, Title } from './MovieCard.styled';
import * as api from 'services/index';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ img, name, title, to, state }) => {
	const navigate = useNavigate();

	const handleCardClick = () => {
		navigate(`/${to}`, { state });
	};

	return (
		<Card>
			<div onClick={handleCardClick}>
				<Poster src={api.getImage(img)} />
				<CardInfo>
					<Title>{name || title}</Title>
				</CardInfo>
			</div>
		</Card>
	);
};

MovieCard.propTypes = {
	img: PropTypes.string.isRequired,
	name: PropTypes.string,
	title: PropTypes.string,
};

export default MovieCard;
