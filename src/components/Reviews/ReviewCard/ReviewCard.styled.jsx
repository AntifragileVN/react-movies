import styled from 'styled-components';

export const Card = styled.div`
	border: 1px solid rgb(227, 227, 227);
	border-radius: 8px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	background-color: #fff;
	padding: 20px;
	width: 100%;
	margin-bottom: 20px;
	max-width: 900px;
`;

export const InfoGroup = styled.div`
	display: flex;
	align-items: center;
	justify-content: start;
	margin-bottom: 20px;
`;

export const Avatar = styled.img`
	margin-right: 15px;
	width: 100%;
	height: 100%;
	height: 50px;
	width: 50px;
	border-radius: 50%;
`;

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
`;

export const Author = styled.h3`
	font-weight: 700;
	margin-bottom: 0;
	margin: 0;
`;

export const ReviewDate = styled.h5`
	font-weight: 300;
	font-size: 0.9em;
	margin: 0;
`;
