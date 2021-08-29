var NavigationLink = {
  props: {
    url: {
      type: String
    }
  },
  template:`<a :href="url" class="nav-link"><slot></slot></a>`
}

var FontAwesomeIcon = {
  props: {
    name: {
      type: String
    }
  },
  template:`<i :class="'fa fa-'+name"></i>`
}

var vm = new Vue({
  el: '#app1',
  components: {
      'navigation-link': NavigationLink,
      'font-awesome-icon': FontAwesomeIcon
  }
})