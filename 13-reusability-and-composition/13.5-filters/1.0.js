new Vue({
    el: '#example_1',
    data: function () {
        return {
            message: 'đầu câu thì viết hoa'
        }
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
})