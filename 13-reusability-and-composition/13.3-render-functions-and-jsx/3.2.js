var getChildrenTextContent = function (children) {
    return children.map(function (node) {
      return node.children
        ? getChildrenTextContent(node.children)
        : node.text
    }).join('')
}
  
Vue.component('anchored-heading', {
    render: function (createElement) {
      // tạo id với kebabCase
      var headingId = getChildrenTextContent(this.$slots.default)
        .toLowerCase()
        .replace(/\W+/g, '-')
        .replace(/(^\-|\-$)/g, '')
  
      return createElement(
        'h' + this.level,
        [
          createElement('a', {
            attrs: {
              name: headingId,
              href: '#' + headingId
            }
          }, this.$slots.default)
        ]
      )
    },
    props: {
      level: {
        type: Number,
        required: true
      }
    }
})

new Vue({
    el: '#app32'
})