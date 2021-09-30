<template>
  <div>
    <h2>The mapState Helper</h2>
    <p>count = {{ count }}</p>
    <p>countAlias = {{ countAlias }}</p>
    <p>countPlusLocalState = {{ countPlusLocalState }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
// in full builds helpers are exposed as Vuex.mapState
import { mapState } from "vuex";

export default {
  name: "TheMapStateHelper",

  data() {
    return {
      localCount: 2,
    };
  },

  computed: mapState({
    // arrow functions can make the code very succinct!
    count: (state) => state.count,

    // passing the string value 'count' is same as `state => state.count`
    countAlias: "count",

    // to access local state with `this`, a normal function must be used
    countPlusLocalState(state) {
      return state.count + this.localCount;
    },
  }),
  /*We can also pass a string array to mapState when the name of a mapped computed property is the same as a state sub tree name.
  computed: mapState([
    // map this.count to store.state.count
    'count'
  ])
  */

  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
  },
};
</script>
