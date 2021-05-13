const withCSS = require("@zeit/next-css");

const path = require("path");
const glob = require("glob");

module.exports = withCSS({
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.test.js$/,
      loader: "ignore-loader",
    });
    return config;
  },
});
