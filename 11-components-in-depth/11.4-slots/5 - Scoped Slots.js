var CurrentUser = {
    data: function () {
        return {
            //  test for 
            // user: undefined
            user: {
                firstName: 'Nghĩa Bình',
                lastName: 'Bùi Đoàn'
            }
        }
    },
    template:`
        <span>
            <slot v-bind:user="user">
                {{ user.lastName }}
            </slot>
        </span>
        `
}

var UndefinedCurrentUser = {
    data: function () {
        return {
            user: undefined
        }
    },
    template:`
        <span>
            <slot v-bind:user="user">
                {{ user.lastName }}
            </slot>
        </span>
        `
}

var vm = new Vue({
    el: '#app5',
    components: {
        'current-user': CurrentUser,
        'undefined-current-user': UndefinedCurrentUser
    }
})