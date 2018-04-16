import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../Pages/Auth/Login'
import Register from '../Pages/Auth/Register'

import DashboardLayout from '../Pages/Dashboard/Layout';
import DashboardHome from '../Pages/Dashboard/Children/Home'
import DashboardContacts from '../Pages/Dashboard/Children/Contacts'

let router = new VueRouter({
    routes: [
        { path: '/login', component: Login, name: 'login', meta: { requiredAuth: false } },
        { path: '/register', component: Register, name: 'register', meta: { requiredAuth: false } },
        {
            path: '/', component: DashboardLayout, meta: { requiredAuth: true },
            children: [
                { path: '', component: DashboardHome, name: 'dashboard-home' },
                { path: 'contacts', component: DashboardContacts, name: 'dashboard-contacts' },
            ]
        },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiredAuth)) {
        if (Vue.auth.isAuthenticated()) next()
        else next({ path: '/login' })
    } else {
        next()
    }

})

export default router;