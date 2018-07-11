const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const webpack = require('webpack')

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
				filename: '[name].css',
				chunkFilename: '[id].css',
			}),
			new HtmlWebpackPlugin({ template: './src/index.html' }),
			require('autoprefixer'),

			// Define here global variables for JavaScript
			new webpack.DefinePlugin({
				PRODUCTION:  env.production? JSON.stringify(true) : JSON.stringify(false),
			})
		],
		module: {
			rules: [
				{ // @TODO: correctly implement ejs loader to provide templates directly so that doesn't need to be imported
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
				},
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
					  loader: 'babel-loader'
					}
				}
			]
		},
		// devtool: 'inline-source-map',
		devtool: 'source-map',
		node: {
			fs: 'empty'
		}
	}
}
