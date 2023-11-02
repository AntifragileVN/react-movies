import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from 'services/index';

import { CastList } from './Cast.styled';
import ActorCard from './ActorCard/ActorCard';

const Cast = () => {
	const [cast, setCast] = useState(null);

	const { movieId } = useParams();

	useEffect(() => {
		api.getCast(movieId)
			.then((response) => {
				// console.log(response);
				setCast(response);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<>
			{cast && (
				<CastList>
					{cast.cast.map(({ id, character, name, profile_path }) => (
						<ActorCard
							key={id}
							character={character}
							actor={name}
							img={profile_path}
						/>
					))}
				</CastList>
			)}
		</>
	);
};

export default Cast;
