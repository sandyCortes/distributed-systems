import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/home/Home'
import Users from './components/Users/User'
import Ingredients from './components/ingredients/Ingredients'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/users',
        name: 'users',
        component: Users
    },
    {
        path: '/ingredients',
        component: Ingredients
    }
]

const router = new VueRouter({
    routes
})

export default router
