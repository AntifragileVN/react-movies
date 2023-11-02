import { Outlet } from 'react-router-dom';
import { Suspense, useContext } from 'react';
import {
	Header,
	HeaderWrapper,
	StyledLink,
	Menu,
	Footer,
	Container,
} from './SharedLayout.styled';
import MovieContext from 'context/context';
import SearchBar from 'components/SearchBar/SearchBar';

const SharedLayout = () => {
	const { isMoviePage, movieName, onFormSubmit, updateQueryString } =
		useContext(MovieContext);

	return (
		<>
			<Header>
				<Container>
					<HeaderWrapper>
						<Menu>
							<StyledLink to="/">Home</StyledLink>

							<StyledLink to="/movies">Movies</StyledLink>
						</Menu>
						{isMoviePage ? (
							<SearchBar
								onSearchSubmit={onFormSubmit}
								onChange={updateQueryString}
								value={movieName}
							/>
						) : null}
					</HeaderWrapper>
				</Container>
			</Header>
			<Suspense fallback={<div>Loading...</div>}>
				<Outlet />
			</Suspense>
			<Footer>Made by Vitalii Dudar © 2023</Footer>
		</>
	);
};

export default SharedLayout;
