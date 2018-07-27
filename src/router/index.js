import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/chat/Login'
import ChatMain from '@/components/chat/ChatMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      component: Login,
      redirect: '/login/01'
    }, {
      path: '/login/:tableNo',
      name: '登录界面',
      component: Login
    }, {
      path: '/chatMain/:tableNo/:userName',
      name: '聊天主界面',
      component: ChatMain
    }
  ]
})
