<template>
  <div id="app">
    <HelloWorld msg="VueX Core Concepts" />
    <TheMapStateHelper />
    <ObjectSpreadOperator />
    <Getters />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TheMapStateHelper from "./components/TheMapStateHelper.vue";
import ObjectSpreadOperator from "./components/ObjectSpreadOperator.vue";
import Getters from "./components/Getters.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    TheMapStateHelper,
    ObjectSpreadOperator,
    Getters,
  },
};
</script>
