import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Home from '@/components/home'  // @符 是指src目录下
=======
import Home from '@/pages/home/home'  // @符 是指src目录下
>>>>>>> 3c0da02b06d3d2dc0d7e72ed8c1f364fb5bb6fd0

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
