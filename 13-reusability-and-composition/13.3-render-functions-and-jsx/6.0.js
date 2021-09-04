var getChildrenTextContent = function (children) {
    return children.map(function (node) {
      return node.children
        ? getChildrenTextContent(node.children)
        : node.text
    }).join('')
}
  
Vue.component('anchored-heading', {
    functional: true,

    render: function (createElement, context) {
      // tạo id với kebabCase
      var headingId = getChildrenTextContent(context.children)
        .toLowerCase()
        .replace(/\W+/g, '-')
        .replace(/(^\-|\-$)/g, '')
  
      return createElement(
        'h' + context.props.level,
        [
          createElement('a', {
            attrs: {
              name: headingId,
              href: '#' + headingId
            }
          }, context.children)
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
    el: '#app60'
})