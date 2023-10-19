import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	padding: 0 16px 104px;
	position: relative;
`;

export const Header = styled.header`
	top: 0;
	left: 0;
	position: sticky;
	z-index: 100;
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-height: 64px;
	padding-right: 24px;
	padding-left: 24px;
	padding-top: 12px;
	padding-bottom: 12px;
	background: #424242;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14),
		0px 1px 10px 0px rgba(0, 0, 0, 0.12);

	/* border-bottom: 2px solid #000; */
	/* box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14),
		0px 1px 10px 0px rgba(0, 0, 0, 0.12); */
`;

export const Menu = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: space-between;
	column-gap: 20px;
`;

export const StyledLink = styled(NavLink)`
	padding-right: 14px;
	padding-left: 14px;
	padding-top: 7px;
	padding-bottom: 7px;
	background: #494949;
	border-radius: 5px;
	font-weight: 600;
	text-decoration: none;
	color: #fff;
`;

export const Footer = styled.footer`
	bottom: 0;
	position: absolute;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 64px;

	padding-right: 24px;
	padding-left: 24px;
	padding-top: 12px;
	padding-bottom: 12px;
	color: #fff;
	background: #424242;
`;

export const FormInput = styled.input`
	display: inline-block;
	width: 100%;
	font: inherit;
	font-size: 20px;
	border: none;
	outline: none;
	padding-left: 4px;
	padding-right: 4px;

	&::placeholder {
		font: inherit;
		font-size: 18px;
	}
`;
