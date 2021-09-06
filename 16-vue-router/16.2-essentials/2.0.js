// 1. Define route components.
const User = {
    template: `
        <div>
            <p>User Template</p>
            <p><code>$route.params.id</code> = {{ $route.params.id }}</p>
        </div>
        `,
    watch: {
        $route(to, from) {
            // react to route changes from watch...
            alert('react to route changes from watch...')
        }
    },
    beforeRouteUpdate(to, from, next) {
        // react to route changes from beforeRouteUpdate...
        // don't forget to call next()
        alert('react to route changes from beforeRouteUpdate...')
        next()
    }
}
const UserAsterisk = { template: `
    <div>
        <p>/user-* Template</p>
        <p><code>$route.params.pathMatch</code> = {{ $route.params.pathMatch }}</p>
    </div>
    `
}
const NotFound = { template: `
    <div>
        <p>/non-existing : 404 Not Found Template</p>
        <p><code>$route.params.pathMatch</code> = {{ $route.params.pathMatch }}</p>
    </div>
    `
}

// 2. Define some routes
const routes = [
    // dynamic segments start with a colon
    { path: '/user/:id', component: User },
    // this.$router.push('/user-admin')
    { path: '/user-*', component: UserAsterisk },
    // this.$router.push('/non-existing')
    { path: '*', component: NotFound }
]

// 3. Create the router instance and pass the `routes` option
const router = new VueRouter({
    routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
const app = new Vue({
    router,
    methods: {
      goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      }
    }
}).$mount('#app')