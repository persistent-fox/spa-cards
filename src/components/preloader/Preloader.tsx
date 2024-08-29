import styled, { keyframes } from 'styled-components';

export const Preloader = () => {
	return <Loader />;
};

const spin = keyframes`
	0% { transform: translate(-50%, -50%) rotate(0deg); }
	100% { transform: translate(-50%, -50%) rotate(360deg); }
`;

const Loader = styled.div`
	border: 56px solid #f3f3f3; /* Light grey border */
	border-top: 56px solid #3498db; /* Blue border */
	border-radius: 50%;
	animation: ${spin} 2s linear infinite;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
