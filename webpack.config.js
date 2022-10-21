const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { parsed: config } = require('dotenv').config({
  path: path.resolve(__dirname, '.env'),
});

module.exports = () => {
  return {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'build'),
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'build'),
      },
      port: config.PORT || 3000,
    },
    resolve: {
      extensions: ['*', '.js', 'jsx'],
    },
  };
};
