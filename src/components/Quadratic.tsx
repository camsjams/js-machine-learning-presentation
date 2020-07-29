import React, {PureComponent, ReactNode, Fragment} from 'react';
import styled from 'styled-components';
import initialize, {learn} from '../utils/quadratic';
import {QuadOptions} from '../utils/plot';
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

class Quadratic extends PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			isLearning: false
		};

		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount(): void {
		this.options = initialize(
			{
				a: 4,
				b: 3,
				c: 2
			},
			{
				a: -3,
				b: 2,
				c: 7
			}
		);
	}

	componentDidUpdate(prevProps: Props): void {
		if (prevProps.step === 0 && this.props.step === 1) {
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

	options?: QuadOptions;

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
			{this.props.step === 2 && !this.state.isLearning && <Button onClick={this.handleClick}>Train</Button>}
		</Fragment>;
	}
}

export default Quadratic;
