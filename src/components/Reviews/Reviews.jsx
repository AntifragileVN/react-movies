import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewCard from './ReviewCard/ReviewCard';
import * as api from 'services/index';
import { Container } from 'components/SharedLayout.styled';

const Reviews = () => {
	const [reviews, setReviews] = useState(null);

	const { movieId } = useParams();

	useEffect(() => {
		api.getReviews(movieId)
			.then((response) => {
				console.log(response);
				setReviews(response.results);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<Container>
			<ul>
				{reviews &&
					reviews.map(
						({
							author,
							content,
							created_at,
							id,
							author_details,
						}) => (
							<ReviewCard
								key={id}
								avatar={author_details.avatar_path}
								author={author}
								date={created_at}
								content={content}
							/>
						)
					)}
			</ul>
		</Container>
	);
};

export default Reviews;
