const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  entry: './src/client/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'index.js',
  },
  module: {
    rules: [
      { test: /\.(s)?css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader',
            options: { modules: true },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/client/index.html'}),
  ],
};
