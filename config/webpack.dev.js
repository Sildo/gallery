const webpackMerge = require('webpack-merge'),
	baseConfig = require('./webpack.base');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = webpackMerge(baseConfig, {
	mode: ENV,
    devtool: 'source-map',
    devServer: {
        clientLogLevel: "error",
        stats: "minimal",
        open: false
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader?singleton=true',
                    { loader: 'css-loader', options: { sourceMap: true, } },
                    { loader: 'sass-loader', options: { sourceMap: true, } }
                ]
            }
        ]
    },
});
