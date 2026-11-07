"use strict";

const path = require("path");

module.exports = {
  mode: "production",
  entry: "./js/script.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "js"),
  },

  watch: true,
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: "javascript/auto",
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            sourceType: "module",
            presets: [
              [
                "@babel/preset-env",
                {
                  debug: true,
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
