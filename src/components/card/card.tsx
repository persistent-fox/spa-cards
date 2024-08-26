import { FC } from 'react';
import { TCard } from '../../types/products';
import { useDeleteCardMutation, useToggleLikeMutation } from '../../store/api/cards';
import { Link } from 'react-router-dom';

type TCardProps = {
	card: TCard;
};

export const Card: FC<TCardProps> = ({ card }) => {
	const [toggleLike, { isLoading }] = useToggleLikeMutation();
	const [deleteCard] = useDeleteCardMutation();

	const toggleLikeHandle = async () => {
		await toggleLike({ id: card.id, like: !card.like });
	};
	const deleteCardHandle = async () => {
		await deleteCard({ id: card.id });
	};
	return (
		<li>
			<Link to={`card/${card.id}`}>
				<img src={card.imgUrl} alt={card.title} />
				{card.title}
				<p>{card.description}</p>
			</Link>
			{isLoading ? <span>Loading...</span> : <input type='checkbox' checked={card.like} onChange={toggleLikeHandle} />}
			<button onClick={deleteCardHandle}>x</button>
		</li>
	);
};
