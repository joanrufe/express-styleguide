const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

const path = require('path');

module.exports = {
	entry: './src/client.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'module.bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' }),
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
			{ test: /\.css$/, use: 'css-loader' },
		]
	},
	devtool: 'source-map',
	node: {
		fs: 'empty'
	}
}

/**
 * 
 * See: https://hackernoon.com/hot-reload-all-the-things-ec0fed8ab0
 * 
 const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const StartServerPlugin = require('start-server-webpack-plugin')
module.exports = {
    entry: [
        'webpack/hot/poll?1000',
        './server/index'
    ],
    watch: true,
    target: 'node',
    externals: [nodeExternals({
        whitelist: ['webpack/hot/poll?1000']
    })],
    module: {
        rules: [{
            test: /\.js?$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    plugins: [
        new StartServerPlugin('server.js'),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                "BUILD_TARGET": JSON.stringify('server')
            }
        }),
    ],
    output: {
        path: path.join(__dirname, '.build'),
        filename: 'server.js'
    }
}
 */