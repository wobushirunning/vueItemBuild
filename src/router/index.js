import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/login'
import Dailycheck from '@/views/dailycheck'
import Digitmap from '@/views/digitmap'
import MainView from '@/views/MainView'
import Selfhelpbank from '@/views/selfhelpbank'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/',
    name: '主页',
    component: MainView
  }, {
    path: '/dailycheck',
    name: '每日检查',
    component: Dailycheck
  }, {
    path: '/digitmap',
    name: '电子地图',
    component: Digitmap
  }, {
    path: '/selfhelpbank',
    name: '自助银行',
    component: Selfhelpbank
  }]
})

router.beforeEach((to, from, next) => {
  next()
})
export default router
