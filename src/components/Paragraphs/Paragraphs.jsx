import * as textApi from 'services/index';
import { ParagraphStyled } from './Paragraphs.styled';
import { nanoid } from 'nanoid';

const Paragraphs = ({ content }) => {
	const textArray = textApi.getParagraphArray(content);

	return (
		<>
			{textArray.map((line) => (
				<ParagraphStyled key={nanoid()}>{line}</ParagraphStyled>
			))}
		</>
	);
};

export default Paragraphs;
