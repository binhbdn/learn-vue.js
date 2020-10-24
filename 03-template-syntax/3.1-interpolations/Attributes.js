var vm = new Vue({
    el: '#app3a',
    data: {
        dynamicId: 'id-red',
        isButtonDisabled: true
    }
})

var vmb = new Vue({
    el: '#app3b',
    data: {
        dynamicId: 'id-red',
        isButtonDisabled: true
    },
    methods: {
        Change: function (event) {
            this.isButtonDisabled = !this.isButtonDisabled
        }
    }
})