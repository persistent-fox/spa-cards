import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Icon } from '../icon';
import { font } from '../../styles/Common';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type TCheckboxProps = {
	type?: 'default' | 'secondary';
	checked: boolean;
} & DefaultInputPropsType;

export const Checkbox: FC<TCheckboxProps> = ({ type = 'default', checked, ...restProps }) => {
	return (
		<Label>
			<Input type='checkbox' {...restProps} />
			{type === 'default' ? (
				<>
					<FakeCheckbox></FakeCheckbox>
					<Text>Текст</Text>
				</>
			) : (
				<IconFrame>
					<Icon width='100px' height='100px' iconId={checked ? 'like-filled' : 'like-empty'} viewBox='0 0 512 512' />
				</IconFrame>
			)}
		</Label>
	);
};

export const Label = styled.label`
	display: flex;
	align-items: center;
	gap: 15px;
	margin-bottom: 25px;
`;
export const FakeCheckbox = styled.span`
	position: relative;
	display: block;
	width: 16px;
	height: 16px;
	border: 2px solid #cd4651;
	border-radius: 2px;
	cursor: pointer;
`;
export const Text = styled.span`
	${font({
		Fmin: 15,
		Fmax: 25,
	})}
	line-height: 1;
	cursor: pointer;
`;

export const IconFrame = styled.div`
	opacity: 0.3;
	color: #c41b1b;
	cursor: pointer;
	&:hover {
		opacity: 1;
	}
`;

export const Input = styled.input`
	position: absolute;
	width: 1px;
	height: 1px;
	overflow: hidden;
	clip: rect(0 0 0 0);
	&:checked + ${FakeCheckbox}::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 8px;
		height: 8px;
		background-color: #cd4651;
	}
`;
