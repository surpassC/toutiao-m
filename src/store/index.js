import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = {
  state: {
    name: 'ccc'
  },
  mutations: {
    mini () {
      return 1
    }
  }

}

export default new Vuex.Store(store)
