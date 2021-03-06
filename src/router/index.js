import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/chat/Login'
import ChatMain from '@/components/chat/ChatMain'

import App from '@/App'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: '主页',
    component: App,
    children: [{
      path: '/',
      redirect: '/login/01'
    }, {
      path: '/login/:tableNo',
      name: '登录',
      component: Login
    }]
  }, {
    path: '/chatMain/:tableNo/:userName',
    component: ChatMain
  }
  ]
})
