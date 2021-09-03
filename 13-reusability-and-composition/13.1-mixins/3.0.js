// inject a handler for `myOption` custom option
Vue.mixin({
    created: function () {
        var myOption = this.$options.myOption
        if (myOption) {
            console.log(myOption)
        }
    }
})
  
new Vue({
    myOption: 'hello!'
})
// => "hello!"
  
new Vue({
    myOption: 'bye bye!'
})
// => "bye bye!!"