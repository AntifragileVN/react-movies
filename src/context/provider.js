import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import movieContext from './context';
import * as api from 'services/index';

export default function Provider({ children }) {
	const [isMoviePage, setIsMoviePage] = useState(false);
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

	const providerValue = useMemo(() => {
		return {
			isMoviePage,
			setIsMoviePage,
			movies,
			movieName,
			onFormSubmit,
			updateQueryString,
		};
	}, [isMoviePage, movieName, movies]);

	return (
		<movieContext.Provider value={providerValue}>{children}</movieContext.Provider>
	);
}
