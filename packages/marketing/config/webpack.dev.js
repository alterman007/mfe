const { merge } = require("webpack-merge");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common.js');
const packageConfig = require('../package.json')
const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing', // global var name
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/bootstrap'
      },
      shared: packageConfig.dependencies,
      // shared: ['react', 'react-dom']
    }),
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
