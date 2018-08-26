<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item of list" :key="item.id">
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
    props:{
        list: Array
    },
    data () {
        return {
           swiperOption: {
               pagination: '.swiper-pagination',  // 白色点点分页符
               loop: true  // 循环轮播
           }
        }
    },
    computed: {
        showSwiper () {
            return this.list.length //  v-if="list.lenth" : 解决轮播图默认显示最后一张的问题 
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
        overflow hidden
        padding-bottom: 31.25%
        background #eee
        .swiper-img
            width 100%
        
</style>
