const webpack = require('webpack');
const path = require('path');

const config = {
  entry: [
    './client/src/index.jsx'
  ],
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    'static': {
      directory: './dist'
    }
  },
  mode: 'development'
};

module.exports = config;