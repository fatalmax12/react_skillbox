
const path = require('path');

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
  entry: '../src/client/index.tsx',
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, '../dist/client'),
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  devtool: setupDevtool(),
};
