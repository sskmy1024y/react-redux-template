const path = require("path");

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
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devServer: {
      port: 3000,
      contentBase: outputPath,
      compress: true,
      // disableHostCheck ... localhost外からのアクセスを許可する
      disableHostCheck: true
    }
  };
}

module.exports = webpackConfig;
