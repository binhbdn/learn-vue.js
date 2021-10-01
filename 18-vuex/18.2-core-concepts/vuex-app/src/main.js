import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: 0,

    todos: [{
        id: 1,
        text: 'TODO No.1',
        done: true
      },
      {
        id: 2,
        text: 'TODO No.2',
        done: false
      }
    ],
  },

  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },

    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    },

    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },

  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  },
})

new Vue({
  store,

  render: h => h(App),
}).$mount('#app')