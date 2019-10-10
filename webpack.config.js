const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const path = require('path');

/**
 * @config {webpack.Configuration}
 */
const config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(ts|tsx)$/, exclude: /node_modules/, loader: 'ts-loader' }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './index.html' })]
};

module.exports = config;
