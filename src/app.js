import Vue from 'vue'
import App from './App.vue'
import router from './router';
import './assets/sass/style.sass'

new Vue({
    el: '#app',
    router: router,
    components: { app: App },
    render: h => h('app')
})