const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: './',
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/css/colors.less'),
      ]
    }
  }
})
