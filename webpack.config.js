const path = require("path");

const WebpackBarPlugin = require("webpackbar");

const outputPath = path.resolve(__dirname, "public");

function webpackConfig(rawEnv, optionArg) {
  return {
    mode: "development",
    devtool: "eval-source-map",
    entry: "./src/index.tsx",
    output: {
      path: outputPath,
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          include: path.resolve(__dirname, "src"),
          use: "ts-loader"
        },
        {
          test: /\.(js|jsx)?$/,
          include: path.resolve(__dirname, "src"),
          use: "babel-loader"
        }
      ]
    },
    plugins: [
      new WebpackBarPlugin({
        name: "react-app"
      })
    ],
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devServer: {
      port: 3000,
      contentBase: outputPath,
      compress: true,
      quiet: true,
      disableHostCheck: false
    }
  };
}

module.exports = webpackConfig;
