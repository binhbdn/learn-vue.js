Vue.component('todo-list', {
    props: ['todos'],
    template: `
        <ul>
            <li
            v-for="todo in todos"
            v-bind:key="todo.id"
            >
                <slot name="todo" v-bind:todo="todo">
                    {{ todo.text }}
                </slot>
            </li>
        </ul>
        `
})

var vm = new Vue({
    el: '#app8',
    data: {
      todos: [
        { id:1, text: 'Learn JavaScript', isComplete: true },
        { id:2, text: 'Learn Vue', isComplete: true },
        { id:3, text: 'Learn Nuxt', isComplete: false },
        { id:4, text: 'Build something awesome', isComplete: false }
      ]
    }
  })