import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi';

export const SearchForm = styled.form`
	position: relative;

	display: flex;
	align-items: center;
	width: 100%;
	max-width: 600px;
	background: #fff;
	border-radius: 5px;
	overflow: hidden;

	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
		0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const FormInput = styled.input`
	display: inline-block;
	width: 100%;
	height: 100%;
	font-size: 20px;
	border: 0;
	padding-top: 7px;
	padding-bottom: 7px;
	padding-left: 40px;

	&::placeholder {
		font-family: inherit;
		font-size: 18px;
	}
`;

export const SearchButton = styled.button`
	position: absolute;
	left: 5px;
	top: 50%;
	transform: translateY(-50%);

	background: #fff;
	padding: 0;
	border: 0;
	cursor: pointer;
`;

export const Icon = styled(BiSearchAlt)`
	display: block;
	width: 25px;
	height: 25px;
`;
