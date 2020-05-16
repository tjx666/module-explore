const { resolve } = require("path");

module.exports = {
  mode: "development",
  devtool: false,
  entry: resolve(__dirname, "./src/esm/index.js"),
  output: {
    path: resolve(__dirname, "./dist"),
    filename: "bundle.esm.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
