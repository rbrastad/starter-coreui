const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const path = require('path');
const paths = {
    root: 'src/main/resources',
    appSrc: 'src/main/resources/app',
    app: 'build/resources/main/assets/app',
    appDistPath: 'build/resources/main/assets/dist',
    scssSrc: 'src/main/resources/assets/scss/style.scss',
};

module.exports = {
    entry: {
        app: path.join(__dirname, paths.appSrc),
        style: path.join(__dirname, paths.scssSrc)
    },
    resolve: {
        root: [
            path.join(__dirname, paths.root)
        ],
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, paths.appDistPath),
        filename: "[name]-bundle.js"
    },
    plugins: [
        new ExtractTextPlugin("app-[name].css"),
        // Minify assets.
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false // https://github.com/webpack/webpack/issues/1496
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ["babel-loader?cacheDirectory=true"],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader:  ExtractTextPlugin.extract(
                    "style",
                    "css!sass")
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.png$/, loader: "url-loader?limit=100000" }
        ]
    }
};
