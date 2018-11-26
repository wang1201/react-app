const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy(
      '/mw', {
          target: 'http://m.91miwei.com',
          changeOrigin: true,
          pathRewrite: {
            "^/mw": ""
          }
        },
        '/gt', {
          target: 'https://api.github.com/',
          changeOrigin: true,
          pathRewrite: {
            "^/gt": ""
          }
        }
    )
  )
}  


