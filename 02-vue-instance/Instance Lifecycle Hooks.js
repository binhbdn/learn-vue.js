var vm = new Vue({
    el: '#app5',
    data: { a: 1 },
    created: function () {
        // `this` points to the vm instance
        console.log('a is: ' + this.a)
        // `this` trỏ đến đối tượng Vue hiện hành
        console.log('giá trị của a là ' + this.a)
    }
})
// => "a is: 1"
// => "giá trị của a là 1"