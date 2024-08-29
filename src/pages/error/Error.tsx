import styled from 'styled-components';
import { font } from '../../styles/Common';
import { Link } from 'react-router-dom';
import { ERoutes } from '../../types/routes.enum';

export const Error = () => {
	return (
		<>
			<Link to={ERoutes.HOME}>Вернуться на главную</Link>
			<StyledError>404 Страница не найдена</StyledError>
		</>
	);
};

const StyledError = styled.h1`
	text-align: center;
	${font({
		weight: 700,
		Fmin: 25,
		Fmax: 50,
	})};
`;
