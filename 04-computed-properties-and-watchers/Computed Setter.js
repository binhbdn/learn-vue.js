var vm = new Vue({
    el: '#app4',
    data: {
        firstName: 'Triển',
        lastName: 'Chiêu'
    },
    computed: {
        fullName: {
            // getter
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function (newValue) {
                var names = newValue.split(' ')
                var tmpStr = ''
                this.firstName = names[0]
                // this.lastName = names[names.length - 1]
                for (let i=1;i<(names.length - 1);i++) {
                    tmpStr += names[i] + ' '
                }
                this.lastName = tmpStr + names[names.length - 1]
            }
        }
    }
})