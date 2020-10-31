var example2 = new Vue({
  el: '#app2',
  data: {
    name: 'Vue.js'
  },
  // định nghĩa phương thức trong object `methods`
  methods: {
    greet: function (event) {
      // bên trong một phương thức, `this` trỏ đến đối tượng Vue
      alert('Xin chào ' + this.name + '!')
      // `event` là sự kiện DOM native
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})
  
// bạn cũng có thể gọi phương thức từ JavaScript
example2.greet() // => 'Xin chào Vue.js!'