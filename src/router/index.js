import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Cart from '../views/Cart.vue'
import Orders from '../views/Orders.vue'
import Restaurant from '../views/Restaurant.vue'

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
    },
    {
        path: '/orders',
        name: 'orders',
        component: Orders
    },
    {
        path: '/restaurant',
        name: 'restaurant',
        component: Restaurant
    }
]

const router = new Router({
    routes,
    linkExactActiveClass: "active"
})

export default router