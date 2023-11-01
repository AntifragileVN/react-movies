import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewCard from './ReviewCard/ReviewCard';
import * as api from 'services/index';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { ReviewsList } from './Reviews.styled';

const Reviews = () => {
	const [reviews, setReviews] = useState([]);

	const { movieId } = useParams();

	useEffect(() => {
		api.getReviews(movieId)
			.then((response) => {
				// console.log(response);
				setReviews(response.results);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<Container>
			<ReviewsList>
				{reviews.length !== 0 ? (
					reviews.map(({ author, content, created_at, id, author_details }) => (
						<ReviewCard
							key={id}
							avatar={author_details.avatar_path}
							author={author}
							date={created_at}
							content={content}
						/>
					))
				) : (
					<h1>There is no reviews yet :/</h1>
				)}
			</ReviewsList>
		</Container>
	);
};

export default Reviews;
