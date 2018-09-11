<template>
    <div>
        <router-link class="header-abs" to="/" tag="div" v-show="showAbs">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div 
            class="header-fixed" 
            v-show="!showAbs"
            :style="opacityStyle"
        >
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data () {
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handleScroll () {
            // console.log(document.documentElement.scrollTop)
            const top = document.documentElement.scrollTop
            if ( top > 50) {
                let opacity = top / 140   // 滚动条 在60 和 140 之间 做渐隐渐现的效果
                opacity = opacity > 1 ? 1 : opacity  // 让opacity 最大值只能是1 
                this.opacityStyle = {
                    opacity
                }
                this.showAbs = false
            } else {
                this.showAbs = true
            }
        }
    },
    activated () {
        // 绑定的是 全局事件, 如果不解绑 会非常高非常耗费性能!!!!!!!!!!!
        window.addEventListener('scroll', this.handleScroll)
    },
    deactivated () {
        // 由于activated 绑定的事件是在window上, 会导致在各个组件内都会执行该函数里面的方法,
        // 解决办法: 就是利用deactivated 解绑全局事件
       window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/varibles.styl';
   .header-abs 
        position absolute
        left .2rem
        top .2rem
        width .8rem
        height .8rem 
        line-height .8rem
        background rgba(0,0,0,.8)
        border-radius .8rem
        text-align center
        .header-abs-back
            color #fff
            font-size .38rem
    .header-fixed
        z-index  22
        position fixed
        top 0
        left 0
        right 0
        text-align: center
        color: #fff
        background: $bgColor
        height: $headerHeight
        line-height: $headerHeight
        font-size .32rem
        .header-fixed-back
            position absolute  // 让字体图标显示出来
            top 0
            left 0
            font-size .4rem
            text-align center
            width 0.84rem
            color #fff
</style>
