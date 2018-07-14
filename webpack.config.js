const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function (env) {
	const client = {
		entry: [
			'./src/client/client.js',
			'./src/common/styles/index.scss',
			"babel-polyfill" // Attach polyfills for older browsers
		],
		output: {
			path: path.resolve(__dirname, 'dist/styleguide/'),
			filename: 'module.bundle.js'
		},
		watch: true,
		devServer: {
			hot: true,
			contentBase: path.resolve(__dirname, 'dist/styleguide/'),
			publicPath: '/'
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './src/common/index.html'
			}),
			require('autoprefixer'),

			// Define here global variables for JavaScript usage
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NamedModulesPlugin()
		],
		module: {
			rules: [{
					test: /\.ejs$/,
					use: {
						loader: "ejs-webpack-loader"
					}
				},
				{
					test: /\.(sa|sc|c)ss$/,
					use: [!env.production ? 'style-loader' : MiniCssExtractPlugin.loader,
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
		node: {
			fs: 'empty'
		}
	}

	const plugin = {
		entry: [
			"babel-polyfill", // Attach polyfills for older browsers
			'./src/plugin.js'
		],
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
	}

	const renderService = {
		entry: [
			"babel-polyfill", 
			'./src/server/render-service.js'
		],
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
	}
	const server = {
		entry: [
			"babel-polyfill", 
			'./src/server/server.js'
		],
		target: 'node',
		output: {
			path: path.resolve(__dirname, 'dist/server'),
			filename: 'server.js'
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
	}
	if(env.devServer) return client;
	return [ client, server, renderService, plugin ];
}