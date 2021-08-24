// viewport 适配多端配置
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // 设置根大小
      // rootValue: 175,
      rootValue: 37.5,
      // 指定哪些属性转换成rem单位，默认是所有属性
      propList: ['*']
    }
  }
}
