var path = require('path');

module.exports = {
	entry: {
		app: [ 'babel-polyfill', './client/index.js' ]
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json-loader' },
            {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/,
                query: {
                    presets: [ 'es2015','stage-0','react' ],
                    cacheDirectory: true
                }
            },
            {
                test: /\.css$/,
                loaders: [ 'style-loader','css-loader' ],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                loaders: [ 'style-loader','css-loader','sass-loader' ],
                include: [
                    __dirname + '/node_modules/font-awesome/scss',
                    __dirname + '/client/components',
                    __dirname + '/static/css'
                ]
            }
        ]
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.scss', '.css' ],
        alias: {
            '@': __dirname
        }
	}
};
