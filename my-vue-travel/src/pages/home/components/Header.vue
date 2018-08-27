<template>
  <div class="header"> 
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input "><span class="iconfont">&#xe632;&nbsp;</span>输入城市/景点游玩主题</div>
    <router-link to="/city">
      <div class="header-right arrow-icon">{{ this.city}}<span class="iconfont">&#xe6aa;</span></div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "HomeHeader",
  props: {  // 接收父组件传过来的值是city 类型是String, 然后在标签中直接使用 this.city
    city: String
  }
};
</script>
<style scoped lang="stylus">
  /* 在样式中 用@符引, 前面一定要加 ~  */
  /*  @import '~@/assets/styles/varibles.styl'  */
  @import '~styles/varibles.styl'   // 引用styles目录下的 varibles.styl
  .header 
    display: flex
    line-height: 0.86rem
    background: $bgColor    // 使用stylus变量
    color: #fff

    .header-left 
      width: 0.84rem
      float: left
      text-align center
      .back-icon
        text-align center
        font-size .4rem

    .header-input 
      flex: 1
      background: #fff
      color: #333
      margin-top .12rem
      height .64rem
      color #ccc
      line-height .64rem
      border-radius .1rem
      text-indent .2rem

    .header-right 
      width: 1.24rem
      color: #fff
      float: right
      text-align: center
      .arrow-icon
        font-size .2rem
</style>
