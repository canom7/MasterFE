const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: "./dev.env",
    }),
  ],
  devtool: "eval-source-map",
  devServer: { port: 8080 },
});
