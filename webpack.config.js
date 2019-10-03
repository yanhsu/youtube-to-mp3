const path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/app.jsx',
  watch: true,
  // target: 'electron',
  output: {
    path:  path.resolve('app'),
    filename: 'bundle.js'
  },
  node: {
    fs: 'empty',
    // __dirname: false,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.join(__dirname, 'app'), 'node_modules']
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }, {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'YouTube To MP3',
      filename: './index.html',
      template: './src/index.html'
    }),
    // new webpack.DefinePlugin({
    //   $dirname: '__dirname',
    // })
  ]
};
