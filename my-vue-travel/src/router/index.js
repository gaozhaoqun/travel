import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'  // @符 是指src目录下
import List from '@/components/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/List',
      name: 'List',
      component: List
    }
  ]
})
