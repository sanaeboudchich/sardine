import Vue from 'vue'
import firebase from 'firebase'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'Home',
        // component: Home
        components: {
            default: () => import(/* webpackChunkName: "home" */ '@/Home.vue'),
        },
    },

    {
        path: '/Legale',
        name: 'Mentionslegales',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/Legale.vue'),
        },
    },

    {
        path: '/Singup',
        name: 'Singup',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/Singup.vue'),
        },
    },
    {
        path: '/Slack',
        name: 'Slack',
        components: {
            default: () => import(/* webpackChunkName: "Slack" */ '@/Slack.vue'),
        },
    },
    {
        path: '/Senior',
        name: 'Senior',
        components: {
            default: () => import(/* webpackChunkName: "Senior" */ '@/Senior.vue'),
        },
    },
    {
        path: '/Profil1',
        name: 'Profil1',
        components: {
            default: () => import(/* webpackChunkName: "Profil1" */ '@/Profil1.vue'),
        },
    },
    {
        path: '/Profil',
        name: 'Profil',
        components: {
            default: () => import(/* webpackChunkName: "Profil" */ '@/Profil.vue'),
        },
    },
    {
        path: '/Profil2',
        name: 'Profil2',
        components: {
            default: () => import(/* webpackChunkName: "Profil2" */ '@/Profil2.vue'),
        },
    },
    {
        path: '/Profil3',
        name: 'Profil3',
        components: {
            default: () => import(/* webpackChunkName: "Profil3" */ '@/Profil3.vue'),

        },
        meta: {
            authRequired: true,
        },
    },

    {
        path: '/Junior',
        name: 'Junior',
        components: {
            default: () => import(/* webpackChunkName: "Junior" */ '@/Junior.vue'),
        },
    },
    {
        path: '/Profil4',
        name: 'Profil4',
        components: {
            default: () => import(/* webpackChunkName: "Profil4" */ '@/Profil4.vue'),
        },
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                next();
            } else {
                alert('You must be logged in to see this page');
            }
        });
        
 
    } else {
        next();
    }
})

export default router
