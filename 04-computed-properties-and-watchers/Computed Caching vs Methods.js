var vm = new Vue({
    el: '#app1',
    data: {
      message: 'Hello',
      message_vn: 'xa ngân tiếng hát đàn trầm bổng'
    },
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        reversedMessage_vn: function () {
            return this.message_vn.split(' ').reverse().join(' ')
        }
    }
})