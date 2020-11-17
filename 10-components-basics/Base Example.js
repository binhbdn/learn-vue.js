// Define a new component called button-counter
// Định nghĩa một component với tên là "button-counter"
Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    // template: '<button v-on:click="count++">Bạn đã bấm {{ count }} lần.</button>'
})

new Vue({ el: '#app1' })