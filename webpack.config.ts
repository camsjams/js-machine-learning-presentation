import {join} from 'path';
import reduceWebpack from 'reduce-webpack';
import packageJson from './package.json';

const config = reduceWebpack(
	{
		__SOME_VAR__: JSON.stringify('World!!')
	},
	packageJson.version,
	__dirname
);

if (process.env.NODE_ENV !== 'production') {
	config.devServer = (() => ({
		contentBase: join(__dirname, 'dist'),
		host: '0.0.0.0',
		port: 1234,
		hot: true,
		inline: true,
		publicPath: '/'
	}))();

	config.devtool = 'hidden-source-map';
}

export default config;
