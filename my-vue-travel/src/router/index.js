import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'  // @符 是指src目录下
import City from '@/pages/city/city'
import Detail from '@/pages/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id', // 动态路由, 前面的路径detail,后面是参数, 存放在id的变量里面
      name: 'Detail',
      component: Detail
    }
  ]
})
