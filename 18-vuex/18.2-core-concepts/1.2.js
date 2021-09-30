const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
})

const Counter = {
  template: `
  <div>
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
  `,
  computed: {
    count() {
      return this.$store.state.count
    }
  },

  methods: {
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    }
  },
}

new Vue({
  el: '#app',
  store,
  components: {
    Counter,
  }
});
