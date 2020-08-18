import Vuex from 'vuex'
import Vue from 'vue'
import products from './modules/orders'
import cart from './modules/orders'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        products, cart
    }
})
