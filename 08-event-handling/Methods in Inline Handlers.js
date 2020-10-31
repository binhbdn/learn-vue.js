new Vue({
    el: '#app3',
    methods: {
        say: function (message) {
            alert(message)
        },
        warn: function (message, event) {
            // bây giờ chúng ta có thể truy xuất đến sự kiện DOM native
            if (event) {
                event.preventDefault();
                alert(event.target.tagName)
            }
            alert(message)
        }
    }
})