import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi';

export const SearchForm = styled.form`
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 600px;
	background-color: #fff;
	border-radius: 3px;
	overflow: hidden;
`;

export const FormInput = styled.input`
	display: inline-block;
	width: 100%;
	font-size: 20px;
	border: none;
	outline: none;
	/* padding-left: 4px;
	padding-right: 4px; */
	padding: 2px 8px;

	&::placeholder {
		font: inherit;
		font-size: 18px;
	}
`;

export const SearchButton = styled.button`
	display: inline-block;
	width: 48px;
	height: 48px;
	border: 0;
	background-color: #fff;
	cursor: pointer;
`;

export const Icon = styled(BiSearchAlt)`
	width: 30px;
	height: 30px;
	cursor: pointer;
`;
