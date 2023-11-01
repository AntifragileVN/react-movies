import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import MovieCard from './MovieCard/MovieCard';
import { List } from './MovieList.styled';
import { Container } from 'components/SharedLayout/SharedLayout.styled';

const MovieList = ({ movies }) => {
	const location = useLocation();

	return (
		<Container>
			<List>
				{movies &&
					movies.map(({ id, poster_path, release_date, title, name }) => (
						<MovieCard
							key={id}
							img={poster_path}
							name={name}
							date={release_date}
							title={title}
							to={`movies/${id}`}
							state={{ from: location }}
						/>
					))}
			</List>
		</Container>
	);
};

MovieList.propTypes = {
	movies: PropTypes.array,
};

export default MovieList;
