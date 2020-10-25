var vm = new Vue({
    el: '#app1',
    data: {
        url_en: 'https://vuejs.org/v2/guide/syntax.html#Arguments',
        url_vn: 'https://vi.vuejs.org/v2/guide/syntax.html#Tham-so'
    },
    methods: {
        doSomething: function(event) {
            alert('Do something!')
        }
    }
})