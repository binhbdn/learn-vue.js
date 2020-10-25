var vm = new Vue({
    el: '#app1',
    data: {
        url_en: 'https://vuejs.org/v2/guide/syntax.html#v-bind-Shorthand',
        url_vn: 'https://vi.vuejs.org/v2/guide/syntax.html#v-bind',
        key: 'href',
        event: 'click'
    },
    methods: {
        doSomething: function(event) {
            alert('Do something!')
        }
    }
})