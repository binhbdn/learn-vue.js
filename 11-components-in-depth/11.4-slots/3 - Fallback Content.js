var SubmitButton = {
  template:`
    <button type="submit">
        <slot>Submit</slot>
    </button>
    `
}

var vm = new Vue({
  el: '#app3',
  components: {
      'submit-button': SubmitButton
  }
})