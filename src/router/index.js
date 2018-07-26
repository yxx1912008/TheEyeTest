import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/chat/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:tableNo',
      name: '登录',
      component: Login
    }
  ]
})
