const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
   mode: 'none',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.[contenthash].js'
   },
   plugins: [
      new CleanWebpackPlugin(['dist/']),
      new HtmlWebpackPlugin({
         template: './src/index.html',
         favicon: './static/favicon.ico'
      }),
      new webpack.DefinePlugin({
         API_BASE: JSON.stringify('https://'),
         USER_API_BASE: JSON.stringify('https://randomuser.me/api/')
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
