const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const User = {
    template: `
        <div>
            <p>User Template</p>
            <p><code>$route.params.userId</code> = {{ $route.params.userId }}</p>
        </div>
        `
}
const Register = { template: '<div>register</div>' }

const userId = '123'

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/user/:userId', name: 'user', component: User },
    { path: '/register', component: Register }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router,
      methods: {
            goBack() {
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
                // go forward by one record, the same as history.forward()
                // router.go(1)

                // go back by one record, the same as history.back()
                // router.go(-1)

                // go forward by 3 records
                // router.go(3)

                // fails silently if there aren't that many records.
                // router.go(-100)
                // router.go(100)
            },
            routerPush1() {
                // literal string path
                router.push('foo')
            },
            routerPush2() {
                // object
                this.$router.push({ path: 'bar' })
            },
            routerPush3() {
                // named route
                router.push({ name: 'user', params: { userId: '123' } })
            },
            routerPush4() {
                // with query, resulting in /register?plan=private
                router.push({ path: 'register', query: { plan: 'private' } })
            },
            routerPush5() {
                // named route + named userID
                router.push({ name: 'user', params: { userId  } }) // -> /user/123
            },
            routerPush6() {
                // path: expression with named userID
                router.push({ path: `/user/${userId}` }) // -> /user/123
            },
            routerPush7() {
                // params are ignored if a path is provided
                // This will NOT work
                router.push({ path: '/user', params: { userId } }) // -> /user
            }
      }
}).$mount('#app')
