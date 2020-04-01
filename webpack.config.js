const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src', 'main.js')
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'scss-loader'
                ]
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.vue', '.css', '.scss'],
        alias: {
            vue$: "vue/dist/vue.esm.js"
        },
    },

    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ],

    devServer: {
    }
}