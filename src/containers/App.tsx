/* eslint-disable max-len */
import React, {FC, ReactNode, Fragment} from 'react';
import styled from 'styled-components';
import {
	Deck, Slide, Stepper, Heading, Text,
	UnorderedList, OrderedList, ListItem,
	Appear, Notes, CodePane,
	Image,

	// @ts-ignore
	TableHeader, TableBody, TableCell, TableRow
} from 'spectacle';
import GlobalStyle from '../styles/GlobalStyle';
import Slide01 from '../slides/Slide01';
import Slide02 from '../slides/Slide02';
import Slide03 from '../slides/Slide03';
import Slide04a from '../slides/Slide04a';
import Slide04b from '../slides/Slide04b';
import Slide04c from '../slides/Slide04c';
import {codeBlock as codeBlockBasicMulti} from '../utils/basicMultiplication';
import {codeBlock as codeBlockAdvMulti} from '../utils/advancedMultiplication';
import Quadratic from '../components/Quadratic';
import FixedTable from '../components/FixedTable';
import run from '../assets/images/bg/monochrome-photo-of-person-tying-shoes-3432075.jpg';
import robot from '../assets/images/bg/wooden-robot-6069.jpg';
import course from '../assets/images/andrew-ng-course.png';
import tfLogo from '../assets/images/bg/tf_logo.svg';
import tfSmallLogo from '../assets/images/tf.png';
import spectacleLogo from '../assets/images/spectacle.svg';
import plotlyLogo from '../assets/images/plotly.svg';
import victoryLogo from '../assets/images/victory.svg';
import caffeineLogo from '../assets/images/caffeine-chemistry.png';
import kaggleLogo from '../assets/images/kaggle.png';
import reactLogo from '../assets/images/react.svg';

const StyledTableCell = styled(TableCell)`
	text-align: right;
`;

const theme = {
	colors: {
		primary: 'var(--prediction)',
		secondary: 'var(--training)',
		subHeader: 'var(--subHeader)',
		backgroundColor: 'red'
	},
	fontSizes: {
		header: '64px',
		paragraph: '28px'
	}
};

const SectionImage = styled(Image)`
	width: 50%;
	height: 50%;
	margin: 0 auto;
`;

const SlideVideo = styled.video`
	width: 75%;
	height: 75%;
	margin: 0 auto;
`;

const EndLogo = styled(Image)`
	width: 3em;
	height: auto;
	margin: 0.5em 0.5em 0;
`;

const CourseLogo = styled(Image)`
	width: 10em;
	height: auto;
	margin: 0.5em 0.5em 0;
`;

const gradientBg = 'linear-gradient(28deg, rgba(6,2,75,1) 0%, rgba(6,150,139,1) 68%, rgba(55,204,236,1) 97%);';
const gradientBgSection = 'linear-gradient(28deg,rgb(82, 78, 151) 0%,rgb(16, 253, 235) 68%,rgb(255, 255, 255) 97%);background-position: center;';

const App: FC = () =>
	<Fragment>
		<GlobalStyle />
		<Deck theme={theme}>
			<Slide backgroundImage={gradientBg}>
				<Slide01 />
			</Slide>
			<Slide backgroundImage="url(/bg/greg-rakozy-oMpAz-DN-9I-unsplash.jpg)">
				<Heading style={{display: 'none'}}>&nbsp;</Heading>
				<Stepper
					values={[0, 1, 2, 3]}>
					{(value, step): ReactNode => <Slide02 step={step} />}
				</Stepper>
			</Slide>
			<Slide transitionEffect="fade">
				<Heading>00 | About Me</Heading>
				<Heading
					color="subHeader"
					fontSize="h2">
					Who Am I?
				</Heading>
			</Slide>
			<Slide>
				<Heading>About Me</Heading>
				<UnorderedList>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={0}>
						<ListItem>
							Father and Husband 👨‍👩‍👧
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={1}>
						<ListItem>
							From Southern California 🌊
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={2}>
						<ListItem>
							CTO at Libretto 🏢
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={3}>
						<ListItem>
							15+ years of experience 👨‍💻
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={4}>
						<ListItem>
							Codes to Heavy Metal and Neo 80s music 🤘
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={5}>
						<ListItem>
							I have four cats and two dogs 🐕🐈‍
						</ListItem>
					</Appear>
				</UnorderedList>
			</Slide>
			<Slide backgroundImage={gradientBgSection}>
				<Heading>01 | Machine Learning</Heading>
				<Heading
					color="subHeader"
					fontSize="h3">
					Machine Learning Introduction
				</Heading>
				<SectionImage
					src={robot} />
			</Slide>
			<Slide>
				<Heading>ML: Artificial Intelligence</Heading>
				<Stepper
					values={[0, 1, 2]}>
					{(value, step): ReactNode => <Slide04a step={step} />}
				</Stepper>
				<Notes>
					<p>
						Artificial Intelligence is the broad study of recreating human mental functions with computer programs
					</p>
					<p>
						Machine learning is the science of getting computers to act without being explicitly programmed
					</p>
					<p>
						Deep Learning is a subfield of machine learning concerned with algorithms inspired by the structure and function of the brain called artificial neural networks
					</p>
					<p>
						So when we talk about Machine Learning, we are also talking about a subset of artificial intelligence, and Machine learning is helpful in many aspects of AI
					</p>
					<p>
						Today we will just be covering Machine Learning
					</p>
				</Notes>
			</Slide>
			<Slide>
				<Heading>ML: The Basics</Heading>
				<UnorderedList>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={0}>
						<ListItem>
							Using data and outputs to create a program
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={1}>
						<ListItem>
							Common Steps

							<OrderedList>
								{/*
 // @ts-ignore*/}
								<Appear elementNum={2}>
									<ListItem>Find or Collect Data</ListItem>
								</Appear>
								{/*
 // @ts-ignore*/}
								<Appear elementNum={3}>
									<ListItem>Evaluate Data</ListItem>
								</Appear>
								{/*
 // @ts-ignore*/}
								<Appear elementNum={4}>
									<ListItem>Train Model</ListItem>
								</Appear>
								{/*
 // @ts-ignore*/}
								<Appear elementNum={5}>
									<ListItem>Evaluate Model</ListItem>
								</Appear>
								{/*
 // @ts-ignore*/}
								<Appear elementNum={6}>
									<ListItem>Iterate</ListItem>
								</Appear>
							</OrderedList>
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={7}>
						<ListItem>
							{/* NOT SHOWN, FIXES BUG FOR NESTED LIST*/}
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={8}>
						<ListItem>
							{/* NOT SHOWN, FIXES BUG FOR NESTED LIST*/}
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={9}>
						<ListItem>
							{/* NOT SHOWN, FIXES BUG FOR NESTED LIST*/}
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={10}>
						<ListItem>
							{/* NOT SHOWN, FIXES BUG FOR NESTED LIST*/}
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={7}>
						<ListItem>
							{/* NOT SHOWN, FIXES BUG FOR NESTED LIST*/}
						</ListItem>
					</Appear>
				</UnorderedList>
				<Notes>
					<p>
						With machine learning, we flip programming upside down, and extract a program using data and expect output
					</p>
					<p>
						There are five common steps with machine learning, and as always we want to shift left as much as possible
					</p>
					<p>
						By shifting left, we can save time in the long run, regardless
					</p>
					<p>
						Machine learning always starts with data, and if you&apos;re lucky, you dont have to collect it!
					</p>
					<p>
						Next, we need to evaluate the data, which can often be done manually by a human being
					</p>
					<p>
						Once we have some good data, we can split it into two buckets: training data and testing data
					</p>
					<p>
						This step is made to review the results, and possibly change models or address data issues
					</p>
				</Notes>
			</Slide>
			<Slide>
				<Heading>Aside: Shift Left</Heading>
				<Slide03 />
				<Notes>
					<p>
						Shifting left is not just for software development!
					</p>
					<p>
						Shifting left ensures that we have taken a deep dive into our training set, and evaluated each feature and verified the data row by row
					</p>
				</Notes>
			</Slide>
			<Slide backgroundImage="url(/bg/osman-rana-k8GxxWaIEAo-unsplash.jpg)">
				<Heading>ML: Applications</Heading>
				<UnorderedList backgroundColor="rgba(0,0,0,0.75)">
					{/*
 // @ts-ignore*/}
					<Appear elementNum={0}>
						<ListItem>
							Speech Recognition
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={1}>
						<ListItem>
							Predictions
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={2}>
						<ListItem>
							Object detection
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={3}>
						<ListItem>Recommendations</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={4}>
						<ListItem>Medical Diagnosis</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={5}>
						<ListItem>Autonomy and Path finding</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={6}>
						<ListItem>Board Games</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={7}>
						<ListItem>Video Games</ListItem>
					</Appear>
				</UnorderedList>
				<Notes>
					<p>
						Machine learning has countless applications
					</p>
					<p>
						Its primary use case is to perform predictions, but can also provide object detection, Recommendations, and medical insight
					</p>
					<p>
						Machine learning can be used in environments to perform Autonomous movements and path finding
					</p>
					<p>
						It can also be used to handle risk and reward in games, such as video games like starcraft or super smash bros, or board games like chess, go, and checkers
					</p>
				</Notes>
			</Slide>
			<Slide backgroundImage="url(/bg/black-lines-on-wall.jpg)">
				<Heading>ML: Features and Labels</Heading>
				<UnorderedList backgroundColor="rgba(0,0,0,0.75)">
					{/*
 // @ts-ignore*/}
					<Appear elementNum={0}>
						<ListItem>
							The input X (feature) to the output Y (label)
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={1}>
						<ListItem>
							A feature can be a single column (univariate)
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={2}>
						<ListItem>
							Features can be multiple columns (multivariate)
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={3}>
						<ListItem>
							More Features = Improved Prediction
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={4}>
						<ListItem>
							More Rows of Data = Improved Prediction
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={5}>
						<ListItem>
							Engineered Features = Greatly Improved Prediction
						</ListItem>
					</Appear>
				</UnorderedList>
				<Notes>
					<p>
						When discussing data in regards to machine learning, you will often hear the word features, labels or training sets
					</p>
					<p>
						If thought about mathematically, features are the input x to a formula for a value y
					</p>
					<p>
						Labels are the name of outputs in Machine learning
					</p>
					<p>
						When dealing with data, adding more columns of features generally improves prediction
					</p>
					<p>
						additionally, adding more data generally improves prediction
					</p>
					<p>
						By leveraging domain experts and curating data, you can create additional feature inputs to increase model performance
					</p>
				</Notes>
			</Slide>
			<Slide>
				<Heading>ML: Feature Example</Heading>
				<Stepper
					values={[0, 1, 2, 3]}>
					{(value, step): ReactNode =>
						<FixedTable>
							<TableHeader>
								<TableRow>
									<StyledTableCell style={{width: '40%'}}>Name</StyledTableCell>
									<StyledTableCell style={{width: '30%'}}>Square Feet</StyledTableCell>
									<StyledTableCell style={{width: '30%'}}>Price</StyledTableCell>
								</TableRow>
							</TableHeader>
							<TableBody>
								{step > -1 &&
									<TableRow>
										<StyledTableCell>House A</StyledTableCell>
										<StyledTableCell>1000</StyledTableCell>
										<StyledTableCell>200,000</StyledTableCell>
									</TableRow>
								}
								{step > 0 &&
									<TableRow>
										<StyledTableCell>House B</StyledTableCell>
										<StyledTableCell>2000</StyledTableCell>
										<StyledTableCell>500,000</StyledTableCell>
									</TableRow>
								}
								{step > 1 &&
									<TableRow>
										<StyledTableCell>House C</StyledTableCell>
										<StyledTableCell>3000</StyledTableCell>
										<StyledTableCell>510,000</StyledTableCell>
									</TableRow>
								}
							</TableBody>
						</FixedTable>
					}</Stepper>
				<Notes>
					<p>
						here is a sample of a classic machine learning data set exercise using houses and their sale price
					</p>
					<p>
						As we look through the data, we see two features in the first two columns: the house name and its square footage
					</p>
					<p>
						The third column, Price, is our Y value, also called the label
					</p>
					<p>
						At first glance, the data looks pretty accurate
					</p>
					<p>
						Once we look deeper though, we see an odd issue
					</p>
					<p>
						The first house is 1000 square feet and sells for 200k, the second house is double that size, and sells for more than double the price
					</p>
					<p>
						But the third house is 3000 square feet but sold for nearly the same price as the second house
					</p>
					<p>
						There must be some hidden information tucked away in another feature that we dont have in this data
					</p>
				</Notes>
			</Slide>
			<Slide>
				<Heading>ML: Feature(s) Example</Heading>
				<FixedTable>
					<TableHeader>
						<TableRow>
							<StyledTableCell style={{width: '20%'}}>Name</StyledTableCell>
							<StyledTableCell style={{width: '20%'}}>Bedrooms</StyledTableCell>
							<StyledTableCell style={{width: '20%'}}>Bathrooms</StyledTableCell>
							<StyledTableCell style={{width: '20%'}}>Square Feet</StyledTableCell>
							<StyledTableCell style={{width: '20%'}}>Price</StyledTableCell>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<StyledTableCell>House A</StyledTableCell>
							<StyledTableCell>2</StyledTableCell>
							<StyledTableCell>1</StyledTableCell>
							<StyledTableCell>1000</StyledTableCell>
							<StyledTableCell>200,000</StyledTableCell>
						</TableRow>
						<TableRow>
							<StyledTableCell>House B</StyledTableCell>
							<StyledTableCell>2</StyledTableCell>
							<StyledTableCell>3</StyledTableCell>
							<StyledTableCell>2000</StyledTableCell>
							<StyledTableCell>500,000</StyledTableCell>
						</TableRow>
						<TableRow>
							<StyledTableCell>House C</StyledTableCell>
							<StyledTableCell>1</StyledTableCell>
							<StyledTableCell>1</StyledTableCell>
							<StyledTableCell>3000</StyledTableCell>
							<StyledTableCell>510,000</StyledTableCell>
						</TableRow>
					</TableBody>
				</FixedTable>
				<Notes>
					<p>
						here we add two additional features
					</p>
					<p>
						Now we can figure out why the third house price is so low when compared to the second house
					</p>
					<p>
						Ah - the third house has only one bed and one bath - not very practical. Tt looks like someone bought it for 510k
					</p>
				</Notes>
			</Slide>
			<Slide>
				<Heading>ML: Categories</Heading>
				<UnorderedList>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={0}>
						<ListItem>
							Supervised (regression or classification)
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={1}>
						<ListItem>
							Unsupervised (clustering)
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={2}>
						<ListItem>
							Reinforcement Learning (environment) - also called RL
						</ListItem>
					</Appear>
				</UnorderedList>
				<Notes>
					<p>
						Machine learning can be broken down into three types
					</p>
					<p>
						supervised machine learning, which uses regressions and classifications, provides clear instructions about the solution and the steps to solve a problem
					</p>
					<p>
						unsupervised machine learning is used when no target is set or desired, and is more exploratory, providing a result of clusters highly useful for Recommendations or disease correlation
					</p>
					<p>
						Reinforcement learning is training done in a specific environment, such as video games, self driving cars, etc, where a failure or reward is simple to determine
					</p>
					<p>
						WE wont touch on all of these today, since these are available in most Machine Learning courses
					</p>
				</Notes>
			</Slide>
			<Slide
				backgroundImage={gradientBgSection}
				transitionEffect="fade">
				<Heading>02 | Tensorflow.js</Heading>
				<Heading
					color="subHeader"
					fontSize="h3">
					ML + tfjs
				</Heading>
				<SectionImage
					src={tfLogo} />
			</Slide>
			<Slide>
				<Heading>Tensorflow.js: Intro</Heading>
				<UnorderedList>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={0}>
						<ListItem>
							Run existing models
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={1}>
						<ListItem>
							Leverage browser APIs like Webcams, Microphones, Location
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={2}>
						<ListItem>
							Develop ML with JavaScript
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={3}>
						<ListItem>
							Retrain existing models
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={4}>
						<ListItem>
							Use ML directly in the browser or in Node.js
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={4}>
						<ListItem>
							Load and run models produced by Cloud AutoML
						</ListItem>
					</Appear>
				</UnorderedList>
				<Notes>
					<p>
						Use off-the-shelf JavaScript models or convert Python TensorFlow models to run in the browser or under Node.js.
					</p>
					<p>
						Retrain pre-existing ML models using your own data.
					</p>
				</Notes>
			</Slide>
			<Slide backgroundImage="url(/bg/web-text-1591060.jpg)">
				<Heading>Tensorflow.js: Why JavaScript?</Heading>
				<UnorderedList backgroundColor="rgba(0,0,0,0.55)">
					{/*
 // @ts-ignore*/}
					<Appear elementNum={0}>
						<ListItem>
							You already know it
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={1}>
						<ListItem>
							You can focus on the math
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={2}>
						<ListItem>
							You can visualize easily
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={3}>
						<ListItem>
							You can leverage <em>any</em> GPU via WebGL
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={4}>
						<ListItem>
							You don&apos;t have to muck around with GPU drivers
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={5}>
						<ListItem>
							You can deploy your application into a widely-accessible environment
						</ListItem>
					</Appear>
				</UnorderedList>
			</Slide>
			<Slide>
				<Heading>Tensorflow.js: Platforms</Heading>
				<UnorderedList>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={0}>
						<ListItem>
							TensorFlow.js CPU Backend, Node
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={1}>
						<ListItem>
							TensorFlow.js WebGL Backend, Browser
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={2}>
						<ListItem>
							TensorFlow.js Node, Node + TensorFlow C++
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={3}>
						<ListItem>
							TensorFlow.js WASM, Browser
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={4}>
						<ListItem>
							TensorFlow.js React Native
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={5}>
						<ListItem>
							TensorFlow.js WebGPU, Browser
						</ListItem>
					</Appear>
				</UnorderedList>
				<Notes>
					<p>
						As of right now, the fastest backend is the WebGL version that runs in the browser, with the GPU backend on Node being second
					</p>
				</Notes>
			</Slide>
			<Slide backgroundImage={gradientBgSection}>
				<Heading>03 | Examples</Heading>
				<Heading fontSize="h3">Let&apos;s Run Code!</Heading>
				<SectionImage
					src={run} />
			</Slide>
			<Slide>
				<Heading>Example 1 - Demo</Heading>
				<Stepper
					values={[0, 1, 2, 3]}>
					{(value, step): ReactNode => <Slide04b step={step} />}
				</Stepper>
				<Notes>
					<p>
						Lets take a look at a table of data, typically with maching learning you want a lot more data
					</p>
					<p>
						If this were a live audience, i&apos;d probably ask - what are we doing to get from the Input to Result
					</p>
					<p>
						Somebody would likely yell out &laquo;Multiply Input by 3&raquo;, which is correct!
					</p>
					<p>
						As you can see in this table, we can add in the hidden formula to make the process from Input to Result much more obvious
					</p>
					<p>
						Here I&apos;ve charted two different data sets
					</p>
					<p>
						In the blue, we have our training set data which displays the relationship of the Input (graphed as X), to the Result (graphed as Y)
					</p>
					<p>
						In the orange, we have our wild guess of 9 as the coefficient that converts a data set of Xs to Ys
					</p>
					<p>
						When I enable the training process, you will see a third set that that shows the number being discovered over multiple iterations of learning
					</p>
					<p>
						Each new iteration starts with a more refined learned number input, which slowly moves our prediction towards the target of 3
					</p>
					<p>
						Eventually our script is able to determine which value is the coefficient of X that creates Y, or how to get from Input to Result
					</p>
				</Notes>
			</Slide>
			<Slide>
				<Heading>Example 1 - Code</Heading>
				<Stepper
					defaultValue={[]}
					values={[[2, 2], [3, 5], [6, 8], [16, 17], [22, 27]]}>
					{(value): ReactNode =>
						<CodePane
							autoFillHeight={true}
							highlightStart={value[0]}
							highlightEnd={value[1]}
							fontSize={18}
							language="javascript">
							{codeBlockBasicMulti}
						</CodePane>
					}
				</Stepper>
				<Notes>
					<p>
						Lets glance at the code behind this process, which is using Tensorflow.js as the main library
					</p>
					<p>
						First we create a variable to store the learning output. This variable will update as we go through training
					</p>
					<p>
						Next we create a prediction function to help convert an X input to a Y output, we have some secret information that allows us to tell the script to multiply X by the coefficient
					</p>
					<p>
						Then we create a loss function, which in this case is just a root mean square error. The results in an value that is always non-negative.
					</p>
					<p>
						The root mean square error approaches 0, and being equal to zero would indicate a perfect fit to the data (which is rarely achieved)
					</p>
					<p>
						Now we start looping through our training sessions, each time at the top creating a new learning set with the updated predicted number - this is just to help visualize
					</p>
					<p>
						We then tell our Tensorflow optimizer to use our prediction and loss functions and minimize based on the results
					</p>
				</Notes>
			</Slide>
			<Slide>
				<Heading>Example 2 - Demo</Heading>
				<Stepper
					values={[0, 1, 2]}>
					{(value, step): ReactNode => <Slide04c step={step} />}
				</Stepper>
				<Notes>
					<p>
						In this example, we explore a data set where we dont know whats happening to the data, its more abstract
					</p>
					<p>
						WE can only surmise that some kind of operation is happening to the input to get the result, perhaps some kind of multiplication
					</p>
					<p>
						In fact, the operation does look to be multiplication, and our algorithm is able to determine the multiplier using another machine learning process
					</p>
					<p>
						But this one is different
					</p>
				</Notes>
			</Slide>
			<Slide>
				<Heading>Example 2 - Code</Heading>
				<Stepper
					defaultValue={[]}
					values={[[2, 2], [3, 5], [6, 12], [14, 18], [20, 33]]}>
					{(value): ReactNode =>
						<CodePane
							autoFillHeight={true}
							highlightStart={value[0]}
							highlightEnd={value[1]}
							fontSize={18}
							language="javascript">
							{codeBlockAdvMulti}
						</CodePane>
					}
				</Stepper>
				<Notes>
					<p>
						Here is the code used to find the correct operation to modify the input with
					</p>
					<p>
						First we create a model using Sequential, useful for linear regression
					</p>
					<p>
						We take our data sets and convert them into one dimensional tensors to feed into the model
					</p>
					<p>
						next we configure the model by informing about the shape of our data, a one dimensional array
					</p>
					<p>
						Creating the loss function is quicker in this version, we can just tell TensorFlow to use the mean squared error
					</p>
					<p>
						This time around we dont know what kind of operation is occurring to transform x into y, so we use model.fit
					</p>
					<p>
						as a matter of fact, we end up writing less code and let the model.fit do most of the work for us, as we can tell it to run 100 times with teh epochs option, to randomize the order, and to split the data into a training and testing set
					</p>
				</Notes>
			</Slide>
			<Slide>
				<Heading>Example 3 - Demo</Heading>
				<Stepper
					values={[0, 1, 2]}>
					{(value, step): ReactNode => <Quadratic step={step} />}
				</Stepper>
				<Notes>
					<p>
						Here is a model that is attempting to solve the coefficients of a quadratic function
					</p>
					<p>
						Over time it will get closer and closer to the right answer
					</p>
					<p>
						Since this problem is more complicated, we need to run the learning routine with more data
					</p>
					<p>
						Hmm dont worry, we wont spend all day watching this, which brings me to my next point
					</p>
				</Notes>
			</Slide>
			<Slide>
				<Heading>Training Takes Time!</Heading>
				<SlideVideo
					loop
					autoPlay>
					<source
						src="/bg/milky-way-galaxy.mp4"
						type="video/mp4" />
				</SlideVideo>
				<Notes>
					<p>
						Training a model takes time, and depending on the data set and hardware you have, it could take a few minutes up to a several hours
					</p>
					<p>
						The bigger the data set, the better, but it comes at a price of more time spent training
					</p>
					<p>
						This again is why we want to shift left and ensure proper data validity
					</p>
					<p>
						It also helps to test with small subsets first.
					</p>
				</Notes>
			</Slide>
			<Slide>
				<Heading>Example 4 - The State of JS 2019</Heading>
				<Heading fontSize="h3">Salary Calculator</Heading>
				<UnorderedList>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={0}>
						<ListItem>
							21,682 rows of data totaling 69.26 MB
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={1}>
						<ListItem>
							After data filtering, reduced to ~20,000 useful rows
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={2}>
						<ListItem>
							Models are trained in the browser
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={3}>
						<ListItem>
							Exported to a portable format
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={4}>
						<ListItem>
							Models are loaded into application at runtime
						</ListItem>
					</Appear>
				</UnorderedList>
			</Slide>
			<Slide>
				<Heading>Example 4 - The Data</Heading>
				<UnorderedList>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={0}>
						<ListItem>
							Developer’s happiness with each category of JavaScript
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={1}>
						<ListItem>
							Features in JavaScript they know and use
						</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={2}>
						<ListItem>Opinions on the current state of JavaScript</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={3}>
						<ListItem>Tools/Frameworks/Libraries used in day-to-day</ListItem>
					</Appear>
					{/*
 // @ts-ignore*/}
					<Appear elementNum={4}>
						<ListItem>Any flavors of JS they might use</ListItem>
					</Appear>
				</UnorderedList>
			</Slide>
			<Slide>
				<Heading>Example 4 - Live Demo</Heading>
				<Notes>
					<p>
						What’s the least surprising revelation from this Machine Learning model?
					</p>
					<p>
						The topmost important feature in this data set is a JavaScript Engineer’s years of experience
					</p>
					<p>
						plenty of other minor nuances from the other data features may increase or decrease your expected salary
					</p>
				</Notes>
			</Slide>
			<Slide>
				<Heading>Further Reading and Credits</Heading>
				<Text align="center">
					<p>
						<a href="https://www.coursera.org/learn/machine-learning">
							<CourseLogo src={course} />
						</a>	GitHub (TBA) | Medium (TBA)
					</p>
					<EndLogo src={tfSmallLogo}
						width="2em !important" />
					<EndLogo src={plotlyLogo} />
					<EndLogo src={spectacleLogo} />
					<EndLogo src={victoryLogo} />
					<EndLogo src={reactLogo} />
					<EndLogo src={kaggleLogo} />
					<EndLogo src={caffeineLogo} />
				</Text>
				<Notes>
					<p>
						Check out what is considered the best starting point for Machine learning on Coursera with Andrew Ng&apos;s course
					</p>
					<p>
						Special thanks to all the great resources used, Tensorflow, Plotly, Spectacle, Victory, React, Kaggle, and caffeine
					</p>
				</Notes>
			</Slide>
		</Deck>
	</Fragment>
	;

export default App;
