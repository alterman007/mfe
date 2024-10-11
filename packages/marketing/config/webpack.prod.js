const { merge } = require("webpack-merge");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common.js');
const packageConfig = require('../package.json')
const devConfig = {
  mode: "development",
  output: {
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing', // global var name
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/bootstrap'
      },
      shared: packageConfig.dependencies,
    }),
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
