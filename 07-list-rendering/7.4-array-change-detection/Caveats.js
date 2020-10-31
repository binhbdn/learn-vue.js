var vm = new Vue({
    el: '#app3',
    data: {
        items: [
            { name: 'Cà phê' },
            { name: 'Trà đặc' },
            { name: 'Bò húc' }
        ],
        userProfile: {
            name: 'Bành Tổ'
        }
    },
    methods: {
        vueSet: function() {
            // Vue.set(vm.items, 0, { name: 'Nước chanh' })
            Vue.set(this.items, 0, { name: 'Nước chanh' })
        },
        vmSplice: function() {
            // vm.items.splice(4, 1, { name: 'Nước cam' })
            this.items.splice(4, 1, { name: 'Nước cam' })
        },
    }
})
var vm1 = Vue.extend({
    data: () => ({
        userProfile: {
            age: 800,
            favoriteColor: 'Tím mộng mơ'
        }
    })
})
var vm2 = vm1.extend({
    data: () => ({
        userProfile: {
            name: 'Bành Tổ'
        }
    })
})
new vm2({ el: "#app3a" })