<template>
    <div class='icons'>
        <swiper :options="swiperOption">
            <swiper-slide  v-for="(page, index) of pages" :key="index">  <!-- 循环出几页 -->
                <div class="icon" v-for="item of page" :key="item.id">   <!-- 循环出几个图标 -->
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" />
                        <p class="icon-desc"> {{ item.desc }} </p>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    props: {
        list: Array
    },
    data () {
        return {
            swiperOption: {
               loop: false  // 循环轮播
           }
        }
    },
    computed: {
        pages () {
            // const只保证常量名指向的地址不变，并不能保证地址的数据不变
            const pages = []  // pages是最外面的大数组 page是里面的数组
            this.list.forEach((item,index) => {
                const page = Math.floor(index / 8)  // 向下取整
                if (!pages[page]) {
                    pages[page] = []  // 每页8个图标
                } // item是iconList的每一项: {id: '001', imgUrl: require('...'), desc: '我是糯米'},
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .icons >>> .swiper-container{
        padding-bottom 1%
    }
    .icon {
        margin-top .1rem
        position relative
        float left
        width: 25%
        height 0
        padding-bottom: 25%
        .icon-img {
            display block
            position absolute
            top 0
            left 0
            bottom .44rem
            right 0
            box-sizing border-box
            padding .1rem
            .icon-img-content {
                height 100%
                display block
                margin 0 auto
            }
        }
        .icon-desc {
            position absolute 
            left 0
            bottom -.42rem
            height .44rem
            line-height .44rem
            text-align center
            color $c333
            width 100%
            ellipsis()
        }
    }
</style>
