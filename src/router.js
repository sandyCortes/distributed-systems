import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/home/Home'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }
]

const router = new VueRouter({
    routes
})

export default router