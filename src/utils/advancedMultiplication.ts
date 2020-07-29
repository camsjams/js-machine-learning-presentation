import * as tf from '@tensorflow/tfjs';

// @ts-ignore
import {indentNormalizer} from 'spectacle';
import plot, {Options} from './plot';
import {generateData} from './basicMultiplication';

const DATA_TOTAL = 100;

// for sequential ... sequential runs
const model = tf.sequential();
let isFirst = true;

export const learn = async (options: Options): Promise<void> => {
	const xTraining = tf.tensor1d(options.data.training.x);
	const yTraining = tf.tensor1d(options.data.training.y);

	if (isFirst) {
		isFirst = false;
		model.add(tf.layers.dense({
			inputShape: [1],
			units: 1,
			activation: 'sigmoid'
		}));
		model.add(tf.layers.dense({units: 1}));

		model.compile({
			optimizer: tf.train.sgd(0.001),
			loss: 'meanSquaredError',
			metrics: [tf.metrics.meanAbsoluteError]
		});
	}

	await model.fit(xTraining, yTraining, {
		batchSize: 32,
		epochs: 100,
		shuffle: true,
		validationSplit: 0.1,
		callbacks: {
			onEpochEnd: (epoch, logs): void => {
				options.data.learning = generateData(DATA_TOTAL, logs.val_meanAbsoluteError);
				plot({
					...options,
					learnedValue: logs.val_meanAbsoluteError
				});
			}
		}
	});
};

export const codeBlock = indentNormalizer(`
const learn = async (options: Options): Promise<void> => {
	const model = tf.sequential();

	const xTraining = tf.tensor1d(options.data.training.x);
	const yTraining = tf.tensor1d(options.data.training.y);

	model.add(tf.layers.dense({
		inputShape: [1],
		units: 1,
		activation: 'sigmoid'
	}));
	model.add(tf.layers.dense({units: 1}));

	model.compile({
		optimizer: tf.train.sgd(0.001),
		loss: 'meanSquaredError',
		metrics: [tf.metrics.meanAbsoluteError]
	});

	await model.fit(xTraining, yTraining, {
		batchSize: 32,
		epochs: 100,
		shuffle: true,
		validationSplit: 0.1,
		callbacks: {
			onEpochEnd: (epoch, logs): void => {
				options.data.learning = generateData(DATA_TOTAL, logs.val_meanAbsoluteError);
				plot({
					...options,
					learnedValue: logs.val_meanAbsoluteError
				});
			}
		}
	});
}`);
