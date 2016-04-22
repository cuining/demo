var webpack = require('webpack');

module.exports = {

  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
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
