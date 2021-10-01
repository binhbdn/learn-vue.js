<template>
  <div id="app">
    <HelloWorld msg="VueX Core Concepts" />
    <TheMapStateHelper />
    <ObjectSpreadOperator />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TheMapStateHelper from "./components/TheMapStateHelper.vue";
import ObjectSpreadOperator from "./components/ObjectSpreadOperator.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    TheMapStateHelper,
    ObjectSpreadOperator,
  },
};
</script>
