<template>
    <div>
        <div class="container" @click="handleClick">
            <div class="wrapper">
                <swiper :options="swiperOptions">
                    <swiper-slide v-for="(item, index) in imgs" :key="index">
                        <img class="swiper-img" :src="item">
                    </swiper-slide>
                    <div class="swiper-pagination"  slot="pagination"></div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'commonGallery',
    props: {
        imgs: {
            type: Array,
            // default () {
            //     return [] // 共用的组件, 还是别设置默认值的好
            // }
        }
    },
    data () {
        return {
            swiperOptions: {
                pagination: '.swiper-pagination',  // ○ ● ○ 分页符, 在组件标签中 用slot插槽来接收使用
                paginationType: 'fraction',  // 设置分页符为: 1 / 2 这种类型的分页
                observer:true,  // swiper插件监听DOM元素发生变化 就自我刷新, 解决一进页面导致左右滑动失效问题 
                observeParents:true,
            }
        }
    },
    methods: {
        handleClick () {
            this.$emit('closeSwiper')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow inherit
    .container
        display flex
        flex-direction column
        justify-content center
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        z-index 99
        background #000
        color #fff
        .wrapper
            height 0
            width 100%
            padding-bottom 100%
            .swiper-img
                width 100%
            .swiper-pagination-fraction
                bottom -1rem
</style>
