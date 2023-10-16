import MovieCard from 'components/MovieCard/MovieCard';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as api from 'services/index';
import { List } from './Home.styled';

const Home = () => {
	const [movieList, setMovieList] = useState([]);
	const location = useLocation();

	useEffect(() => {
		api.getPopularMovies()
			.then((response) => setMovieList(response.results))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div>
			<List>
				{movieList &&
					movieList.map(({ id, poster_path, title, name }) => (
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
		</div>
	);
};

export default Home;
