Vue.component('todo-item', {
    // Ở đây chúng ta khai báo cho component todo-item 
    // nhận một "prop" (có thể hiểu là một thuộc tính tùy biến) 
    // có tên là "todo".
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7a',
    data: {
        groceryList: [
            { id: 0, text: 'Cà pháo' },
            { id: 1, text: 'Mắm tôm' },
            { id: 2, text: 'Miễn ăn được là được' }
        ]
    }
})