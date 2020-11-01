var vm = new Vue({
    el: '#app6',
    methods: {
        warn: function (message, event) {
            if (event) {
                event.preventDefault();
                alert('event.key === ' + event.key + '\n'+ message)
            }
        }
    }
})