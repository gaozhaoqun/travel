<template>
    <div>
        <div class="weekend-title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    props: {
        weekendList: Array
    }
    //  data () {
    //     return {
    //         weekendList: [
    //             {
    //                 id: '001', 
    //                 imgUrl: require('@/assets/img/weekendImg.jpg'),
    //                 title: '大连圣亚海洋世界',
    //                 desc: '浪漫大连首站, 浪漫的海洋主题乐园'
    //             },
    //             {
    //                 id: '002', 
    //                 imgUrl: require('@/assets/img/weekendImg.jpg'),
    //                 title: '大连圣亚海洋世界',
    //                 desc: '浪漫大连首站, 浪漫的海洋主题乐园'
    //             },
    //             {
    //                 id: '003', 
    //                 imgUrl: require('@/assets/img/weekendImg.jpg'),
    //                 title: '大连圣亚海洋世界',
    //                 desc: '浪漫大连首站, 浪漫的海洋主题乐园'
    //             },
    //         ]
    //     }
    // }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .weekend-title
        homeTitle()
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 37.09%
        .item-img 
            width 100%
    .item-info
        padding .1rem
        .item-title 
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color: #ccc
            ellipsis()
</style>
