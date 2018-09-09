<template>
    <div>

        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="">
            <div class="banner-info">
                <div class="banner-title">大连极地海洋世界</div>
                <div class="banner-number"><span class="iconfont banner-icon">&#xe64f;</span>39</div>
            </div>
        </div>

        <common-gallery @closeSwiper="close" :imgs="imgs" v-show="showGallery"></common-gallery>
    </div>
</template>

<script>
import commonGallery from 'common/gallary/Gallery'
export default {
    name: 'DetailBanner',
    data () {
        return {
            imgs: [
                'https://imgs.qunarzz.com/sight/p0/1608/40/401f995038ca4d91a3.water.jpg_r_800x800_61120df4.jpg',
                'https://s.qunarzz.com/payshopping/guide/1495700554780/02.png'
                ],
            showGallery: false
        }
    },
    components: {
        commonGallery
    },
    methods: {
        handleBannerClick () {
            this.showGallery = true
        },
        close () {
            this.showGallery = false
        }
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            line-height .6rem
            color #fff
            background linear-gradient(top , rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem
            .banner-number
                margin-top .12rem
                padding 0 .4rem
                line-height .32rem
                height .32rem
                border-radius .2rem
                background #000
                .banner-icon
                    font-size .32rem
                    margin-right .05rem
</style>
