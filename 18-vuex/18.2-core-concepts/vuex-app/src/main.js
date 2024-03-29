// import { Promise } from 'core-js/es6'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import {
  MY_SQUARE_MUTATION
} from './js/mutation-types'

Vue.use(Vuex)
Vue.config.productionTip = false

const moduleA = {
  state: () => ({
    count: 3,
  }),

  getters: {
    // `state` is the local module state
    doubleCount: state => state.count * 2,
  },

  mutations: {
    // `state` is the local module state
    increment: state => state.count++,
  },

  actions: {
    // inside module actions, context.state will expose the local state
    incrementIfOdd({
      state,
      commit
    }) {
      if (state.count % 2 === 1) {
        commit('increment')
      }
    },
  },
}

const moduleB = {
  state: {
    count: 7,
  },

  getters: {
    sumWithRootCount(state, getters, rootState) {
      return state.count + rootState.count
    },
  },

  mutations: {
    // `state` is the local module state
    increment: state => state.count++,
  },

  actions: {
    // inside module actions, context.state will expose the local state
    // and root state will be exposed as context.rootState
    incrementIfOddOnRootSum({
      state,
      commit,
      rootState
    }) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit('increment')
      }
    },
  },
}

const moduleC = {
  namespaced: true,

  modules: {
    subModule: {
      namespaced: true,

      state: {
        count: 33,
      },
    }
  },

  state: {
    count: 55,
  },

  getters: {
    // `state` is the local module state
    doubleCount: state => state.count * 2,

    /*
    someGetter(state, getters, rootState, rootGetters) {
      rootGetters.count;
      state.count;

      getters.someOtherGetter;
      rootGetters.someOtherGetter;
    }
    */
  },

  mutations: {
    increment: state => state.count++,
  },

  actions: {
    // inside module actions, context.state will expose the local state
    incrementIfOdd({
      state,
      commit
    }) {
      if (state.count % 2 === 1) {
        commit('increment')
      }
    },

    someGlobalAction: {
      root: true,
      handler({
        commit
      }) {
        commit('increment')
      }
    },

    /*
    someAction({
      dispatch,
      commit,
      getters,
      rootGetters
    }) {
      getters.someOtherGetter;
      rootGetters.someOtherGetter;

      dispatch('someOtherAction');
      dispatch('someOtherAction', null, { root: true });

      commit('someMutation');
      commit('someMutation', null, { root: true });
    },
    */
  },
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB,
    c: moduleC,
  },

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
    incrementBy(state, n) {
      state.count += n
    },
    incrementPayload(state, payload) {
      state.count += payload.amount
    },
    // we can use the ES2015 computed property name feature
    // to use a constant as the function name
    [MY_SQUARE_MUTATION](state) {
      state.count *= state.count
    },
    decrement: state => state.count--
  },

  actions: {
    increment(context) {
      context.commit('increment')
    },

    //ES6 argument destructuring
    incrementES6({
      commit
    }) {
      setTimeout(() => {
        commit('increment')
      }, 3000)
    },

    incrementBy({
      commit
    }, n) {
      commit('incrementBy', n)
    },

    incrementAsync({
      commit
    }, payload) {
      commit('incrementPayload', payload)
    },

    /*
    actionA ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('someMutation')
          resolve()
        }, 1000)
      })
    },

    actionB ({ dispatch, commit }) {
      return dispatch('actionA').then(() => {
        commit('someOtherMutation')
      })
    },

    // assuming `getData()` and `getOtherData()` return Promises
    async asyncActionA ({ commit }) {
      commit('gotData', await getData())
    },

    async asyncActionB ({ dispatch, commit }) {
      await dispatch('asyncActionA') // wait for `asyncActionA` to finish
      commit('gotOtherData', await getOtherData())
    },
    */
  },
})

new Vue({
  store,

  render: h => h(App),
}).$mount('#app')