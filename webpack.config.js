var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: ['babel-polyfill', './src/main.js'],
	output: {
		path:  __dirname + '/public',
		filename: 'main.js'
	},
	module: {
        loaders: [
            {
                loader: 'babel-loader',
                include: path.join(__dirname, 'src'),
                test: /\.js$/,
                query: {
                  presets: 'es2015',
                },
            },
            { test: /\.(woff|woff2)$/,  loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf$/,    loader: 'file-loader' },
            { test: /\.eot$/,    loader: 'file-loader' },
            { test: /\.svg$/,    loader: 'file-loader' },
            { test: /\.css$/,    loader: 'style-loader!css-loader' }
        ]
    },
    stats: {
    	colors: true
    },
    devtool: 'source-map'
};