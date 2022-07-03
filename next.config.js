const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

module.exports = {
  reactStricMode: true,
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
}

