const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
   mode: 'production',
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js'
   },
   optimization: {
      runtimeChunk: 'single',
      splitChunks: {
         cacheGroups: {
            vendor: {
               name: 'lib',
               test: /[\\/]node_modules[\\/]/,
               chunks: 'all',
               enforce: true
            }
         }
      }
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
      new OptimizeCssAssetsPlugin(),
      new webpack.DefinePlugin({
         API_BASE: JSON.stringify('https://'),
         USER_API_BASE: JSON.stringify('https://randomuser.me/api/')
      }),
      new webpack.HashedModuleIdsPlugin()
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
               {
                  loader: 'postcss-loader',
                  options: {
                    ident: 'postcss',
                    plugins: [
                      require('autoprefixer')(),
                    ]
                  }
                },
               'sass-loader'
            ]
         },

         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
               "babel-loader",
               "eslint-loader"
            ]
         }
      ]
   }
};
