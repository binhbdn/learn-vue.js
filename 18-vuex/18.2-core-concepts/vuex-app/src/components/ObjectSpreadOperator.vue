<template>
  <div>
    <h2>Object Spread Operator</h2>
    <p>
      localComputed = this.$store.state.count + this.localCount =
      {{ localComputed }}
    </p>
    <p>
      otherLocalComputed = 2 * this.$store.state.count + 3 * this.localCount =
      {{ otherLocalComputed }}
    </p>
    <p>count = {{ count }}</p>
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
  name: "ObjectSpreadOperator",

  data() {
    return {
      localCount: 2,
    };
  },
  computed: {
    localComputed() {
      return this.$store.state.count + this.localCount;
    },
    otherLocalComputed() {
      return 2 * this.$store.state.count + 3 * this.localCount;
    },
    // mix this into the outer object with the object spread operator
    ...mapState([
      // map this.count to store.state.count
      "count",
    ]),
  },

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
