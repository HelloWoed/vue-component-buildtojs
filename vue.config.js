module.exports = {
  lintOnSave: false,
  devServer: {
    // 端口配置
    port: 8988,
    // 反向代理配置
    proxy: {
      '/cmpt': {
        target: 'http://10.7.21.50:3000',
        ws: true,
        pathRewrite: {
          '^/cmpt': '/'
        }
      }
    }
  },
  css: {// 不分离css样式
    extract: false
  }
}
