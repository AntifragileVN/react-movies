import styled from 'styled-components';

export const Card = styled.li`
	min-width: 140px;
	max-width: 200px;

	border-radius: 8px;
	padding-bottom: 10px;
	border: 1px solid #cec5c57d;
	overflow: hidden;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	&:not(:last-child) {
		margin-right: 20px;
	}
`;
export const ActorImage = styled.img`
	width: 100%;
`;

export const Info = styled.div`
	padding-left: 10px;
`;

export const CharacterName = styled.p`
	font-weight: 700;
	font-size: 18px;
	color: #000;
	margin: 4px 0px;
`;

export const ActorName = styled.span``;
