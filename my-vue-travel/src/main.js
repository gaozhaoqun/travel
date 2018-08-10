// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'  // 引入router文件夹下面的 index.js
import fastClick from 'fastclick'
import './assets/styles/reset.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  // 路由就是根据网址的不同, 返回不同的内容给用户
  components: { App },
  template: '<App/>'
})
