import { FC } from 'react';
import styled from 'styled-components';

type TErrorProps = {
	message: string;
};

export const Error: FC<TErrorProps> = ({ message }) => {
	return <StyledError>{message}</StyledError>;
};

const StyledError = styled.div`
	color: ${props => props.theme.colors.accent};
`;
