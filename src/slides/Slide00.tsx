import React, {FC, Fragment} from 'react';
import styled from 'styled-components';

const Header = styled.h1`
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	color: #fff;
	font-size: 2em;
	text-align: center;
`;

const SlideComponent: FC = () =>
	<Fragment>
		<Header>Some Text Here</Header>
	</Fragment>;

export default SlideComponent;
