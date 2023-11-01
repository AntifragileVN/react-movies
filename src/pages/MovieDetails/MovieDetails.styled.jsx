import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BackgroundImage = styled.div`
	background-color: #000000;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 50% 20%;

	margin-left: auto;
	margin-right: auto;
	margin-bottom: 30px;

	height: 650px;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const DetailContainer = styled.div`
	display: flex;
	color: #fff;
`;

export const TextContainer = styled.div`
	padding: 30px;
`;

export const MovieImage = styled.img`
	max-width: 100%;
	max-height: 550px;
	border-radius: 5px;
`;

export const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 30px;
	column-gap: 15px;
`;

export const Title = styled.h1`
	font-weight: 700;
	font-size: 34px;
`;

export const MovieDate = styled.span`
	font-size: 25px;
	opacity: 0.8;
	font-weight: 400;
`;

export const GenresList = styled.ul`
	display: flex;
	column-gap: 20px;
	margin-bottom: 30px;
	padding: 0;
`;

export const GenreItem = styled.li`
	font-size: 14px;
	color: black;
	padding: 3px 15px;
	background: #fff;
	border-radius: 4px;
	font-weight: 500;
`;

export const TopicTitle = styled.h3`
	font-weight: 600;
	margin-bottom: 20px;
`;

export const LinkContainer = styled.div`
	display: flex;
	align-items: center;
	column-gap: 40px;
	margin-bottom: 30px;
	padding: 0;
`;

export const NavLinkStyled = styled(NavLink)`
	position: relative;

	text-decoration: none;
	/* display: block; */
	padding: 10px 15px;
	color: #000;
	font-weight: 700;
	font-size: 26px;

	&.back {
		padding: 5px 15px;
		outline: 2px solid black;
		border-radius: 5px;
	}

	&::after {
		content: '';

		position: absolute;
		left: 0;
		bottom: 0;

		display: block;
		width: 100%;
		height: 5px;
		background-color: black;
		transform: scaleX(0);
		transition: 200ms linear;
	}

	&:hover::after {
		transform: scaleX(1);
	}
`;
