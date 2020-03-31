const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const path = require("path")

module.exports = {
    entry: './src/css/index.scss',
    output: {
        path: path.resolve(__dirname, 'lib')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 2
                    } // 将 CSS 转化成 CommonJS 模块
                },
                {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }
            ]
        }]
    },
    plugins: [
        // Where the compiled SASS is saved to
        new MiniCssExtractPlugin({
            filename: 'index.css',
            allChunks: true,
        })
    ],
    optimization: {
        minimizer: [
            // 有时候webpack会默认优化z-index值，设置默认不优化
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    safe: true
                }
            })
        ]
    }
};