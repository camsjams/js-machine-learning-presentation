import React, {PureComponent, ReactNode} from 'react';
import styled from 'styled-components';
import {VictoryTheme, VictoryChart, VictoryArea, VictoryGroup} from 'victory';

type ChartData = {
	x: number;
	y: number;
}

type Props = {}
type State = {
	isShifted: boolean;
	dataLeft: ChartData[];
	dataRight: ChartData[];
}

const DATA_LEFT: ChartData[] = [
	{x: 1, y: 10},
	{x: 2, y: 20},
	{x: 3, y: 15},
	{x: 4, y: 5},
	{x: 5, y: 2}
];

const DATA_RIGHT: ChartData[] = [
	{x: 1, y: 2},
	{x: 2, y: 5},
	{x: 3, y: 17},
	{x: 4, y: 25},
	{x: 5, y: 9}
];

const DATA_LEFT_SHIFTED: ChartData[] = [
	{x: 1, y: 9},
	{x: 2, y: 25},
	{x: 3, y: 17},
	{x: 4, y: 5},
	{x: 5, y: 2}
];

const DATA_RIGHT_SHIFTED: ChartData[] = [
	{x: 1, y: 9},
	{x: 2, y: 25},
	{x: 3, y: 17},
	{x: 4, y: 5},
	{x: 5, y: 2}
];

const Wrapper = styled.div`
	margin: 0 auto;
	width: 80vh;
`;

class SlideComponent extends PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			isShifted: false,
			dataLeft: DATA_LEFT,
			dataRight: DATA_RIGHT
		};
	}

	componentDidMount(): void {
		this.setStateInterval = window.setInterval(() => {
			this.setState({
				isShifted: !this.state.isShifted,
				dataLeft: this.state.isShifted ? DATA_LEFT : DATA_LEFT_SHIFTED,
				dataRight: this.state.isShifted ? DATA_RIGHT : DATA_RIGHT_SHIFTED
			});
		}, 4000);
	}

	setStateInterval: number

	render(): ReactNode {
		return <Wrapper>
			<VictoryChart
				theme={VictoryTheme.material}
				animate={{duration: 1000}}
				width={500}
				height={250}>
				<VictoryGroup
					animate={{duration: 1000}}
					style={{
						data: {strokeWidth: 3, fillOpacity: 0.4}
					}}
				>
					<VictoryArea
						style={{
							data: {fill: 'var(--learning)', stroke: 'var(--learning)'}
						}}
						interpolation="natural"
						data={this.state.dataLeft}
					/>
					<VictoryArea
						style={{
							data: {fill: 'var(--prediction)', stroke: 'var(--prediction)'}
						}}
						interpolation="natural"
						data={this.state.dataRight}
					/>
				</VictoryGroup>
			</VictoryChart>
		</Wrapper>;
	}
}

export default SlideComponent;
