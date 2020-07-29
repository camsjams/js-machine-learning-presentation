import * as tf from '@tensorflow/tfjs';

// @ts-ignore
import {indentNormalizer} from 'spectacle';
import plot, {Options, Values} from './plot';

const DATA_TOTAL = 100;

export const generateData = (totalItems: number, coefficient: number): Values => {
	let x: number[] = [];
	const y = [];

	const xs = tf.randomUniform([totalItems], -1, 1);
	for (let i = 0; i < totalItems; i++) {
		const data = xs.arraySync() as number[];
		x[i] = data[i];
	}

	x = x.sort((a, b) => a - b);

	for (let i = 0; i < totalItems; i++) {
		y[i] = coefficient * x[i];
	}

	return {x, y};
};

export const learn = async (options: Options): Promise<void> => {
	const learningVariable = tf.variable(tf.scalar(options.predictedValue));

	const predict = (x: tf.Tensor1D): tf.Tensor<tf.Rank> => tf.tidy(() =>
		learningVariable.mul(x));

	const loss = (prediction: tf.Tensor<tf.Rank>, labels: tf.Tensor1D): tf.Scalar =>
		prediction.sub(labels).square().mean();

	async function train(xs: tf.Tensor1D, ys: tf.Tensor1D): Promise<void> {
		const numIterations = 100;
		const learningRate = 0.25;
		const optimizer = tf.train.sgd(learningRate);

		for (let iter = 0; iter < numIterations; iter++) {
			const learnedNumber = learningVariable.dataSync()[0];
			options.data.learning = generateData(DATA_TOTAL, learnedNumber);
			plot({
				...options,
				learnedValue: learnedNumber
			});

			optimizer.minimize((): tf.Scalar => {
				const pred = predict(xs);
				return loss(pred, ys);
			});

			await tf.nextFrame();
		}
	}

	await train(tf.tensor1d(options.data.training.x), tf.tensor1d(options.data.training.y));
};

export default (actual: number, guess: number): Options => {
	const options: Options = {
		title: 'Multiplication',
		actualValue: actual,
		predictedValue: guess,
		learnedValue: undefined,
		data: {
			training: {x: [], y: []},
			prediction: {x: [], y: []},
			learning: {x: [], y: []}
		}
	};
	options.data.training = generateData(DATA_TOTAL, actual);
	options.data.prediction = generateData(DATA_TOTAL, guess);

	plot(options);
	return options;
};

export const codeBlock = indentNormalizer(`
const learn = async (options: Options): Promise<void> => {
	const learningVariable = tf.variable(tf.scalar(options.predictedValue));

	const predict = (x: tf.Tensor1D): tf.Tensor<tf.Rank> => tf.tidy(() =>
		learningVariable.mul(x));

	const loss = (prediction: tf.Tensor<tf.Rank>, labels: tf.Tensor1D): tf.Scalar =>
		prediction.sub(labels).square().mean();

	async function train(xs: tf.Tensor1D, ys: tf.Tensor1D): Promise<void> {
		const numIterations = 75;
		const learningRate = 0.25;
		const optimizer = tf.train.sgd(learningRate);

		for (let iter = 0; iter < numIterations; iter++) {
			const learnedNumber = learningVariable.dataSync()[0];
			options.data.learning = generateData(DATA_TOTAL, learnedNumber);
			plot({
				...options,
				learnedValue: learnedNumber
			});

			optimizer.minimize((): tf.Scalar => {
				const pred = predict(xs);
				return loss(pred, ys);
			});

			await tf.nextFrame();
		}
	}

	await train(tf.tensor1d(options.data.training.x), tf.tensor1d(options.data.training.y));
};`);
