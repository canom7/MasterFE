const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "./src"),
  resolve: {
    extensions: [".js", ".ts", "tsx"],
  },
  entry: { app: ["./index.tsx"] }, //Entry point
  output: {
    filename: "[name].[chunkhash].js",
    clean: true, //Clean dist folder before generatimg new build
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    port: 8080,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html", //Name of file in ./dist/
      filename: "index.html", //Name of template in ./src
      scriptLoading: "blocking",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
