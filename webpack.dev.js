const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const entry = path.join(__dirname, 'src/client');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: '[name].bundle.js'
  }
});
