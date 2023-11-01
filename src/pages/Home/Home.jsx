import { useState, useEffect } from 'react';
import * as api from 'services/index';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
	const [movieList, setMovieList] = useState([]);

	useEffect(() => {
		api.getPopularMovies()
			.then((response) => {
				console.log(response);
				setMovieList(response.results);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<div>
			<MovieList movies={movieList} />
		</div>
	);
};

export default Home;
