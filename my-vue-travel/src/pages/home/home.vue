<template>
  <div> 
    <home-header></home-header>
  </div>
</template>
<script>
import HomeHeader from './components/Header'  // 引入子组件 ,然后记得注册子组件
export default {
  name: 'Home',
  components: {
    HomeHeader  // ES6写法, 键和值一样的话 , 可以这样简写
  }
}
</script>
<style scoped></style>
