var vm = new Vue({
    el: '#app2',
    data: {
        attribute_href: 'href',
        url_en: 'https://vuejs.org/v2/guide/syntax.html#Dynamic-Arguments',
        event_name: 'click'
    },
    methods: {
        doSomething: function(event) {
            alert('Do something!')
        }
    }
})