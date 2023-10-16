import { useEffect, useState, useRef } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
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
	LinkContainer,
	NavLinkStyled,
} from './MovieDetails.styled';

const MovieDetails = () => {
	const { movieId } = useParams();
	const location = useLocation();
	const backLinkLocationRef = useRef(location.state?.from ?? '/');
	const [movieInfo, setMovieInfo] = useState(null);

	useEffect(() => {
		api.getMovieInfo(movieId)
			.then((response) => {
				console.log(response);
				setMovieInfo(response);
			})
			.catch((err) => console.error(err));
	}, [movieId]);

	return (
		<main>
			<NavLink to={backLinkLocationRef.current}> Назад </NavLink>
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
			<LinkContainer>
				<NavLinkStyled to="cast">Cast</NavLinkStyled>
				<NavLinkStyled to="reviews">Reviews</NavLinkStyled>
			</LinkContainer>

			<Outlet />
		</main>
	);
};

export default MovieDetails;
