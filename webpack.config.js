const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'app.bundle.js'
   },
   devServer: {
      contentBase: './public'
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html',
         favicon: './public/favicon.ico'
      }),
      new MiniCssExtractPlugin({
         filename: '[chunkhash].css'
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
