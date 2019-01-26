const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
   mode: 'none',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.[contenthash].js'
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html',
         favicon: './static/favicon.ico'
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
