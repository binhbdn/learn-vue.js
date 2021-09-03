// define a mixin object
var myMixin = {
    created: function () {
        this.hello()
    },
    methods: {
        hello: function () {
            console.log('hello from mixin!')
        }
    }
}
  
// define a component that uses this mixin
var MyComponent = Vue.extend({
    mixins: [myMixin]
})

var component = new MyComponent() // => "hello from mixin!"