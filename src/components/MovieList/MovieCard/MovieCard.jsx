import PropTypes from 'prop-types';
import { Card, CardInfo, Poster, Title } from './MovieCard.styled';
import * as api from 'services/index';
import { Link } from 'react-router-dom';

const MovieCard = ({ img, name, title, to, state }) => {
	return (
		<Card>
			<Link to={to} state={state}>
				<Poster src={api.getImage(img)} />
				<CardInfo>
					<Title>{name || title}</Title>
				</CardInfo>
			</Link>
		</Card>
	);
};

MovieCard.propTypes = {
	img: PropTypes.string.isRequired,
	name: PropTypes.string,
	title: PropTypes.string,
};

export default MovieCard;
