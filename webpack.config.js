const path = require("path");

const { ESBuildPlugin, ESBuildMinifyPlugin } = require("esbuild-loader");
const webpack = require("webpack");

/** @type {webpack.Configuration} */
const config = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  optimization: {
    minimizer: [new ESBuildMinifyPlugin({ target: "es2015" })],
  },
  plugins: [new ESBuildPlugin()],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
    ],
  },
};

const serverConfig = {
  ...config,
  target: "node",
  entry: "./src/server.tsx",
  output: {
    path: path.resolve("./server")
  }
};

module.exports = [config, serverConfig];
