// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import * as Plotly from 'plotly.js-dist';
import {round, cloneDeep} from 'lodash';

export type Values = {
	x: number[];
	y: number[];
}

export type LearningData = {
	training: Values;
	prediction: Values;
	learning: Values;
}

export type Options = {
	title: string;
	actualValue: number;
	predictedValue: number;
	learnedValue?: number;
	data: LearningData;
}

export type QuadInputs = {
	a: number;
	b: number;
	c: number;
}

export type QuadOptions = {
	title: string;
	actualInputs: QuadInputs;
	predictedInputs: QuadInputs;
	learnedInputs?: QuadInputs;
	data: LearningData;
}

const LAYOUT = {
	legend: {
		xanchor: 'left',
		yanchor: 'top',
		y: 1,
		x: 0,
		orientation: 'v'
	},
	title: {
		text: 'Chart',
		font: {
			family: 'Courier New, monospace',
			size: 24
		},
		xref: 'paper',
		x: 0.05
	},
	xaxis: {
		title: {
			text: 'Input (x)',
			font: {
				family: 'Courier New, monospace',
				size: 18,
				color: '#7f7f7f'
			}
		}
	},
	yaxis: {
		title: {
			text: 'Output (y)',
			font: {
				family: 'Courier New, monospace',
				size: 18,
				color: '#7f7f7f'
			}
		}
	}
};

const rnd = (val: number): number => round(val, 5);

const plot = ({actualValue, predictedValue, learnedValue, data, title}: Options): void => {
	const layout = cloneDeep(LAYOUT);
	layout.title.text = title;
	const trace1 = {
		x: data.training.x,
		y: data.training.y,
		mode: 'lines+markers',
		name: data.learning.x.length === 0 ? 'Training' : `Training [${actualValue}]`,
		marker: {size: 12}
	};

	const trace2 = {
		x: data.prediction.x,
		y: data.prediction.y,
		mode: 'lines+markers',
		name: `Initial Prediction [${predictedValue}]`,
		marker: {size: 12}
	};

	let trace3 = {};
	if (data.learning) {
		const prediction = learnedValue !== undefined ? ` [${rnd(learnedValue)}]` : '';
		trace3 = {
			x: data.learning.x,
			y: data.learning.y,
			mode: 'lines+markers',
			name: `Learning Prediction${prediction}`,
			marker: {size: 12}
		};
	}

	Plotly.newPlot('graph', [trace1, trace2, trace3], layout, {displayModeBar: false});
};

export default plot;

const getFormula = (a: number, b: number, c: number): string =>
	`${rnd(a)}x^2 + ${rnd(b)}x + ${rnd(c)}`;

export const plotQuad = ({actualInputs, predictedInputs, learnedInputs, data, title}: QuadOptions): void => {
	const layout = cloneDeep(LAYOUT);
	layout.title.text = title;
	const trace1 = {
		x: data.training.x,
		y: data.training.y,
		mode: 'lines+markers',
		name: data.learning.x.length === 0 ?
			'Training' :
			`Training [${getFormula(actualInputs.a, actualInputs.b, actualInputs.c)}]`,
		marker: {size: 12}
	};
	const trace2 = {
		x: data.prediction.x,
		y: data.prediction.y,
		mode: 'lines+markers',
		name: `Initial Prediction [${getFormula(predictedInputs.a, predictedInputs.b, predictedInputs.c)}]`,
		marker: {size: 12}
	};

	let trace3 = {};
	if (data.learning) {
		const prediction = learnedInputs !== undefined ?
			` [${getFormula(learnedInputs.a, learnedInputs.b, learnedInputs.c)}]` :
			'';
		trace3 = {
			x: data.learning.x,
			y: data.learning.y,
			mode: 'lines+markers',
			name: `Learning Prediction${prediction}`,
			marker: {size: 12}
		};
	}

	Plotly.newPlot('graph', [trace1, trace2, trace3], layout, {displayModeBar: false});
};
