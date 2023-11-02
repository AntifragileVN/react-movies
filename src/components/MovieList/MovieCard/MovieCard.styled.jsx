import styled from 'styled-components';

export const Card = styled.li`
	position: relative;
	overflow: hidden;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	background: #424242;
	border-radius: 8px;
`;

export const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	/* display: flex;
	align-items: center;
	justify-content: center; */

	background-color: rgba(0, 0, 0, 0.7);
	opacity: 0;
	transition-property: opacity;
	transition-duration: 250ms;
	transition-timing-function: linear;
	&:hover {
		opacity: 1;
	}
`;

export const OverlayContent = styled.div`
	color: #fff;
	font-weight: 600;
	font-size: 30px;

	position: absolute;
	top: 0;
	right: 0;
`;

export const CardInfo = styled.div`
	padding-top: 5px;
	padding-bottom: 10px;
	padding-left: 5px;
	padding-right: 5px;

	color: white;
`;

export const Poster = styled.img`
	display: block;
	height: 100%;
	width: 100%;
`;
export const Title = styled.p`
	margin: 0;
	font-size: 18px;
	font-weight: 500;
`;
