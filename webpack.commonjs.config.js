const { resolve } = require("path");

module.exports = {
  target: "node",
  mode: "development",
  devtool: false,
  entry: resolve(__dirname, "./src/commonjs/index.js"),
  output: {
    libraryTarget: "commonjs2",
    path: resolve(__dirname, "./dist"),
    filename: "bundle.commonjs.js",
  },
};
