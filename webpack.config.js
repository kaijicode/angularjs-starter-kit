const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
   mode: 'development',
   entry: './src/app.js',
   output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'app.bundle.js'
   },
   plugins: [
      new HtmlWebpackPlugin({template: './src/index.html'})
   ],
   module: {
      rules: [
         {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
               'file-loader'
            ]
         }
      ]
   }
};
