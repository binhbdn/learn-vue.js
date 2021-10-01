<template>
  <div id="app">
    <HelloWorld msg="VueX Core Concepts" />
    <TheMapStateHelper />
    <ObjectSpreadOperator />
    <Getters />
    <Mutations />
    <Actions />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TheMapStateHelper from "./components/TheMapStateHelper.vue";
import ObjectSpreadOperator from "./components/ObjectSpreadOperator.vue";
import Getters from "./components/Getters.vue";
import Mutations from "./components/Mutations.vue";
import Actions from "./components/Actions.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    TheMapStateHelper,
    ObjectSpreadOperator,
    Getters,
    Mutations,
    Actions,
  },
};
</script>
