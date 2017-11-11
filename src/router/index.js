import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Add from '@/components/Add'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: HelloWorld
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/add',
            component: Add
        }
    ]
})
