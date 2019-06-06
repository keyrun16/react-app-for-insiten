const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname , 'public'),
        //publicPath: '/dist',
        filename: 'bundle.js',
        pathinfo: true
    },    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
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
        contentBase: './public',
        inline: true,
        port: 3009,
    }
};