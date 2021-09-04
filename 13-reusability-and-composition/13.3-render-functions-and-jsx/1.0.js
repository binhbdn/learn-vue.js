Vue.component('anchored-heading-template', {
    template: '#anchored-heading-template',
    props: {
        level: {
            type: Number,
            required: true
        }
    }
})

new Vue({
    el: '#app10a'
})

Vue.component('anchored-heading', {
    render: function (createElement) {
        return createElement(
            'h' + this.level,   // tên thẻ
            this.$slots.default // mảng các phần tử con
        )
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
})

new Vue({
    el: '#app10b'
})