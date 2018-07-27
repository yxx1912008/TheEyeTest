import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/chat/Login'
import ChatMain from '@/components/chat/ChatMain'
import Home from '@/components/chat/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      component: Home,
      children: [{
        path: '/login/:tableNo',
        name: '登录',
        component: Login
      },
        {
          path: '/chatMain',
          name: '聊天主界面',
          component: ChatMain
        }, {
          path: '*',
          name: '登录',
          redirect: Login
        }
      ]
    }
  ]
})
