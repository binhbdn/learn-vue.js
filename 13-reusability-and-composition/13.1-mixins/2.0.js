var mixin1 = {
    data: function () {
        return {
            message: 'hello',
            foo: 'abc'
        }
    }
}
  
new Vue({
    mixins: [mixin1],
    data: function () {
        return {
            message: 'goodbye',
            bar: 'def'
        }
    },
    created: function () {
        console.log(this.$data)
        // => { message: "goodbye", foo: "abc", bar: "def" }
    }
})

var mixin2 = {
    created: function () {
        console.log('mixin2 hook called')
    }
}
  
new Vue({
    mixins: [mixin2],
    created: function () {
        console.log('component hook called')
    }
})
  
  // => "mixin hook called"
  // => "component hook called"

var mixin3 = {
    methods: {
      foo: function () {
            console.log('foo')
      },
      conflicting: function () {
            console.log('from mixin3')
      }
    }
}
  
var vm = new Vue({
    mixins: [mixin3],
    methods: {
      bar: function () {
            console.log('bar')
      },
      conflicting: function () {
            console.log('from self')
      }
    }
})
  
vm.foo() // => "foo"
vm.bar() // => "bar"
vm.conflicting() // => "from self"