const path = require('path');
const nodeExternals = require('webpack-node-externals');

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
  target: 'node',
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'server.js',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx"]
  },
  externals: [nodeExternals()],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: ["ts-loader"]
      },
      {
        test: /\.css$/,
        use: [
          {
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              localIdentName: '[name]__[local]--[hash:base64:5]',
              exportOnlyLocals: true
            },
          }
        }],
        exclude: GLOBAL_CSS_REGEXP

      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ['css-loader']
      },
    ]
  },
  optimization: {
    minimize: false,
  },
  devtool: setupDevtool(),
};
