import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import './assets/sass/style.sass'
import store from './store';



new Vue({
    el: '#app',
    store,
    router: router,
    components: { app: App },
    render: h => h('app')
})