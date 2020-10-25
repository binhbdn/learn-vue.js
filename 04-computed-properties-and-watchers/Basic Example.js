var vm = new Vue({
    el: '#app1',
    data: {
      message: 'Hello',
      message_vn: 'người đông bến đợi thuyền xuôi ngược'
    },
    computed: {
        // a computed getter
        reversedMessage: function () {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('')
        },
        // một computed getter
        reversedMessage_vn: function () {
            // `this` trỏ tới đối tượng vm
            return this.message_vn.split(' ').reverse().join(' ')
        }
    }
})