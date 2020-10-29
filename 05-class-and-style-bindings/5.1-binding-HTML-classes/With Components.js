Vue.component('my-component', {
    template: '<p class="w-50 text-danger">Hi</p>'
})

var vm = new Vue({
    el: '#app3',
    data: {
        isBgGrey: true
    }
})