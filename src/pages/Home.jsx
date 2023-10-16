import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	const [movieList, setMovieList] = useState([]);

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmI5MWNkYzFhNTY1ZDU2N2JiMjlkZjQ4OGJkMDFiNyIsInN1YiI6IjY1MjgwNmQ5ZmQ2MzAwNWQ3YzRhMmM2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sxcoMx24hofceSGCKE71_MN09sWSK_i3PrsmpUtZnGc',
				// limit: 12,
			},
		};

		fetch(
			'https://api.themoviedb.org/3/trending/all/day?language=en-US',
			options
		)
			.then((response) => response.json())
			.then((response) => setMovieList(response.results))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div>
			<h1>Most popular day Films</h1>
			<ul>
				{movieList &&
					movieList.map(({ id, title, name }) => (
						<li key={id}>
							<Link to={`movies/${id}`}>{title || name}</Link>
						</li>
					))}
			</ul>
		</div>
	);
};

export default Home;
