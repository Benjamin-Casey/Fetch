import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Cart from '../views/Cart.vue'

Vue.use(Router)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    }
]

const router = new Router({
    routes,
    linkExactActiveClass: "active"
})

export default router