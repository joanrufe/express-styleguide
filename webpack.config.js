const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = function(env) {
	return {
		entry: [
			'./src/client.js', 
			'./src/styles/index.scss' 
		], 
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'module.bundle.js'
		},
		plugins: [
			new MiniCssExtractPlugin({
				// Options similar to the same options in webpackOptions.output
				// both options are optional
				filename: '[name].css',
				chunkFilename: '[id].css',
			}),
			new HtmlWebpackPlugin({ template: './src/index.html' }),
			require('autoprefixer')
		],
		module: {
			rules: [
				{
					test: /\.ejs$/,
					use: [
						{
							loader: "ejs-webpack-loader",
							options: {
								data: { title: "New Title", someVar: "hello world" },
								htmlmin: true
							}
						}
					]
				},
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
					!env.production ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					"postcss-loader",
					'sass-loader',
					],
				}
			]
		},
		devtool: 'source-map',
		node: {
			fs: 'empty'
		}
	}
}
