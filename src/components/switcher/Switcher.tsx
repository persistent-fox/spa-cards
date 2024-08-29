import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { font } from '../../styles/Common';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type TSwitcherProps = {
	checked: boolean;
	onClick: () => void;
} & DefaultInputPropsType;

export const Switcher: FC<TSwitcherProps> = ({ checked, onClick, ...restProps }) => {
	return (
		<Label>
			<Text>Регулировка фильтра:</Text>
			<Input defaultChecked={checked} type='checkbox' {...restProps} />
			<Switch onClick={onClick} />
		</Label>
	);
};

export const Label = styled.label`
	display: flex;
	align-items: center;
	max-width: fit-content;
	gap: 15px;
`;

export const Text = styled.span`
	${font({
		weight: 700,
		Fmin: 18,
		Fmax: 30,
	})}
`;

export const Switch = styled.span`
	position: relative;
	display: block;
	font-size: 18px;
	padding: 8px;
	background-color: ${props => props.theme.colors.primary};
	border-radius: 18px;
	width: 60px;
	height: 36px;
	cursor: pointer;
	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 3px;
		transform: translateY(-50%);
		width: 30px;
		height: 30px;
		background-color: ${props => props.theme.colors.grey.medium};
		border-radius: 50%;
		transition: all 0.3s;
	}
`;

export const Input = styled.input`
	position: absolute;
	opacity: 0;
	width: 0;
	height: 0;
	appearance: none;
	&:checked + ${Switch}::before {
		left: 26px;
		background-color: #942727;
	}
	&:checked + ${Switch} {
		background-color: #ef89894a;
	}
`;
