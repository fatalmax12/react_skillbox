 const clientConfig = require('./cfg/webpack.client.config');
// const serverConfig = require('./cfg/webpack.server.config');

module.exports = [
  clientConfig,
  //serverConfig,
];

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const GLOCBAL_CSS_REGEXP = /\.global\.css$/;

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
    // watchOptions: {
    //   ignored: [
    //     path.resolve(__dirname, 'utils/react'),
    //   ]
    // }
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
      {

        test: /\.tsx?$/, loader: "ts-loader"
        // test: /\.[tj]sx?$/,
        //     use: {
        //         loader: 'babel-loader',
        //         options: {
        //             presets: ['@babel/preset-env', '@babel/preset-react']
        //         }
        //     }
    },
      {
        test: /\.css$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              localIdentName: '[[name]__[local]--[hash:base64:5]]',
            }
          }
        }],
        exclude: GLOCBAL_CSS_REGEXP
      },
      {
        test: GLOCBAL_CSS_REGEXP,
        use: ['style-loader', 'css-loader']
      },{
        test: /\.(png|jpe?g|svg)$/,
        loader: 'file-loader',
        options: {
            name: 'images/[name].[ext]',
        }
      }
    ]
  },
  devtool: setupDevtool(),
  // plugins: IS_DEV ? [
  //   new CleanWebpackPlugin(),
  //   new HotModuleReplacementPlugin(),
  // ] : [],
};
