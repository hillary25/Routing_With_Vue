// Imports always go first at the top
import SplashPage from "./modules/SplashPage.js";
import AppPage from "./modules/AppPage.js";
import ErrorPage from "./modules/ErrorPage.js";

const router = new VueRouter({
    routes: [
        // Loading site and hitting root route, this is an object
        { path: '/', name: "splash", component: SplashPage },
        { path: '/app', name: "app", component: AppPage },
        { path: '*', name: "error", component: ErrorPage } // * means catch anything that does not match other pages already defined (wildcard path always goes last)
    ]
})

const vm = new Vue({
    data: {

    },

    created: function() {
        console.log('app is up and running');
    },

    methods: {

    }, 

    router // This is shorthand for router: router
}).$mount("#app");