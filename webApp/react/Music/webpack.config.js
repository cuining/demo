/* globals module require __dirname */
'use strict';

var webpack = require('webpack');
let ExtractTextPlugin = require("extract-text-webpack-plugin")
let HtmlWebpackPlugin  = require('html-webpack-plugin')
module.exports = {
  devtool: 'source-map',
  entry: {index:'./index.js'},
  output: {
    path: __dirname + '/dist',
    filename: '[chunkhash:8].[name].js',
    chunkFilename:'[name].[chunkhash:8].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("style.[contenthash:8].css"),
    new HtmlWebpackPlugin({
      filename:"index.html",
      template: './index.html',
      inject:true,
      chunks:['index']
    })
  ],
  module: {
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
        loader: ExtractTextPlugin.extract("style-loader", "css-loader","url-loader"),
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|ttf|svg)$/,
        loader: 'url?limit=100000',
        exclude: /node_modules/
      },
      {
        test: /\.(eot|png)$/,
        loader: 'file',
        exclude: /node_modules/
      }
    ]
  }
};
