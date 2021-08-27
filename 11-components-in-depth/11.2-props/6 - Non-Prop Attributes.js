Vue.component('base-input', {
    inheritAttrs: false,
    props: ['label', 'value'],
    template: `
        <label>
            {{ label }}
            <input
                v-bind="$attrs"
                v-bind:value="value"
                v-on:input="$emit('input', $event.target.value)"
            >
        </label>
    `
})

new Vue({
    el: '#app6',
    data: {
        username: ''
    }
})