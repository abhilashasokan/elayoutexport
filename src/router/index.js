import Vue from 'vue'
import Router from 'vue-router'
import el_home from '@/components/home'
import el_login from '@/components/auth/login/Login'
import el_register from '@/components/auth/register/Register'

import el_elements from '@/components/contents/elements'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: el_home
    },
    {
      path: '/admin',
      name: 'Home',
      component: el_home,
      children: [
        {
          path: 'elements',
          name: 'elements',
          component: el_elements
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: el_login
    },
    {
      path: '/register',
      name: 'register',
      component: el_register
    }
  ]
})
