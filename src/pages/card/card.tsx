import { useNavigate, useParams } from 'react-router-dom';
import { useGetCardByIdQuery } from '../../store/api/cards';

export const Card = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { data, isLoading } = useGetCardByIdQuery(id!);
	if (isLoading || !data) return <span>loading...</span>;
	return (
		<div>
			<button onClick={() => navigate(-1)}>go back</button>
			<h1>{data.title}</h1>
		</div>
	);
};
