import styled from 'styled-components';

export const List = styled.ul`
	display: grid;
	max-width: calc(100vw - 48px);
	grid-template-columns: repeat(4, 1fr);

	grid-gap: 16px;

	padding-top: 20px;
	padding-bottom: 20px;

	margin-left: auto;
	margin-right: auto;
`;
