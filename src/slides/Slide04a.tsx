import React, {FC} from 'react';
import styled from 'styled-components';
import {Grid, Box, UnorderedList, ListItem, Appear} from 'spectacle';
import {VictoryPie} from 'victory';

type Props = {
	step: number;
}

const Svg = styled.svg`
`;

const DATA = [
	{x: 1, y: 100, opacity: 1}
];

const SlideComponent: FC<Props> = ({step}) =>
	<Grid gridTemplateColumns="1fr 2fr">
		<Box>
			<Svg
				width={500}
				height={500}>
				{
					step > -1 ?
						<VictoryPie
							standalone={false}
							animate={{duration: 1000}}
							width={500}
							height={500}
							data={DATA}
							radius={175}
							innerRadius={0}
							labels={['Artificial Intelligence']}
							labelRadius={({radius}): number => typeof radius === 'number' ? radius - 35 : 0}
							style={{
								data: {
									fill: 'var(--training)',

									// @ts-ignore
									opacity: (d: {opacity: number}): number => d.opacity
								}
							}}
						/> :
						null
				}
				{
					step > 0 ?
						<VictoryPie
							standalone={false}
							animate={{duration: 1000}}
							width={500}
							height={500}
							data={DATA}
							radius={125}
							innerRadius={0}
							labels={['Machine Learning']}
							labelRadius={({radius}): number => typeof radius === 'number' ? radius - 40 : 0}
							style={{
								data: {
									fill: 'var(--learning)',

									// @ts-ignore
									opacity: (d): number => d.opacity
								}
							}}
						/> :
						null
				}
				{
					step > 1 ?
						<VictoryPie
							standalone={false}
							animate={{duration: 1000}}
							width={500}
							height={500}
							data={DATA}
							radius={75}
							innerRadius={0}
							labels={['Deep Learning']}
							labelRadius={1}
							style={{
								data: {
									fill: 'var(--prediction)',

									// @ts-ignore
									opacity: (d): number => d.opacity
								}
							}}
						/> :
						null
				}
			</Svg>
		</Box>
		<Box>
			<UnorderedList>
				{/*
 // @ts-ignore*/}
				<Appear elementNum={0}>
					<ListItem>
						Artificial Intelligence
					</ListItem>
				</Appear>
				{/*
 // @ts-ignore*/}
				<Appear elementNum={1}>
					<ListItem>
						Machine learning
					</ListItem>
				</Appear>
				{/*
 // @ts-ignore*/}
				<Appear elementNum={2}>
					<ListItem>
						Deep Learning
					</ListItem>
				</Appear>
			</UnorderedList>
		</Box>
	</Grid>;

export default SlideComponent;
