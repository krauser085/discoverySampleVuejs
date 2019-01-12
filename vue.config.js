module.exports = {
  outputDir: './dist',
  devServer: {
    proxy: {
      '^/documents': { target: 'http://localhost:3000/' }
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  }
}