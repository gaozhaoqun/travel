<template>
    <div class='icons'>
        <swiper :options="swiperOption">
            <swiper-slide  v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
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
    data () {
        return {
            swiperOption: {
               loop: false  // 循环轮播
           },
           iconList: [
               {id: '001', imgUrl: require('@/assets/img/icon2.jpg'), desc: '我是糯米'},
               {id: '002', imgUrl: require('@/assets/img/icon1.jpg'), desc: '我是途牛'},
               {id: '003', imgUrl: require('@/assets/img/icon1.jpg'), desc: '我是途牛'},
               {id: '004', imgUrl: require('@/assets/img/icon1.jpg'), desc: '我是途牛'},
               {id: '005', imgUrl: require('@/assets/img/icon2.jpg'), desc: '我是糯米'},
               {id: '006', imgUrl: require('@/assets/img/icon2.jpg'), desc: '我是糯米'},
               {id: '007', imgUrl: require('@/assets/img/icon1.jpg'), desc: '我是途牛'},
               {id: '008', imgUrl: require('@/assets/img/icon2.jpg'), desc: '我是糯米'},
               {id: '009', imgUrl: require('@/assets/img/icon1.jpg'), desc: '我是途牛'},
               {id: '010', imgUrl: require('@/assets/img/icon2.jpg'), desc: '我是糯米'},
               {id: '011', imgUrl: require('@/assets/img/icon1.jpg'), desc: '我是途牛'},
               {id: '012', imgUrl: require('@/assets/img/icon2.jpg'), desc: '我是糯米'},
               {id: '013', imgUrl: require('@/assets/img/icon2.jpg'), desc: '我是糯米'}
           ]
        }
    },
    computed: {
        pages () {
            const pages = []
            this.iconList.forEach((item,index) => {
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                    pages[page] = []
                }
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
        padding-bottom 25%
    }
    .icons {
        height: 0
        overflow: hidden
        padding-bottom: 50%
        .icon {
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
    }
</style>
