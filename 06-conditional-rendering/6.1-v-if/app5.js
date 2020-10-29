var vm = new Vue({
    el: '#app5',
    data: {
        loginType: 'username',
        loginType1: 'username'
    },
    methods: {
        toggleLoginType: function() {
            if (this.loginType=='username') {
                this.loginType=null
            } else {
                this.loginType='username'
            }
        },
        toggleLoginType1: function() {
            if (this.loginType1=='username') {
                this.loginType1=null
            } else {
                this.loginType1='username'
            }
        }
    }
})