const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.[contenthash].js',
      chunkFilename: 'lib.[contenthash].js'
   },
   optimization: {
      splitChunks: {
         cacheGroups: {
            commons: {
               test: /[\\/]node_modules[\\/]/,
               chunks: 'all',
               enforce: true
            }
         }
      }
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
         filename: 'app.[contenthash].css',
         chunkFilename: "lib.[contenthash].css"
      }),
      new OptimizeCssAssetsPlugin()
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
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
               'file-loader'
            ]
         },

         {
            test: /\.html$/,
            loader: 'raw-loader'
         },

         {
            test: /\.(sass|css)$/,
            use: [
               MiniCssExtractPlugin.loader,
               'css-loader',
               'sass-loader'
            ]
         },

         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader"
         }
      ]
   }
};
