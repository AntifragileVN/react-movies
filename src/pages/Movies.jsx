import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as api from 'services/index';

import SearchBar from 'components/SearchBar/SearchBar';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
	const [movies, setMovies] = useState(null);
	const [searchParams, setSearchParams] = useSearchParams();
	const movieName = searchParams.get('movieName') ?? '';

	const onFormSubmit = (e) => {
		e.preventDefault();

		if (movieName !== '') {
			api.getSearchedMovie(movieName)
				.then((response) => setMovies(response.results))
				.catch((err) => console.error(err));
		}
	};

	const updateQueryString = (movieName) => {
		const nextParams = movieName !== '' ? { movieName } : {};
		setSearchParams(nextParams);
	};

	return (
		<main>
			<SearchBar
				onSearchSubmit={onFormSubmit}
				onChange={updateQueryString}
				value={movieName}
			/>

			<MovieList movies={movies} />
		</main>
	);
};

export default Movies;
