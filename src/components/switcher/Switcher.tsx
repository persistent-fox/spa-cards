import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type TSwitcherProps = {
	checked: boolean;
	onClick: () => void;
} & DefaultInputPropsType;

export const Switcher: FC<TSwitcherProps> = ({ checked, onClick, ...restProps }) => {
	const toggleSwitcher = () => {
		onClick();
	};
	return (
		<Label htmlFor='switcher'>
			<Text>Регулировка фильтра:</Text>
			<Input checked={checked} type='checkbox' id='switcher' {...restProps} />
			<Switch onClick={toggleSwitcher} />
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
	font-size: 18px;
`;

export const Switch = styled.span`
	position: relative;
	display: block;
	font-size: 18px;
	padding: 8px;
	background-color: #efecec;
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
		background-color: #949494;
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
`;
