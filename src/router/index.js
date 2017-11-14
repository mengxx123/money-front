import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Add from '@/components/Add'
import About from '@/components/About'
import Mine from '@/components/Mine'
import Count from '@/components/Count'
import Setting from '@/components/Setting'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/add',
            component: Add
        },
        {
            path: '/mine',
            component: Mine
        },
        {
            path: '/count',
            component: Count
        },
        {
            path: '/setting',
            component: Setting
        }
    ]
})
