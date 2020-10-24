// Our data object
// Chúng ta khởi tạo một object "data"
var data = {
    a: 1,
    newTodoText: '',
    visitCount: 0,
    hideCompletedTodos: false,
    todos: [],
    error: null
}

// The object is added to a Vue instance
// Object này được truyền vào một đối tượng Vue
var vm = new Vue({
    el: '#app1',
    data: data
})