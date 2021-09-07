const UserSettingsNav = {
	template: `
    <div class="us__nav">
        <router-link to="/settings/emails">emails</router-link>
        <br>
        <router-link to="/settings/profile">profile</router-link>
    </div>
    `
}
const UserSettings = {
	template: `
    <div class="us">
        <h2>User Settings</h2>
        <UserSettingsNav/>
        <router-view class ="us__content"/>
        <router-view name="helper" class="us__content us__content--helper"/>
    </div>
    `,
    components: { UserSettingsNav }
}

const UserEmailsSubscriptions = {
	template: `
    <div>
        <h3>Email Subscriptions</h3>
    </div>
    `
}

const UserProfile = {
	template: `
    <div>
        <h3>Edit your profile</h3>
    </div>
    `
}

const UserProfilePreview = {
	template: `
    <div>
        <h3>Preview of your profile</h3>
    </div>
    `
}

const router = new VueRouter({
    //mode: 'history',
    routes: [
        {
            path: '/settings',
            // You could also have named views at the top
            component: UserSettings,
            children: [{
                path: 'emails',
                component: UserEmailsSubscriptions
            }, {
                path: 'profile',
                components: {
                    default: UserProfile,
                    helper: UserProfilePreview
                }
            }]
        }
    ]
})

router.push('/settings/emails')

new Vue({
	router,
    el: '#app'
})