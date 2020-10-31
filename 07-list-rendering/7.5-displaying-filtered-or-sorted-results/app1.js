var vm = new Vue({
    el: '#app1',
    data: {
        numbers: [ 1, 2, 3, 4, 5 ]
    },
    computed: {
        evenNumbers: function () {
          return this.numbers.filter(function (number) {
            return number % 2 === 0
          })
        }
    }
})