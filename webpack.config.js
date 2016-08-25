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
                test: path.join(__dirname, 'src'),
                query: {
                  presets: 'es2015',
                },
            }
        ]
    },
    stats: {
    	colors: true
    },
    devtool: 'source-map'
};