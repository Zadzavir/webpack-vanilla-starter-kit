const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "none",
    entry: {
        main: "./src/js/index.js",
        frameworks: "./src/js/frameworks.js",
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png|svg|gif|webp|raw|bmp|)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "./assets"
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.template.html",
            filename:"./index.html",
        }),
    ],
}