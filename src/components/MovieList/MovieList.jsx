import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import MovieCard from './MovieCard/MovieCard';
import { List } from './MovieList.styled';

const MovieList = ({ movies }) => {
	const location = useLocation();

	return (
		<>
			<List>
				{movies &&
					movies.map(({ id, poster_path, title, name }) => (
						<MovieCard
							key={id}
							img={poster_path}
							name={name}
							title={title}
							to={`movies/${id}`}
							state={{ from: location }}
						/>
					))}
			</List>
		</>
	);
};

MovieList.propTypes = {
	movies: PropTypes.array,
};

export default MovieList;
