module.exports = {
  entry: src + "/js/index.js",
  output: {
    path: dist,
    filename: "js/bundle.js",
  },
  devServer: {
    contentBase: "./dist",
  },
};
