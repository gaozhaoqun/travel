// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'  // 引入router文件夹下面的 index.js
import fastClick from 'fastclick' //传不到git?
import VueAwesomeSwiper from 'vue-awesome-swiper'  // 轮播插件
import 'styles/reset.css'    // 修改了webpack配置: styles 就相当于src/assets/styles
import 'styles/iconfont.css' // 修改webpack 一定要重启服务
import 'swiper/dist/css/swiper.css' //轮播插件css

Vue.config.productionTip = false
fastClick.attach(document.body)  //fastClick 自带的方法
Vue.use(VueAwesomeSwiper, /* { default global options 使用插件 这里可以传入默认参数 } */)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  // 路由就是根据网址的不同, 返回不同的内容给用户
  components: { App },
  template: '<App/>'
})
