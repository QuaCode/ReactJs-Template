const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
 entry: './src/index.js',
 output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.js',
 },

 plugins: [
  new HtmlWebpackPlugin({
   template: path.join(__dirname, './src/index.html'),
  }),
 ],

 module: {
  rules: [
   {
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
     loader: 'babel-loader',
     options: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
     },
    },
   },

   {
    use: ['style-loader', 'css-loader', 'sass-loader'],
    test: /.(.css|sass|scss)$/,
   },

   {
    type: 'asset',
    test: /\.(png|jpe?g|gif|svg)$/,
   },
  ],
 },

 devServer: {
  static: {
   directory: path.join(__dirname, 'dist'),
  },
  compress: true,
  port: 3000,
 },
}
