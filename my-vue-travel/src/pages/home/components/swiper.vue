<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
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
               pagination: '.swiper-pagination',  // 白色点点分页符
               loop: true  // 循环轮播
           },
           swiperList: [
               // {id: '001',imgUrl: 'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/20180716_wap_11043.jpg'},
               // {id: '002',imgUrl: 'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/dujia_shuqi_banner_20180710.jpg'}
               {id: '001',imgUrl: require('@/assets/img/rottweiler1.jpg')},  // 引用本地图片要用 require('图片路径')
               {id: '002',imgUrl: require('@/assets/img/rottweiler2.jpg')}
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
     下面的 .wrapper 里的padding-bottom[假设图片宽750, 高度是184, 用高除以宽度的结果].)
        height 0
        overflow hidden
           padding-bottom: 32.1%
    */
    .wrapper
        width 100%
        height 0
        // overflow hidden
        padding-bottom: 32.1%
        background #eee
        .swiper-img
            width 100%
            height 2.4rem
        
</style>
