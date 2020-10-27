var vm = new Vue({
    el: '#app1',
    data: {
        isBgBlue: true,
        hasError: null,
        classObject1: {
            'bg-blue': false,
            'text-danger': true
        }
    },
    computed: {
        classObject2: function () {
            return {
                'bg-blue': this.isBgBlue && !this.hasError,
                'text-danger': this.hasError && this.hasError.type === 'fatal'
            }
        }
    }
})