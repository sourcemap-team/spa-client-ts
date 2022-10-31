const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { parsed: config } = require('dotenv').config({
  path: path.resolve(__dirname, '.env'),
});

module.exports = () => {
  return {
    entry: './src/index.tsx',
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
          use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
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
      historyApiFallback: true,
      port: config?.PORT || 3000,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@context': path.resolve(__dirname, 'src/context'),
        '@store': path.resolve(__dirname, 'src/store'),
        '@services': path.resolve(__dirname, 'src/services'),
        '@modules': path.resolve(__dirname, 'src/modules'),
      },
    },
  };
};
