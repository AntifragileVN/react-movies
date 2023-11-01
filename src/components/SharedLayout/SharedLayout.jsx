import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, StyledLink, Menu, Footer, Container } from './SharedLayout.styled';

const SharedLayout = () => {
	return (
		<>
			<Header>
				<Container>
					<Menu>
						<StyledLink to="/">Home</StyledLink>

						<StyledLink to="/movies">Movies</StyledLink>
					</Menu>
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
