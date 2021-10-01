<template>
  <div>
    <h2>Actions</h2>
    <p>Actions are similar to mutations, the differences being that:</p>
    <ul>
      <li>Instead of mutating the state, actions commit mutations.</li>
      <li>Actions can contain arbitrary asynchronous operations.</li>
    </ul>
    <p>
      Action handlers receive a context object which exposes the same set of
      methods/properties on the store instance, so you can call
      <code>context.commit</code> to commit a mutation, or access the state and
      getters via <code>context.state</code> and <code>context.getters</code>.
      We can even call other actions with <code>context.dispatch</code>. We will
      see why this context object is not the store instance itself when we
      introduce
      <a href="https://vuex.vuejs.org/guide/modules.html">Modules</a> later.
    </p>

    <h3>Dispatching Actions</h3>
    <p>count = {{ count }}</p>
    <p>Actions are triggered with the <code>store.dispatch</code> method:</p>
    <p>
      <button @click="$store.dispatch('increment')">
        $store.dispatch('increment')
      </button>
    </p>
    <p>We can perform <code>asynchronous</code> operations inside an action:</p>
    <p>
      Waiting for 3s to see count change
      <button @click="$store.dispatch('incrementES6')">
        $store.dispatch('incrementES6')
      </button>
    </p>
    <p>Actions support the same payload format and object-style dispatch:</p>
    <p>
      dispatch with a payload
      <button @click="$store.dispatch('incrementAsync', { amount: 13 })">
        $store.dispatch('incrementAsync', {amount: 13})
      </button>
    </p>
    <p>
      dispatch with an object
      <button @click="$store.dispatch({ type: 'incrementAsync', amount: 17 })">
        $store.dispatch({ type: 'incrementAsync', amount: 17 })
      </button>
    </p>
    <p>
      A more practical example of real-world actions would be an action to
      checkout a shopping cart, which involves
      <strong>calling an async API</strong> and
      <strong>committing multiple mutations</strong>:
    </p>
    <pre>
    actions: {
      checkout ({ commit, state }, products) {
        // save the items currently in the cart
        const savedCartItems = [...state.cart.added]
        // send out checkout request, and optimistically
        // clear the cart
        commit(types.CHECKOUT_REQUEST)
        // the shop API accepts a success callback and a failure callback
        shop.buyProducts(
          products,
          // handle success
          () => commit(types.CHECKOUT_SUCCESS),
          // handle failure
          () => commit(types.CHECKOUT_FAILURE, savedCartItems)
        )
      }
    }
    </pre>

    <h3>Dispatching Actions in Components</h3>
    <p>You can dispatch actions in components with:</p>
    <ul>
      <li><code>this.$store.dispatch('xxx')</code></li>
      <li>
        use <code>mapActions</code> helper which maps component methods to
        <code>store.dispatch</code> calls (requires root
        <code>store</code> injection)
      </li>
    </ul>
    <p>use <code>mapActions</code></p>
    <p>count = {{ count }}</p>
    <p>
      <button @click="increment">increment</button>
    </p>
    <p>
      <button @click="incrementBy(4)">incrementBy(4)</button>
    </p>
    <p>
      <button @click="add">add</button>
    </p>

    <h3>Composing Actions</h3>
    <p>
      Actions are often asynchronous, so how do we know when an action is done?
      And more importantly, how can we compose multiple actions together to
      handle more complex async flows?
    </p>
    <p>
      The first thing to know is that <code>store.dispatch</code> can handle
      Promise returned by the triggered action handler and it also returns
      Promise.
    </p>
    <blockquote>
      <p>
        It's possible for a <code>store.dispatch</code> to trigger multiple
        action handlers in different modules. In such a case the returned value
        will be a Promise that resolves when all triggered handlers have been
        resolved.
      </p>
    </blockquote>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Actions",

  computed: mapState([
    // map this.count to store.state.count
    "count",
  ]),

  methods: {
    testAction() {
      this.$store.dispatch("actionA").then(() => {});
    },
    ...mapActions([
      "increment", // map `this.increment()` to `this.$store.dispatch('increment')`

      // `mapActions` also supports payloads:
      "incrementBy", // map `this.incrementBy(amount)` to `this.$store.dispatch('incrementBy', amount)`
    ]),
    ...mapActions({
      add: "increment", // map `this.add()` to `this.$store.dispatch('increment')`
    }),
  },
};
</script>

<style>
code {
  color: red;
}
</style>