// webpack.prod.js

const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge(common, {
  mode: 'production',
  devtool: '', // none

  module: {
    rules: [
      {
        test: /\.s|css$/,
        use: [
          // we don't wan't to use style-loader in prod because style-loader injects styles into html <head> tag
          // we are using mini-css-extract-plugin to extract css (we use .loader method on mini-css-extract-plugin instance)
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },

  // there is no need for this in dev
  plugins: [
    new CleanWebpackPlugin(), 
    // we pass filename option -> this is the name of output .css name
    new MiniCssExtractPlugin({ filename: '[name].[hash].css'})
  ]
});