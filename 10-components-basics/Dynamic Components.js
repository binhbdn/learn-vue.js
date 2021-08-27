Vue.component("tab-home", {
    template: "<div>Home component</div>"
});
Vue.component("tab-posts", {
    template: "<div>Posts component</div>"
});
Vue.component("tab-archive", {
    template: "<div>Archive component</div>"
});

new Vue({
    el: "#app10a",
    data: {
        currentTab: "Home",
        tabs: ["Home", "Posts", "Archive"]
    },
    computed: {
        currentTabComponent: function() {
        return "tab-" + this.currentTab.toLowerCase();
    }
    }
});


var tabs = [
    {
        name: "Home",
        component: {
            template: "<div>Home component</div>"
        }
    },
    {
        name: "Posts",
        component: {
            template: "<div>Posts component</div>"
        }
    },
    {
        name: "Archive",
        component: {
            template: "<div>Archive component</div>"
        }
    }
];

new Vue({
    el: "#app10b",
    data: {
        tabs: tabs,
        currentTab: tabs[0]
    }
});