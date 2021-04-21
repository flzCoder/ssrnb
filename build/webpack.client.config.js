const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const isProd = process.env.NODE_ENV === 'production'

const config = merge(base, {
  entry: {
    app: './src/entry-client.js'
  },
  resolve: {
    alias: {
      'create-api': './create-api-client.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.styl(us)?$/,
        use: isProd
          ? 
            [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader']
          : ['vue-style-loader', 'css-loader', 'stylus-loader']
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isProd ? '[name].[chunkhash].css' : '[name].css',
      chunkFilename: isProd ? '[id].[chunkhash].css': '[id].css',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"'
    }),
    new VueSSRClientPlugin()
  ],
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          minChunks: 1,
          test: function (module) {
            return (/node_modules/.test(module.context) && !/\.css$/.test(module.request))
          }
        },
      },
    },
  },

})

module.exports = config
