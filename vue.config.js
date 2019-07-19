// vue.config.js
module.exports = {
  outputDir : 'docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/colegio-anglo-front/'
    : '/'
}
