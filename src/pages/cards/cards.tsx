import { useState } from 'react';
import { Card } from '../../components/card';
import { useGetCardsQuery } from '../../store/api/cards';
import styled from 'styled-components';

export const Cards = () => {
	const [filter, setFilter] = useState(false);
	const { data, isLoading } = useGetCardsQuery({ like: filter });

	if (isLoading || !data) return <div>loading...</div>;
	return (
		<div>
			<button onClick={() => setFilter(prevState => !prevState)}>Favorite</button>
			<Title>Cats</Title>
			<CardsList>
				{data.map(card => (
					<Card key={card.id} card={card} />
				))}
			</CardsList>
		</div>
	);
};

const Title = styled.h1`
	font-size: 40px;
	text-align: center;
	margin-bottom: 20px;
`;
const CardsList = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 20px;
`;
