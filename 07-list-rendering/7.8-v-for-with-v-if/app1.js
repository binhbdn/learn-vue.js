var vm = new Vue({
  el: '#app1',
  data: {
    todos: [
      { text: 'Learn JavaScript', isComplete: true },
      { text: 'Learn Vue', isComplete: false },
      { text: 'Learn Nuxt', isComplete: false },
      { text: 'Build something awesome', isComplete: false }
    ]
  }
})