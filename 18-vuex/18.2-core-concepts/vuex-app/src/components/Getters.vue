<template>
  <div>
    <h2>Getters</h2>

    <h3>Property-Style Access</h3>
    <p>$store.getters.doneTodos = {{ $store.getters.doneTodos }}</p>
    <p>$store.getters.doneTodosCount = {{ $store.getters.doneTodosCount }}</p>
    <p>
      localComputedDoneTodosCount = this.$store.getters.doneTodosCount =
      {{ localComputedDoneTodosCount }}
    </p>

    <h3>Method-Style Access</h3>
    <p>$store.getters.getTodoById(2) = {{ $store.getters.getTodoById(2) }}</p>

    <h3>The mapGetters Helper</h3>
    <p>doneTodos = {{ doneTodos }}</p>
    <p>getTodoById(2) = {{ getTodoById(2) }}</p>
    <p>doneCount = {{ doneCount }}</p>
  </div>
</template>

<script>
// in full builds helpers are exposed as Vuex.mapGetters
import { mapGetters } from "vuex";

export default {
  name: "Getters",

  computed: {
    localComputedDoneTodosCount() {
      return this.$store.getters.doneTodosCount;
    },
    ...mapGetters(["doneTodos", "getTodoById"]),
    ...mapGetters({
      // map `this.doneCount` to `this.$store.getters.doneTodosCount`
      doneCount: "doneTodosCount",
    }),
  },
};
</script>
