const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// https://webpack.js.org/plugins/mini-css-extract-plugin/

const { parsed: config } = require('dotenv').config({
  path: path.resolve(__dirname, '.env'),
});

const isProduction = process.env.NODE_ENV === 'production';

module.exports = () => {
  return {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    devtool: 'inline-source-map',
    output: {
      publicPath: '/',
      filename: 'main.js',
      path: path.resolve(__dirname, 'build'),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.module.s[ac]ss$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader'
          ],
          exclude: /node_modules/,
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
      }),
      new MiniCssExtractPlugin({
        filename: isProduction ? '[name].[contenthash].css' : '[name].css',
        chunkFilename: isProduction ? '[id].[contenthash].css' : '[id].css',
      })
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'build'),
      },
      historyApiFallback: true,
      port: config?.PORT || 3000,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.sass', '.scss'],
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@context': path.resolve(__dirname, 'src/context'),
        '@store': path.resolve(__dirname, 'src/store'),
        '@services': path.resolve(__dirname, 'src/services'),
        '@modules': path.resolve(__dirname, 'src/modules'),
        '@custom-types': path.resolve(__dirname, 'src/custom-types'),
      },
    },
  };
};
