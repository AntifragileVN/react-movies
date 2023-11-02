import { useState, useEffect, useContext } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import * as api from 'services/index';
import MovieContext from 'context/context';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
	const { setIsMoviePage, movies } = useContext(MovieContext);

	useEffect(() => {
		setIsMoviePage(true);
		return () => {
			setIsMoviePage(false);
		};
	}, [setIsMoviePage]);

	return (
		<main>
			<MovieList movies={movies} />
		</main>
	);
};

export default Movies;
