import React, {PureComponent, ReactNode, Fragment} from 'react';
import styled from 'styled-components';
import initialize from '../utils/basicMultiplication';
import {learn} from '../utils/advancedMultiplication';
import {Options} from '../utils/plot';
import Button from './Button';

type Props = {
	step: number;
}

type State = {
	isLearning: boolean;
}

const Graph = styled.div`
	padding: 10px;
`;

class AdvancedMultiplication extends PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			isLearning: false
		};

		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount(): void {
		this.options = initialize(5.05, 6);
	}

	componentDidUpdate(prevProps: Props): void {
		if (prevProps.step === 1 && this.props.step === 2) {
			this.setState({
				isLearning: true
			});

			setTimeout(async () => {
				await learn(this.options);
				this.setState({
					isLearning: false
				});
			}, 100);
		}
	}

	options?: Options;

	async handleClick(): Promise<void> {
		this.setState({
			isLearning: true
		});

		setTimeout(async () => {
			await learn(this.options);
			this.setState({
				isLearning: false
			});
		}, 100);
	}

	render(): ReactNode {
		return <Fragment>
			<Graph id="graph" />
			{this.props.step === 2 && !this.state.isLearning && <Button onClick={this.handleClick}>Train More</Button>}
		</Fragment>;
	}
}

export default AdvancedMultiplication;
