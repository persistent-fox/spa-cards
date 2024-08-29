import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetCardByIdQuery } from '../../store/api/cards';
import { Icon } from '../../components/icon';
import { Button } from '../../components/button';
import { Container } from '../../components/Container';
import styled from 'styled-components';
import { font } from '../../styles/Common';
import { Preloader } from '../../components/preloader';
import { Error } from '../../components/error';
import { ERoutes } from '../../types/routes.enum';

export const Card = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { data, isLoading, isError } = useGetCardByIdQuery(id!);

	if (isError)
		return (
			<>
				<Link to={ERoutes.HOME}>Вернуться на главную</Link>
				<Error message='Не удалось найти' />;
			</>
		);

	if (isLoading || !data) return <Preloader />;

	return (
		<StyledCardPage>
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
		</StyledCardPage>
	);
};

const StyledCardPage = styled.div`
	padding: 70px 0;
`;

const Title = styled.h1`
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
	margin-bottom: 20px;
	text-align: justify;
`;

const Views = styled.span`
	display: block;
	text-align: right;
	${font({
		weight: 400,
		Fmin: 20,
		Fmax: 40,
	})}
	span {
		font-weight: 700;
	}
`;
