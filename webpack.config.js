var webpack = require("webpack");

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname,
    entry: [
        "jquery/dist/jquery.min.js",
        "bootstrap/dist/js/bootstrap.min.js",
        "./js/hwf.js"
    ],
    output: {
        path: __dirname,
        filename: 'js/hwf.min.js'
    },
    /*
    eslint: {
        configFile: '.eslintrc'
    },
    */
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "eslint-loader",
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        }, {
            test: /\.(png|woff|eot|woff2|ttf|svg)$/,
            loader: "url-loader"
        },
        {
            test:/\.js|jsx$/,
            loader: 'jsx-loader'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new ExtractTextPlugin("css/hwf.css")
    ],
    devServer: {
        contentBase: "./",
        port: 9999
    }
}