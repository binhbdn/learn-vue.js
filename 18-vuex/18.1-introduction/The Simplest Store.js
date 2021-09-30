const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
})

store.commit('increment')
console.log(store.state.count) // -> 1

new Vue({
  el: '#app',

  //ES6: shorthand of store: store,
  store,

  data: {
    message: 'Hello world'
  },

  computed: {
    count() {
      return store.state.count;
    }
  },

  methods: {
    increment() {
      store.commit('increment')
      console.log(store.state.count)
    },
    decrement() {
      store.commit('decrement')
      console.log(store.state.count)
    }
  },
});
