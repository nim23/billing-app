const path = require('path')
const webpack = require('webpack')
const ExtractCSS = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devTool: 'hidden-sourcemap',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'js/bundle.min.js',
    publicPath: ''
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractCSS('css/[name].min.css'),
    new HtmlWebpackPlugin({
      title: 'Your Sky Monthly Bill',
      template: 'index.prod.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        exclude: 'node_modules',
        loader: ExtractCSS.extract('style-loader', 'css-loader!sass-loader')
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
}
