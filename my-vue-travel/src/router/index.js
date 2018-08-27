import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'  // @符 是指src目录下
import City from '@/pages/city/city'

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
    }
  ]
})
