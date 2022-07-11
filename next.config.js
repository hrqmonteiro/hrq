const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  reactStricMode: true,
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  }
}