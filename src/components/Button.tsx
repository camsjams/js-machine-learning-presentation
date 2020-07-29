import React, {FC, ReactNode, MouseEvent} from 'react';
import styled from 'styled-components';

type Props = {
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
	children: ReactNode;
}

const NiceButton = styled.button`
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	color: var(--training);
	background-color: #333;
	text-align: center;
	width: 10em;
	margin-top: 1em;
	border-radius: 0;
	display: inline-block;
	border: 1px solid var(--training);
	cursor: pointer;

	&:active,
	&:focus {
		background-color: #666;
		border-radius: 0;
		border: 1px solid var(--learning);
	}

	&:hover {
		color: #333;
		background-color: var(--training);
		border: 1px solid #333;
		border-radius: 0;
	}
`;

const Button: FC<Props> = ({onClick, children}) =>
	<NiceButton onClick={onClick}>
		{children}
	</NiceButton>;

export default Button;
