import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
// px转换成rem
import 'amfe-flexible'
// 引入vant
import vant from 'vant'
// 引入vant样式库
import 'vant/lib/index.less'
// 引入图标库
// import '@/style/icon.less'
// 导入插件
Vue.use(vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
