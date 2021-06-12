// const clientConfig = require('./cfg/webpack.client.config');
// const serverConfig = require('./cfg/webpack.server.config');

// module.exports = [
//   clientConfig,
//   serverConfig,
// ];

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const { HotModuleReplacementPlugin } = require('webpack');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

function setupDevtool() {
  if (IS_PROD) {
    return false;
  }

  if (IS_DEV) {
    return 'eval';
  }
}

module.exports = {
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: [
    './index.tsx',
    //'webpack-hot-middleware/client&path=http://localhost:3001/static/__webpack_hmr'
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
    //puplicPath: '/static/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx"],
    alias: {
      'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom'
    }
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  devtool: setupDevtool(),
  // plugins: IS_DEV ? [
  //   new CleanWebpackPlugin(),
  //   new HotModuleReplacementPlugin(),
  // ] : [],
};
