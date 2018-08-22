<template>
  <div> 
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
  </div>
</template>
<script>
import HomeHeader from './components/Header'  // 引入子组件 ,然后记得注册子组件
import HomeSwiper from './components/swiper'  // 引入swiper插件
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
export default {
  name: 'Home',
  components: {
    HomeHeader,  // ES6写法, 键和值一样的话 , 可以这样简写
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  }
}
</script>
<style scoped></style>
