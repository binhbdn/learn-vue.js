Vue.directive('pin1', {
    bind: function (el, binding, vnode) {
        el.style.position = 'fixed'
        el.style.top = binding.value + 'px'
    }
})

new Vue({
    el: '#baseexample'
})

Vue.directive('pin', {
    bind: function (el, binding, vnode) {
      el.style.position = 'fixed'
      var s = (binding.arg == 'left' ? 'left' : 'top')
      el.style[s] = binding.value + 'px'
    }
})

new Vue({
    el: '#dynamicexample',
    data: function () {
        return {
            direction: 'top'// or 'left'
        }
    }
})