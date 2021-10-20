const path = require('path');
const htmlPlugIn = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {

          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  plugins: [
    // eslint-disable-next-line new-cap
    new htmlPlugIn({
        template: './public/index.html',
        filename: 'index.html'
    })
  ]
}
