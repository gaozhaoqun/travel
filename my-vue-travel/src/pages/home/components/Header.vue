<template>
  <div class="header"> 
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input "><span class="iconfont">&#xe632;&nbsp;</span>输入城市/景点游玩主题</div>
    <div class="header-right">城市<span class="iconfont">&#xe6aa;</span></div>
  </div>
</template>
<script>
export default {
  name: "HomeHeader"
};
</script>
<style scoped lang="stylus">
.header {
  display: flex;
  line-height: 0.86rem;
  background: #00bcd4;
  color: #fff;

  .header-left {
    width: 0.84rem;
    float: left;
    text-align center
  }

  .header-input {
    flex: 1;
    background: #fff;
    color: #333;
    margin-top .12rem
    height .64rem
    color #ccc
    line-height .64rem
    border-radius .1rem
    text-indent .2rem
  }

  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;
  }
}
</style>
