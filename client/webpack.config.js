const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const EsLintWebpackPlugin = require('eslint-webpack-plugin')
const resolvePath = (_path) => path.resolve(__dirname, _path)

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: resolvePath('./src/index.tsx'),
    output: {
        path: resolvePath('./dist'),
        clean: true,
        filename: "scripts/[name].js"
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        open: true,
        hot: true,
    },
    resolve: {
        extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|webp|svg)$/,
                type: 'asset',
                generator: {
                    filename: 'assets/img/[hash:10][ext]'
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 60 * 1024
                    }
                }
            },
            {
                test: /\.(woff2?|ttf)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                // 只处理 src 下的文件，排除其他如 node_modules 的处理
                include: resolvePath('./src'),
                loader: 'babel-loader',
                options: {
                    // 开启 babel 缓存
                    cacheDirectory: true,
                    // 关闭缓存压缩
                    cacheCompression: false
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolvePath('./public/index.html'),
        }),
        new EsLintWebpackPlugin({
            context: resolvePath('./src'),
            exclude: 'node_modules',
            cache: true,
            cacheLocation: resolvePath('./node_modules/.cache/.eslintCache')
        })
    ]
}
