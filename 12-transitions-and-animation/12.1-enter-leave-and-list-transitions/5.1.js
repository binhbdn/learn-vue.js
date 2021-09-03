new Vue({
    el: '#list-demo',
    data: {
      items: [1,2,3,4,5,6,7,8,9],
      nextNum: 10
    },
    methods: {
      randomIndex: function () {
        return Math.floor(Math.random() * this.items.length)
      },
      add: function () {
        this.items.splice(this.randomIndex(), 0, this.nextNum++)
      },
      remove: function () {
        this.items.splice(this.randomIndex(), 1)
      },
    }
})