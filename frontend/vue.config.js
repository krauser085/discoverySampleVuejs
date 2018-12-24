module.exports = {
  outputDir: '../backend/dist',
  devServer: {
    proxy: {
      '/discovery': { target: 'http://localhost:3000/discovery' }
    }
  }
}