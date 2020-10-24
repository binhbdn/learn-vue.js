var obj = {
    foo: 'bar'
}

Object.freeze(obj)

var vm = new Vue({
    el: '#app2',
    data: obj
})