import React, {FC, Fragment} from 'react';
import styled from 'styled-components';
import {Image, Grid, Box, Notes} from 'spectacle';
import robot from '../assets/images/robot-icon.png';
import cameronImage from '../assets/images/cameron.jpg';
import mediumLogo from '../assets/images/medium-logo.png';
import twitterLogo from '../assets/images/twitter-logo.png';
import githubLogo from '../assets/images/github-logo.png';

const Header = styled.h1`
	text-transform: uppercase;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	color: #fff;
	max-width: 7em;
	font-size: 8em;
	margin: 0;
	text-align: center;
`;

const SubHeader = styled.h2`
	color: #eee;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	font-size: 2em;
	text-align: center;
`;

const StyledImage = styled(Image)`
	width: 25%;
	margin: calc(50% - 12.5%);
`;

const StyledGrid = styled(Grid)`
	margin-top: 3em;
`;

const MetaImage = styled(Image)`
	width: 15%;
	height: 15%;
	margin-right: 1em;
	vertical-align: middle;
`;

const MetaLink = styled.a`
	margin-right: 1em;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	color: #fff;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

const SlideComponent: FC = () =>
	<Fragment>
		<Grid gridTemplateColumns="1fr 2fr">
			<Box>
				<Header>Welcome to the Machine:</Header>
				<SubHeader>Machine Learning in the Browser with JS</SubHeader>
			</Box>
			<Box>
				<StyledImage src={robot} />
			</Box>
		</Grid>
		<StyledGrid gridTemplateColumns="1fr 1fr 1fr 1fr">
			<Box>
				<MetaImage src={cameronImage} />
				<MetaLink>
					Cameron Manavian
				</MetaLink>
			</Box>
			<Box>
				<MetaImage src={twitterLogo} />
				<MetaLink href="https://twitter.com/camsjams">
					@camsjams
				</MetaLink>
			</Box>
			<Box>
				<MetaImage src={githubLogo} />
				<MetaLink href="https://github.com/camsjams">
					@camsjams
				</MetaLink>
			</Box>
			<Box>
				<MetaImage src={mediumLogo} />
				<MetaLink href="https://medium.com/@cameron.manavian">
					@cameron.manavian
				</MetaLink>
			</Box>
		</StyledGrid>
		<Notes>
			<p>
				Hello everyone, my name is Cameron Manavian
			</p>

			Today I am going to talk about Machine Learning, and how it pertains to JavaScript and the browser
		</Notes>
	</Fragment>;

export default SlideComponent;
