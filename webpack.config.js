const webpack = require('webpack')
const fs = require('fs')
const { resolve, join } = require('path')

const baseConfig = {
  mode: 'production',
  output: {
    path: resolve('dist')
  },
  resolve: {
    modules: [
      resolve('src'),
      'node_modules'
    ],
    extensions: ['.js'],
    mainFiles: ['index']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: resolve(__dirname, 'node_modules')
      },
      {
        test: /\.js$/,
        exclude: [
          resolve(__dirname, 'node_modules')
        ],
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
}

const browserConfig = {
  ...baseConfig,
  context: resolve('src'),
  entry: './index.browser.js',
  externals: {
    'react-cookie': 'react-cookie'
  },
  output: {
    ...baseConfig.output,
    filename: 'browser.js',
    libraryTarget: 'umd',
    publicPath: '/'
  }
}

const nodeConfig = {
  ...baseConfig,
  target: 'node',
  context: resolve('src'),
  devtool: false,
  entry: './index.node.js',
  externals: {
    'assert': 'assert',
    'react-cookie': 'react-cookie'
  },
  output: {
    ...baseConfig.output,
    filename: 'node.js',
    libraryTarget: 'commonjs2',
    publicPath: '/'
  },
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  }
}

const nativeConfig = {
  ...baseConfig,
  context: resolve('src'),
  devtool: false,
  entry: './index.native.js',
  externals: {
    'assert': 'assert',
    'react-cookie': 'react-cookie',
    '@react-native-community/async-storage': '@react-native-community/async-storage',
    'react-native-sensitive-info': 'react-native-sensitive-info'
  },
  output: {
    ...baseConfig.output,
    filename: 'native.js',
    libraryTarget: 'umd',
    publicPath: '/'
  }
}

const configs = {
  browser: browserConfig,
  node: nodeConfig,
  native: nativeConfig
}

module.exports = configs[process.env.TARGET]
