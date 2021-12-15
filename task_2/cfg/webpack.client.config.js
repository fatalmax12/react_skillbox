const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const GLOBAL_CSS_REGEXP = /\.global\.css$/;

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
  resolve: {
    extensions: [".jsx", ".js", ".json", ".ts", ".tsx"],
    alias: {
      'react-dom' : IS_DEV ? '@hot-loader/react-dom' : 'react-dom',
    }
  },
  entry: [ path.resolve(__dirname, '../src/client/index.tsx'),
  'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr'],
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, '../dist/client'),
    publicPath: '/static/',
  },

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: ["ts-loader"]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
              }
            },
          }
      ],
        exclude: GLOBAL_CSS_REGEXP
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ['style-loader', 'css-loader']
      },
      // {
      //   test: /\.(png|jpe?g|svg)$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: 'images/[name].[ext]'
      //   }
      // }
    ]
  },
  devtool: setupDevtool(),
  plugins: IS_DEV ? [
    new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin(),
  ] : [],
};
