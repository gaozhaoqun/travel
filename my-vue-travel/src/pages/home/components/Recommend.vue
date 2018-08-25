<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    data () {
        return {
            recommendList: [
                {
                    id: '001', 
                    imgUrl: require('@/assets/img/fj1.jpeg'),
                    title: '大连圣亚海洋世界',
                    desc: '浪漫大连首站, 浪漫的海洋主题乐园'
                },
                {
                    id: '002', 
                    imgUrl: require('@/assets/img/fj2.jpeg'),
                    title: '大连圣亚海洋世界',
                    desc: '浪漫大连首站, 浪漫的海洋主题乐园'
                },
                {
                    id: '003', 
                    imgUrl: require('@/assets/img/fj3.jpeg'),
                    title: '大连圣亚海洋世界',
                    desc: '浪漫大连首站, 浪漫的海洋主题乐园'
                },
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .recommend-title 
        homeTitle()
    .item
        overflow hidden
        display flex
        height 1.9rem
        margin-bottom .1rem
        .item-img 
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex 1
            padding .1rem
            min-width 0  // 为了触发ellipsis方法
            .item-title 
                line-height .54rem
                font-size .32rem
                ellipsis()
            .item-desc
                line-height .4rem
                color: #ccc
                ellipsis()
            .item-button
                line-height .44rem
                background #ff9300
                padding 0 .2rem
                border-radius .06rem
                margin-top .2rem
                color #fff
</style>
