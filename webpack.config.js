const path = require('path');
const htmlPlugIn=require('html-webpack-plugin')

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
           
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ],
  },
  plugins: [
    new htmlPlugIn({
        template:'./public/index.html',
        filename:'index.html'
    })
  ]
};