import * as tf from '@tensorflow/tfjs';

// @ts-ignore
import {indentNormalizer} from 'spectacle';
import {plotQuad, Values, QuadInputs, QuadOptions} from './plot';

const DATA_TOTAL = 100;

// eslint-disable-next-line max-statements
const generateData = (totalItems: number, {a, b, c}: QuadInputs): Values => {
	let x = [];
	const y = [];

	const xs = tf.randomUniform([totalItems], -1, 1);
	for (let i = 0; i < totalItems; i++) {
		const data = xs.arraySync() as number[];
		x[i] = data[i];
	}

	x = x.sort((aVal, bVal) => aVal - bVal);

	for (let i = 0; i < totalItems; i++) {
		const val = x[i];

		// y = a * x^2              + b       + c
		y[i] = a * Math.pow(val, 2) + b * val + c;
	}

	const ymin = Math.min(...y);
	const ymax = Math.max(...y);
	const yrange = ymax - ymin;

	for (let i = 0; i < totalItems; i++) {
		y[i] = (y[i] - ymin) / yrange;
	}

	return {x, y};
};

export const learn = async (opts: QuadOptions): Promise<void> => {
	const learningA = tf.variable(tf.scalar(opts.learnedInputs ? opts.learnedInputs.a : opts.predictedInputs.a));
	const learningB = tf.variable(tf.scalar(opts.learnedInputs ? opts.learnedInputs.b : opts.predictedInputs.b));
	const learningC = tf.variable(tf.scalar(opts.learnedInputs ? opts.learnedInputs.c : opts.predictedInputs.c));

	const predict = (x: tf.Tensor1D): tf.Tensor<tf.Rank> =>
		tf.tidy(() => learningA.mul(x.square())
			.add(learningB.mul(x))
			.add(learningC));

	const loss = (prediction: tf.Tensor<tf.Rank>, labels: tf.Tensor1D): tf.Scalar =>
		prediction.sub(labels).square().mean();

	async function train(xs: tf.Tensor1D, ys: tf.Tensor1D): Promise<void> {
		const numIterations = 100;
		const learningRate = 0.25;
		const optimizer = tf.train.sgd(learningRate);

		for (let iter = 0; iter < numIterations; iter++) {
			const learnedInputs = {
				a: learningA.dataSync()[0],
				b: learningB.dataSync()[0],
				c: learningC.dataSync()[0]
			};
			opts.data.learning = generateData(DATA_TOTAL, learnedInputs);
			opts.learnedInputs = learnedInputs;
			plotQuad(opts);

			optimizer.minimize((): tf.Scalar => {
				const pred = predict(xs);
				return loss(pred, ys);
			});

			await tf.nextFrame();
		}
	}

	await train(tf.tensor1d(opts.data.training.x), tf.tensor1d(opts.data.training.y));
};

export default (actual: QuadInputs, guess: QuadInputs): QuadOptions => {
	const options: QuadOptions = {
		title: 'Fun With Quadratics',
		actualInputs: actual,
		predictedInputs: guess,
		learnedInputs: undefined,
		data: {
			training: {x: [], y: []},
			prediction: {x: [], y: []},
			learning: {x: [], y: []}
		}
	};
	options.data.training = generateData(DATA_TOTAL, actual);
	options.data.prediction = generateData(DATA_TOTAL, guess);

	plotQuad(options);
	return options;
};

export const codeBlock = indentNormalizer(`
const learn = async (options: Options): Promise<void> => {
	const learningA = tf.variable(tf.scalar(opts.learnedInputs ? opts.learnedInputs.a : opts.predictedInputs.a));
	const learningB = tf.variable(tf.scalar(opts.learnedInputs ? opts.learnedInputs.b : opts.predictedInputs.b));
	const learningC = tf.variable(tf.scalar(opts.learnedInputs ? opts.learnedInputs.c : opts.predictedInputs.c));

	const predict = (x: tf.Tensor1D): tf.Tensor<tf.Rank> =>
		tf.tidy(() => learningA.mul(x.square())
			.add(learningB.mul(x))
			.add(learningC));

	const loss = (prediction: tf.Tensor<tf.Rank>, labels: tf.Tensor1D): tf.Scalar =>
		prediction.sub(labels).square().mean();

	async function train(xs: tf.Tensor1D, ys: tf.Tensor1D): Promise<void> {
		const numIterations = 100;
		const learningRate = 0.25;
		const optimizer = tf.train.sgd(learningRate);

		for (let iter = 0; iter < numIterations; iter++) {
			const learnedInputs = {
				a: learningA.dataSync()[0],
				b: learningB.dataSync()[0],
				c: learningC.dataSync()[0]
			};
			opts.data.learning = generateData(DATA_TOTAL, learnedInputs);
			opts.learnedInputs = learnedInputs;
			plotQuad(opts);

			optimizer.minimize((): tf.Scalar => {
				const pred = predict(xs);
				return loss(pred, ys);
			});

			await tf.nextFrame();
		}
	}

	await train(tf.tensor1d(opts.data.training.x), tf.tensor1d(opts.data.training.y));
}`);
