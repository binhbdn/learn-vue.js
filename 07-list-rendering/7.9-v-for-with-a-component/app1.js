Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['title']
})

new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'luộc khoai',
      },
      {
        id: 2,
        title: 'cùng chị giã gạo',
      },
      {
        id: 3,
        title: 'thổi cơm'
      },
      {
        id: 4,
        title: 'nhổ cỏ vườn'
      }
    ],
    nextTodoId: 5
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})