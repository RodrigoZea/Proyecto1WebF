const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {

    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: "html-loader"
                }
            ]
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.(png|jpg|ttf|otf)$/,
            loader: 'url-loader'
        },
        {
            test: /\.svg$/,
            use: {
                loader: 'svg-url-loader',
                options: {}
            }
        }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.scss']
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            favicon: "./src/logo.png"
        })
    ]
}