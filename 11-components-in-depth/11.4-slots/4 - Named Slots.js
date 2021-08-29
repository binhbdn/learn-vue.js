var BaseLayout = {
  template:`
    <div class="container">
    <header>
        <slot name="header"></slot>
    </header>
    <main>
        <slot></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
    </div>
    `
}

var vm = new Vue({
  el: '#app4',
  components: {
      'base-layout': BaseLayout
  }
})