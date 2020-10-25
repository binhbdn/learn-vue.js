var vm = new Vue({
    el: '#app4',
    data: {
        number: 9,
        ok: false,
        message: 'Trăm năm trong cõi người ta',
        id: 'blue',
        rawhtml: '<span v-bind:id="\'list-\' + id">#list-blue have blue color!</span>'
    }
})