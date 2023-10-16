import { useEffect, useState, useRef } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Container } from 'components/SharedLayout.styled';
import * as api from 'services/index';

import {
	DarkContainer,
	DetailContainer,
	BackgroundContainer,
	TextContainer,
	MovieImage,
	TitleWrapper,
	Title,
	MovieDate,
	GenresList,
	GenreItem,
} from './MovieDetails.styled';

const MovieDetails = () => {
	const { movieId } = useParams();
	const backLink = useRef(useLocation());
	const [movieInfo, setMovieInfo] = useState(null);

	useEffect(() => {
		api.getTodayPopularFilms(movieId)
			.then((response) => {
				console.log(response);
				setMovieInfo(response);
			})
			.catch((err) => console.error(err));
	}, [movieId]);

	useEffect(() => {
		console.log(backLink);
	});

	return (
		<main>
			{movieInfo && (
				<DarkContainer>
					<DetailContainer>
						<MovieImage
							src={api.getImage(movieInfo.poster_path)}
							alt=""
						/>
						<BackgroundContainer
							style={{
								backgroundImage: `url(${api.getImage(
									movieInfo.backdrop_path
								)})`,
							}}
						>
							<TextContainer>
								<TitleWrapper>
									<Title>{movieInfo.title}</Title>
									<MovieDate>
										{' '}
										({movieInfo.release_date})
									</MovieDate>
								</TitleWrapper>

								<GenresList>
									{movieInfo.genres.map(({ id, name }) => (
										<GenreItem key={id}>{name}</GenreItem>
									))}
								</GenresList>
								<div>
									<h3>Overwiev</h3>
									{movieInfo.overview}
								</div>
								<div></div>
							</TextContainer>
						</BackgroundContainer>
					</DetailContainer>
				</DarkContainer>
			)}
			<NavLink to="cast">Cast</NavLink>
			<NavLink to="reviews">Reviews</NavLink>

			<Outlet />
		</main>
	);
};

export default MovieDetails;
