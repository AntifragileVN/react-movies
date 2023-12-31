const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmI5MWNkYzFhNTY1ZDU2N2JiMjlkZjQ4OGJkMDFiNyIsInN1YiI6IjY1MjgwNmQ5ZmQ2MzAwNWQ3YzRhMmM2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sxcoMx24hofceSGCKE71_MN09sWSK_i3PrsmpUtZnGc',
	},
};

export async function getSearchedMovie(movieName) {
	const response = await fetch(
		`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US`,
		options
	);
	return response.json();
}
export async function getPopularMovies() {
	const response = await fetch(
		'https://api.themoviedb.org/3/trending/all/day?language=en-US',
		options
	);
	return response.json();
}

export async function getMovieInfo(movieId) {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
		options
	);
	return response.json();
}

export function getImage(image) {
	if (!image) return 'https://fakeimg.pl/1200x1800?text=+';
	return `https://image.tmdb.org/t/p/original/${image}`;
}

export async function getCast(movieId) {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
		options
	);
	return response.json();
}

export async function getReviews(movieId) {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
		options
	);
	return response.json();
}
