/* globals module require __dirname */
'use strict';
let webpack = require('webpack');
let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin'); // 合并组件内css
let HtmlWebpackPlugin = require('html-webpack-plugin');
let UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
let debug = true;
module.exports = {
  //devtool: 'source-map',
  entry: {
    index: './index.js',
    vendor: ['react', './src/js/lib/zepto']
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash:8].js'
  },
  eslint: {
    failOnWarning: false,
    failOnError: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      _: 'lodash'
    }),
    new UglifyJsPlugin({
      output: {
        comments: false
      },
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('style.css'), // hash css文件
    new CommonsChunkPlugin({
      filename: 'vendor.js',
      name: ['vendor'],
      minChunks: Infinity
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      inject: true,
      chunks: ['vendor', 'index']
    })
  ],
  module: {
    preLoader: [{ test: /\.js?$/, loader: 'eslint', exclude: /node_modules/ }],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          compact: false
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader',
          'url-loader'
        ),
        exclude: /node_modules/
      },
      {
        test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
        loaders: [
          // url-loader更好用，小于10KB的图片会自动转成dataUrl，
          // 否则则调用file-loader，参数直接传入
          'url?limit=10000&name=img/[name].[ext]'
        ]
      }
    ]
  }
};
