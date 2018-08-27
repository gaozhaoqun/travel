<template>
    <div>
        <div class="header">
            <router-link to="/">
                <div class="iconfont back-icon">&#xe624;</div>
            </router-link>
            城市选择
        </div>
    </div>    
</template>

<script>
export default {
    name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .header 
        position relative
        overflow: hidden
        text-align: center
        color: #fff
        background: $bgColor
        height: $headerHeight
        line-height: $headerHeight
        font-size .32rem
        .back-icon
            position absolute  // 让字体图标显示出来
            top 0
            left 0
            font-size .4rem
            text-align center
            width 0.84rem
            color #fff
</style>
