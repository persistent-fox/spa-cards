import { useNavigate, useParams } from 'react-router-dom';
import { useGetCardByIdQuery } from '../../store/api/cards';
import { Icon } from '../../components/icon';
import { Button } from '../../components/button';
import { Container } from '../../components/Container';
import styled from 'styled-components';

export const Card = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { data, isLoading } = useGetCardByIdQuery(id!);
	if (isLoading || !data) return <span>loading...</span>;
	return (
		<div>
			<Container>
				<Button onClick={() => navigate(-1)}>
					<Icon width='25px' height='25px' iconId='go-back' viewBox='0 0 512 512' />
					go back
				</Button>
				<Title>{data.title}</Title>
				<Image src={data.imgUrl} alt={data.title} />
				<Description>{data.description}</Description>
				<Views>
					<span>Views:</span> {data.views}
				</Views>
			</Container>
		</div>
	);
};

const Title = styled.h1`
	font-size: 45px;
	text-align: center;
	margin-bottom: 20px;
`;

const Image = styled.img`
	display: block;
	margin: 0 auto;
	max-width: 600px;
	width: 100%;
	height: 400px;
	object-fit: cover;
	border-radius: 10px;
	overflow: hidden;
	margin-bottom: 20px;
`;

const Description = styled.p`
	font-size: 35px;
	margin-bottom: 20px;
	text-align: justify;
`;

const Views = styled.span`
	display: block;
	text-align: right;
	font-size: 35px;
	span {
		font-weight: 700;
	}
`;
