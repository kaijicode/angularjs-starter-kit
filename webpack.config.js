const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.[contenthash].js'
   },
   devServer: {
      contentBase: './dist',
      historyApiFallback: true
   },
   plugins: [
      new CleanWebpackPlugin(['dist/']),
      new HtmlWebpackPlugin({
         template: './src/index.html',
         favicon: './static/favicon.ico'
      }),
      new MiniCssExtractPlugin({
         filename: 'app.[contenthash].css'
      })
   ],
   module: {
      rules: [
         {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
               'file-loader'
            ]
         },
         {
            test: /\.html$/,
            loader: 'raw-loader'
         },
         {
            test: /\.sass$/,
            use: [
               MiniCssExtractPlugin.loader,
               'css-loader',
               'sass-loader'
            ]
         }
      ]
   }
};
