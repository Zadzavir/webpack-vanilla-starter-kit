const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    devtool: "none",
    output: {
        filename: "./js/[name].[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,"css-loader"
                ]
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
        filename: "./css/[name].[contentHash].css"
        },
        new MiniCssExtractPlugin({
        filename: "./css/[name].[contentHash].css"
        },
    ))]
});