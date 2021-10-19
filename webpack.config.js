const path = require('path');

module.exports = {
  entry: './index.js',
  mode:'development',
  output: {
    path: path.resolve(__dirname, 'buid'),
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
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      }
    ]
  }
};