import React, {FC, Fragment} from 'react';
import styled from 'styled-components';
import {Grid, Box, Notes} from 'spectacle';

type Props = {
	step: number;
}

const Wrapper = styled.div`
	border-bottom: 3em solid rgba(6,2,75,0.1);
	background: linear-gradient(-45deg,rgba(255,138,18,0.4),rgba(6,2,75,0.7),rgba(6,150,139,0.5),rgba(55,204,236,0.2));
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	padding: 11em 2em 1em;
	border-radius: 0 0 45% 45%;

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
`;

const Header = styled.h1`
	text-transform: uppercase;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	color: #fff;
	font-size: 1.35em;
	margin: 0;
`;

const StepBox = styled(Box)`
	opacity: 0;
	transition: opacity 1s ease-in;

	&.active {
		opacity: 1;
	}
`;

const SubHeader = styled.h2`
	color: #eee;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	font-size: 1.2em;
`;

const SlideComponent: FC<Props> = ({step}) =>
	<Fragment>
		<Wrapper>
			<Grid gridTemplateColumns="1fr 1fr 1fr 1fr">
				<StepBox className={step > -1 ? 'active' : ''}>
					<Header>00 | About Me</Header>
					<SubHeader>Who Am I?</SubHeader>
				</StepBox>
				<StepBox
					className={step > 0 ? 'active' : ''}
					marginTop="14em">
					<Header>01 | Machine Learning</Header>
					<SubHeader>Machine Learning Intro</SubHeader>
				</StepBox>
				<StepBox className={step > 1 ? 'active' : ''}>
					<Header>02 | Tensorflow.js</Header>
					<SubHeader>ML with tfjs</SubHeader>
				</StepBox>
				<StepBox
					className={step > 2 ? 'active' : ''}
					marginTop="14em">
					<Header>03 | Examples</Header>
					<SubHeader>In an app</SubHeader>
				</StepBox>
			</Grid>
			<Notes>
				<p>
					I&apos;d first like to introduce a little about myself
				</p>
				<p>
					Next, we will take a look at the main concepts of machine learning
				</p>
				<p>
					After that, we will go over using Tensorflow.js to produce training and predictions
				</p>
				<p>
					Finally, we have a special demo using a trained model with Tensorflow
				</p>
			</Notes>
		</Wrapper>
	</Fragment >;

export default SlideComponent;
