// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* 导入ElementUI */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/* 引入资源请求插件 */
import VueResource from 'vue-resource'
import Vuex from 'vuex'

/* 使用VueResource插件 */
Vue.use(VueResource)
Vue.config.productionTip = false
// 导入ElementUI 界面库
Vue.use(ElementUI)
// 导入 vuex
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
  }
)
