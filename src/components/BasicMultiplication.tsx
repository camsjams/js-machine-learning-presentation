import React, {PureComponent, ReactNode} from 'react';
import styled from 'styled-components';
import initialize, {learn} from '../utils/basicMultiplication';
import {Options} from '../utils/plot';

type Props = {
	step: number;
}

const Graph = styled.div`
	padding: 10px;
`;

class BasicMultiplication extends PureComponent<Props> {
	componentDidMount(): void {
		this.options = initialize(3, 9);
	}

	async componentDidUpdate(prevProps: Props): Promise<void> {
		if (prevProps.step === 2 && this.props.step === 3) {
			await learn(this.options);
		}
	}

	options?: Options;

	render(): ReactNode {
		return <Graph id="graph" />;
	}
}

export default BasicMultiplication;
