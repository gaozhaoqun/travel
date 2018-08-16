<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="(item,idx) of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
            <!-- <div class="swiper-button-next" slot="button-next"></div> -->
            <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data () {
        return {
           swiperOption: {
               pagination: '.swiper-pagination',
               loop: true  // 循环轮播
           },
           swiperList: [
               {id: '001',imgUrl: 'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/20180716_wap_11043.jpg'},
               {id: '002',imgUrl: 'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/dujia_shuqi_banner_20180710.jpg'}
           ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    // 由于: swiper-pagination-bullet-active 这个是别的组件的样式, 想改的话 就用 >>> 来让样式穿透
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff!important
    /*
     template模板里面,最外层加div class=wrapper 是为了图片未显示的时候  撑高的
     下面的 .wrapper 里的padding-bottom[假设图片宽640, 高度是200, 用高除以宽度的结果].)
        height 0
        overflow hidden
        padding-bottom 31.25%
    */
    .wrapper
        width 7.5rem
        height 0
        // overflow hidden
        padding-bottom 31.25%
        background #eee
        .swiper-img
            width 7.5rem
            height 2.3rem
        
</style>
