import { useState } from 'react';
import { Card } from '../../components/card';
import { useGetCardsQuery } from '../../store/api/cards';

export const Cards = () => {
	const [filter, setFilter] = useState(false);
	const { data, isLoading } = useGetCardsQuery({ like: filter });

	if (isLoading || !data) return <div>loading...</div>;
	return (
		<div>
			<button onClick={() => setFilter(prevState => !prevState)}>Liked</button>
			<ul>
				{data.map(card => (
					<Card key={card.id} card={card} />
				))}
			</ul>
		</div>
	);
};
