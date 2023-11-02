import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// export const Container = styled.div`
// 	position: relative;
// 	max-width: 1230px;
// 	padding: 0 15px;
// 	margin: 0 auto;
// `;

export const Container = styled.div`
	position: relative;
	max-width: 1230px;
	padding: 0 15px;
	margin: 0 auto;

	@media screen and (min-width: 480px) {
		width: 480px;
	}

	@media screen and (min-width: 768px) {
		width: 768px;
	}

	@media screen and (min-width: 1230px) {
		width: 1230px;
	}
`;

export const Header = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 100;

	min-height: 64px;

	padding-right: 24px;
	padding-left: 24px;
	padding-top: 12px;
	padding-bottom: 12px;

	background: #424242;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
		0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	column-gap: 40px;
`;

export const Menu = styled.nav`
	display: flex;
	align-items: center;
	justify-content: start;
	max-width: 1230px;
`;

export const StyledLink = styled(NavLink)`
	padding-right: 14px;
	padding-left: 14px;
	padding-top: 7px;
	padding-bottom: 7px;

	background: #494949;
	color: #fff;

	border-radius: 5px;
	font-weight: 600;
	text-decoration: none;

	&:not(:last-child) {
		margin-right: 30px;
	}
`;

export const Footer = styled.footer`
	bottom: 0;
	left: 0;
	width: 100%;
	position: absolute;

	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 64px;

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
