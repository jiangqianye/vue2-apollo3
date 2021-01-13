module.exports = {
    devServer: {
      proxy: 'https://auth-test.youguoquan.com'
    },
    productionSourceMap:false,  // 构建时不生成map文件
  }