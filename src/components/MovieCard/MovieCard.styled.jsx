import styled from 'styled-components';

export const Card = styled.li`
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const CardInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 5px 10px;
`;

export const Poster = styled.img`
	display: block;
	min-height: 300px;
	width: 100%;
	object-fit: cover;
`;
export const Title = styled.p`
	margin: 0;
	text-decoration: none;
	color: black;
	font-weight: 500;
`;
