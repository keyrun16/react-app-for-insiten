const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        //path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        pathinfo: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './build',
        //contentBase: './public',
        inline: true,
        port: 3009
    },
    plugins: [new HtmlWebpackPlugin({ template: path.resolve('./build/index.html') })]
};
