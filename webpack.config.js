const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const { resolve } = require("path");

module.exports = {
  entry: {
    router: "./router.js",
    app: "./index.js",
    login: "./login.js",
  },

  output: {
    path: resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "login.html",
      template: "login.html",
    }),
    new MiniCssExtractPlugin({ filename: "app.css" }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["dist"],
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(json)$/,
        loader: ["json"],
      },
    ],
  },
};
