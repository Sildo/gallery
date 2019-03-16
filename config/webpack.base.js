const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');;

module.exports = {
    devtool: 'source-map',
    entry: {
        polyfills: './src/polyfills.js',
        main: './src/page.js',
    },
    
    output: {
        path: path.resolve('./build'),
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', ".js", ".json"],
    },

    module: {
        rules: [
            {
				test: /\.html$/,
				loader: 'html-loader?attrs[]=img:src&attrs[]=video:src&attrs[]=source:src'
            },
            {
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'file-loader?name=assets/[name].[ext]'
			},
			{
				test: /\.(webm|mp4)$/,
				loader: 'file-loader?name=assets/[name].[ext]'
			},
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                  "useBuiltIns": "usage"
                                }
                            ]
                        ],
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
        })
    ]
};