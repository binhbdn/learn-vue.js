Vue.component('base-checkbox', {
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      checked: Boolean
    },
    template: `
      <input
        type="checkbox"
        v-bind:checked="checked"
        v-on:change="$emit('change', $event.target.checked)"
      >
    `
})

new Vue({
    el: "#app2",
    data: {
        lovingVue: true
    }
})