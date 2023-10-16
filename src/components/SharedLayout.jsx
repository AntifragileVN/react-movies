import { Outlet } from 'react-router-dom';
import { Header, StyledLink, Menu, Footer } from './SharedLayout.styled';

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
			<Outlet />
			<Footer>Footer</Footer>
		</>
	);
};

export default SharedLayout;
