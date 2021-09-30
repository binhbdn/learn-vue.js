import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: 0
  },

  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
})

new Vue({
  store,

  render: h => h(App),
}).$mount('#app')