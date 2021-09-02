Vue.component('my-component',{});
new Vue({
    el: '#app41a'
})

Vue.component('my-checkbox', {
    data() {
        return { checked: false, title: 'Check me' }
    },
    methods: {
        check() { this.checked = !this.checked; }
    }
});
new Vue({
    el: '#app41b'
})