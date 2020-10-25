var vm = new Vue({
    el: '#app3a',
    data: {
        firstName: 'Trần',
        lastName: 'Lập',
        fullName: 'Trần Lập'
    },
    watch: {
        firstName: function (val) {
            this.fullName = val + ' ' + this.lastName
        },
        lastName: function (val) {
            this.fullName = this.firstName + ' ' + val
        }
    }
})

var vm1 = new Vue({
    el: '#app3b',
    data: {
        firstName: 'Trương',
        lastName: 'Long'
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }
    }
})