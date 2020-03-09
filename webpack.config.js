const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: `${__dirname}/public`,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        include: path.resolve(__dirname, "src"),
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  }
};
