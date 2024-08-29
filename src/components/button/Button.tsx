import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import styled from 'styled-components';
import { font } from '../../styles/Common';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type TButtonProps = DefaultButtonPropsType & {
	xType?: 'primary' | 'default';
};

export const Button: FC<TButtonProps> = ({ disabled, xType = 'default', ...restProps }) => {
	return <StyledButton disabled={disabled} {...restProps} />;
};

export const StyledButton = styled.button`
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 5px 10px;
	border-radius: 5px;
	background-color: #cd4651;
	transition: all 0.3s;
	${font({
		weight: 700,
		Fmin: 15,
		Fmax: 35,
	})}
	&:hover {
		background-color: #ac3943;
	}
	&:disabled {
		background-color: #c7c7c7;
		color: #727272;
		pointer-events: none;
	}
`;
