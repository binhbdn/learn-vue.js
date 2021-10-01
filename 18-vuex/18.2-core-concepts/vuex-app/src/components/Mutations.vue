<template>
  <div>
    <h2>Mutations</h2>
    <p>count = {{ count }}</p>

    <h3>Commit with Payload</h3>
    <p>
      <button @click="$store.commit('incrementBy', 10)">
        $store.commit('incrementBy', 10)
      </button>
    </p>
    <p>
      <button @click="$store.commit('incrementPayload', { amount: 15 })">
        $store.commit('incrementPayload', {amount: 15})
      </button>
    </p>

    <h3>Object-Style Commit</h3>
    <p>
      <button @click="$store.commit({ type: 'incrementPayload', amount: 5 })">
        $store.commit({ type: 'incrementPayload', amount: 5 })
      </button>
    </p>

    <h3>Mutations Follow Vue's Reactivity Rules</h3>
    <p>When adding new properties to an Object, you should either:</p>
    <ul>
      <li>Use Vue.set(obj, 'newProp', 123), or</li>
      <li>
        <p>
          Replace that Object with a fresh one. For example, using the object
          spread syntax we can write it like this:
        </p>
        <p>state.obj = { ...state.obj, newProp: 123 }</p>
      </li>
    </ul>

    <h3>Using Constants for Mutation Types</h3>
    <p>
      <button @click="$store.commit('SQUARE')">$store.commit('SQUARE')</button>
    </p>

    <h3>Mutations Must Be Synchronous</h3>
    <p>
      One important rule to remember is that<strong
        >mutation handler functions must be synchronous.</strong
      >
    </p>

    <h3>Committing Mutations in Components</h3>
    <ul>
      <li>
        You can commit mutations in components with
        <b>this.$store.commit('xxx')</b>
      </li>
      <li>
        or use the <b>mapMutations</b> helper which maps component methods to
        <b>store.commit</b> calls (requires root <b>store</b> injection)
      </li>
    </ul>
    <h4>Use mapMutations</h4>
    <p>count = {{ count }}</p>
    <p>
      <button @click="increment">increment</button>
    </p>
    <p>
      <button @click="incrementBy(7)">incrementBy(7)</button>
    </p>
    <p>
      <button @click="add">add</button>
    </p>

    <h3>On to Actions</h3>
    <ul>
      <li>In Vuex, <b>mutations are synchronous transactions</b></li>
      <li>
        To handle asynchronous operations, let's introduce
        <a href="https://vuex.vuejs.org/guide/actions.html">Actions</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Mutations",

  computed: mapState([
    // map this.count to store.state.count
    "count",
  ]),
  methods: {
    ...mapMutations([
      "increment", // map `this.increment()` to `this.$store.commit('increment')`

      // `mapMutations` also supports payloads:
      "incrementBy", // map `this.incrementBy(amount)` to `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: "increment", // map `this.add()` to `this.$store.commit('increment')`
    }),
  },
};
</script>
