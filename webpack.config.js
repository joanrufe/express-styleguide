const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const webpack = require('webpack')

module.exports = function(env) {
	return [{
		entry: [
			'./src/client/client.js',
			'./src/common/styles/index.scss'
		],
		output: {
			path: path.resolve(__dirname, 'dist/styleguide/'),
			filename: 'module.bundle.js'
		},
		devServer: {
			hot: true
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './src/common/index.html'
			}),
			require('autoprefixer'),

			// Define here global variables for JavaScript usage
			new webpack.DefinePlugin({
				PRODUCTION: env.production ? JSON.stringify(true) : JSON.stringify(false),
			}),
			!env.production ?
				new webpack.HotModuleReplacementPlugin() :
				new MiniCssExtractPlugin({
					filename: '[name].css',
					chunkFilename: '[id].css',
				})
		],
		module: {
			rules: [{
					test: /\.ejs$/,
					use: [{
						loader: "ejs-webpack-loader",
						options: {
							data: {
								title: "New Title",
								someVar: "hello world"
							},
							htmlmin: true
						}
					}]
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
		// devtool: 'source-map'
		node:{
			fs: 'empty'
		}
	}, {
		entry: './src/plugin.js',
		output: {
			path: path.resolve(__dirname, 'dist/plugin'),
			filename: 'jquery.styleguide.js'
		},
		module: {
			rules: [{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader'
					}
				},
				{
					test: /\.ejs$/,
					use: [{
						loader: "ejs-webpack-loader",
						options: {
							htmlmin: true
						}
					}]
				}
			]
		}
	},{
		entry: './src/server/render-service.js',
		target: 'node',
		output: {
			path: path.resolve(__dirname, 'dist/render-service'),
			filename: 'render-service.js'
		},
		module: {
			rules: [{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader'
					}
				},
				{
					test: /\.ejs$/,
					use: [{
						loader: "ejs-webpack-loader",
						options: {
							htmlmin: true
						}
					}]
				}
			]
		}
	}]
}