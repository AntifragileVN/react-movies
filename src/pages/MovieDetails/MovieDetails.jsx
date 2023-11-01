import { useEffect, useState, useRef } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import * as api from 'services/index';

import {
	DetailContainer,
	BackgroundImage,
	TextContainer,
	MovieImage,
	TitleWrapper,
	Title,
	MovieDate,
	GenresList,
	GenreItem,
	TopicTitle,
	LinkContainer,
	NavLinkStyled,
} from './MovieDetails.styled';

const MovieDetails = () => {
	const { movieId } = useParams();
	console.log(movieId);
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
			{movieInfo && (
				<BackgroundImage
					style={{
						backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${api.getImage(
							movieInfo.backdrop_path
						)})`,
					}}
				>
					<Container>
						<DetailContainer>
							<MovieImage
								src={api.getImage(movieInfo.poster_path)}
								alt=""
							/>

							<TextContainer>
								<TitleWrapper>
									<Title>{movieInfo.title}</Title>
									<MovieDate> ({movieInfo.release_date})</MovieDate>
								</TitleWrapper>

								<GenresList>
									{movieInfo.genres.map(({ id, name }) => (
										<GenreItem key={id}>{name}</GenreItem>
									))}
								</GenresList>
								<div>
									<TopicTitle>Overwiev</TopicTitle>
									{movieInfo.overview}
								</div>
								<div></div>
							</TextContainer>
						</DetailContainer>
					</Container>
				</BackgroundImage>
			)}

			<Container>
				<LinkContainer>
					<NavLinkStyled className="back" to={backLinkLocationRef.current}>
						Back
					</NavLinkStyled>
					<NavLinkStyled to="cast">Cast</NavLinkStyled>
					<NavLinkStyled to="reviews">Reviews</NavLinkStyled>
				</LinkContainer>
			</Container>
			<Outlet />
		</main>
	);
};

export default MovieDetails;
