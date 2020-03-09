const path = require('path')

const srcPath = './src'

module.exports = ({ config, mode: upperMode }) => {
  const mode = upperMode === 'PRODUCTION' ? 'production' : 'development'

  return {
    ...config,
    mode,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader'
        }
      ]
    },
    resolve: {
      modules: [...(config.resolve.modules || []), path.resolve(srcPath)]
    }
  }
}
