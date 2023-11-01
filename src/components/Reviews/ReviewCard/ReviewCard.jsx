import { Card, InfoGroup, Avatar, Info, Author, ReviewDate } from './ReviewCard.styled';
import Paragraphs from 'components/Paragraphs/Paragraphs';
import PropTypes from 'prop-types';
import * as api from 'services/index';

const ReviewCard = ({ avatar, author, date, content }) => {
	return (
		<Card>
			<InfoGroup>
				<Avatar src={api.getImage(avatar)} />
				<Info>
					<Author>{author}</Author>
					<ReviewDate>{date}</ReviewDate>
				</Info>
			</InfoGroup>
			<Paragraphs content={content} />
		</Card>
	);
};

ReviewCard.propTypes = {
	avatar: PropTypes.string,
	author: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
};

export default ReviewCard;
