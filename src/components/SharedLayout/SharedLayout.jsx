import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import {
	Header,
	StyledLink,
	Container,
	Menu,
	Footer,
} from './SharedLayout.styled';

const SharedLayout = () => {
	return (
		<>
			<Header>
				<nav>
					<Menu>
						<li>
							<StyledLink to="/">Home</StyledLink>
						</li>
						<li>
							<StyledLink to="/movies">Movies</StyledLink>
						</li>
					</Menu>
				</nav>
			</Header>
			<Container>
				<Suspense fallback={<div>Loading...</div>}>
					<Outlet />
				</Suspense>
			</Container>
			<Footer>Footer</Footer>
		</>
	);
};

export default SharedLayout;
