const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
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
       test: /\.(js|mjs)$/,
       exclude: /node_modules/,
       use: {
         loader: "babel-loader"
       }
     },
     {
       test: /\.(png|svg|jpg|gif)$/,
       use: [
         'file-loader'
       ]
     }
    ]
  }
};
