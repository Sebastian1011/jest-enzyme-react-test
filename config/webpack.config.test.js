const { resolve } = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
    mode: 'none',
    plugins: [
        new UglifyJsPlugin({
            parallel: true,
            extractComments: true
        }),
        new HtmlWebpackPlugin({
            hash: true,
            inject: true,
            template: resolve(__dirname, '..', 'src', 'index.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        })
    ]
});
