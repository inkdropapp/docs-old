/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import path from 'path'
import webpack from 'webpack'
import markdownRenderer from './markdown-renderer'

const DEBUG = !process.argv.includes('release')
const VERBOSE = process.argv.includes('verbose')
const WATCH = global.watch
const JS_LOADER = {
  test: /\.jsx?$/,
  include: [
    path.resolve(__dirname, '../components'),
    path.resolve(__dirname, '../core'),
    path.resolve(__dirname, '../pages'),
    path.resolve(__dirname, '../app.js'),
    path.resolve(__dirname, '../config.js')
  ],
  loader: 'babel-loader'
}

// Base configuration
const config = {
  output: {
    path: path.join(__dirname, '../build'),
    publicPath: '/',
    sourcePrefix: '  '
  },
  cache: false,
  stats: {
    colors: true,
    reasons: DEBUG,
    hash: VERBOSE,
    version: VERBOSE,
    timings: true,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: VERBOSE,
    cachedAssets: VERBOSE
  },
  resolve: {
    // extensions: ['', '.js', '.json', '.jsx', '.node']
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: DEBUG
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
      '__DEV__': DEBUG
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  module: {
    rules: [
      {
        test: require.resolve('jquery'),
        loader: 'expose-loader?$!expose-loader?jQuery'
      }, {
        test: /semantic\.js$/,
        loader: 'script-loader'
      }, {
        test: /[\\\/]app\.js$/,
        loader: path.join(__dirname, './lib/routes-loader.js')
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.txt$/,
        loader: 'raw-loader'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000'
      }, {
        test: /\.(eot|ttf|wav|mp3)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }, {
        test: /\.md$/,
        use: [
          'html-loader',
          {
            loader: 'markdown-loader',
            options: {
              renderer: markdownRenderer
            }
          }
        ]
      }
    ]
  }
}

// Configuration for the client-side bundle
const appConfig = {
  ...config,
  entry: [
    ...(WATCH ? ['webpack-hot-middleware/client'] : []),
    './semantic/dist/semantic.css',
    // 'font-awesome/css/font-awesome.css',
    'jquery',
    './semantic/dist/semantic.js',
    './app.js'
  ],
  output: {
    ...config.output,
    filename: 'app.js'
  },
  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: DEBUG ? 'cheap-module-eval-source-map' : false,
  plugins: [
    ...config.plugins,
    ...(DEBUG ? [] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: VERBOSE
        }
      }),
      new webpack.optimize.AggressiveMergingPlugin()
    ]),
    ...(WATCH ? [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ] : [])
  ],
  module: {
    rules: [
      WATCH ? Object.assign({}, JS_LOADER, {
        options: {
          plugins: []
        }
      }) : JS_LOADER,
      ...config.module.rules,
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              path: path.join(__dirname, 'postcss.config.js')
            }
          }
        ]
      }
    ]
  }
}

// Configuration for server-side pre-rendering bundle
const pagesConfig = {
  ...config,
  entry: './app.js',
  output: {
    ...config.output,
    filename: 'app.node.js',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  },
  externals: /^[a-z][a-z\.\-\/0-9]*$/i,
  plugins: [
    ...config.plugins,
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
  ],
  module: {
    rules: [
      JS_LOADER,
      ...config.module.rules,
      {
        test: /\.scss$/,
        use: [
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              path: path.join(__dirname, 'postcss.config.js')
            }
          }
        ]
      }
    ]
  }
}

export default [appConfig, pagesConfig]
