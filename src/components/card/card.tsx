import { FC } from 'react';
import { TCard } from '../../types/cards';
import { useDeleteCardMutation, useToggleLikeMutation } from '../../store/api/cards';
import { Link } from 'react-router-dom';
import { ERoutes } from '../../types/routes.enum';
import styled from 'styled-components';
import { Checkbox } from '../checkbox';
import { Icon } from '../icon';
import { font } from '../../styles/Common';

type TCardProps = {
	card: TCard;
};

export const Card: FC<TCardProps> = ({ card: { id, title, description, like, imgUrl } }) => {
	const [toggleLike] = useToggleLikeMutation();
	const [deleteCard] = useDeleteCardMutation();

	const toggleLikeHandle = async () => {
		await toggleLike({ id: id, like: !like });
	};
	const deleteCardHandle = async () => {
		await deleteCard({ id: id });
	};
	return (
		<StyledCard>
			<StyledLink to={`${ERoutes.CARD}/${id}`}>
				<Image src={imgUrl} alt={title} />
				<Title title={title}>{title}</Title>
				<Description>{description}</Description>
			</StyledLink>
			<Checkbox type='secondary' onChange={toggleLikeHandle} checked={like} />
			<Delete onClick={deleteCardHandle}>
				<Icon iconId='delete' viewBox='0 0 384 512' />
			</Delete>
		</StyledCard>
	);
};

const Title = styled.h2`
	color: ${props => props.theme.colors.text.dark};
	${font({
		weight: 700,
		Fmin: 20,
		Fmax: 40,
	})}
	text-align: center;
	margin-bottom: 10px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const Description = styled.p`
	color: ${props => props.theme.colors.text.dark};
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: justify;
	padding: 0 10px;
`;

const Image = styled.img`
	width: 100%;
	height: 300px;
	object-fit: cover;
	margin-bottom: 15px;
	border-radius: 10px;
	overflow: hidden;
`;
const StyledLink = styled(Link)`
	color: #000;
`;

const Delete = styled.button`
	position: absolute;
	top: 30px;
	right: 30px;
	padding: 5px;
	display: none;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-color: #cd4651;
`;

const StyledCard = styled.li`
	position: relative;
	padding: 10px;
	border-radius: 10px;
	box-shadow: 1px 0px 10px 0px rgba(163, 163, 163, 1);
	max-width: 500px;
	min-width: 150px;
	&:hover {
		${Delete} {
			display: flex;
		}
	}
	label {
		position: absolute;
		left: 50%;
		top: 30%;
		transform: translate(-50%, -50%);
	}
`;
