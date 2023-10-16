import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const DarkContainer = styled.div`
	background-color: #000000;
	overflow: hidden;
`;

export const DetailContainer = styled.div`
	width: 80%;
	margin: 0 auto;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	z-index: 1;

	display: flex;
	align-items: start;
	justify-content: start;
	color: #fff;
`;

export const BackgroundContainer = styled.div`
	position: relative;
	background-size: contain;
	background-repeat: no-repeat;
	background-attachment: local;
	background-position: right;
	width: 100%;
	height: 500px;

	&::before {
		content: '';
		padding-left: 40px;
		background: rgba(
			0,
			0,
			0,
			0.5
		); /* Adjust the alpha value (0.5) for darkness */
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
`;

export const TextContainer = styled.div`
	color: white;
	position: absolute;

	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(
		0,
		0,
		0,
		0.5
	); /* Adjust the alpha value (0.7) for text background opacity */
	padding: 10px;
`;

export const MovieImage = styled.img`
	max-width: 100%;
	max-height: 450px;
	border-radius: 5px;
`;

export const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	column-gap: 10px;
`;

export const Title = styled.h1`
	margin: 0;
	font-weight: 700;
	font-size: 34px;
`;

export const MovieDate = styled.span`
	font-size: 25px;
	opacity: 0.8;
	font-weight: 400;
`;

export const GenresList = styled.ul`
	list-style: none;
	display: flex;
	column-gap: 20px;
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

export const TopicTitle = styled.p`
	font-weight: 600;
`;

export const LinkContainer = styled.div`
	margin-top: 30px;
	display: flex;
	align-items: center;
	column-gap: 40px;
`;

export const NavLinkStyled = styled(NavLink)`
	text-decoration: none;
	color: #000;
	font-weight: 700;
	font-size: 26px;
	position: relative;
`;
