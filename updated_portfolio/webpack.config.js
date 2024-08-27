const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                    },
                    },
                ],
            },
        ]
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon3.png'
        }),
        new CopyPlugin([
            { from: '_redirects'}
        ])
    ],
    devServer: {
        historyApiFallback: true
    }
}