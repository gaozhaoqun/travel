<template>
    <div>
        <div class="list" ref="wrapper">  <!-- ref可以获取DOM 符合better-scroll结构 -->
            <div>
                <div class="area">
                    <div class="title border-topbottom">当前城市 滚动插件: npm i better-scroll --save</div>
                    <div class="button-list">
                        <div class="button-wrapper">
                            <div class="button">深圳</div>
                        </div>
                    </div>
                </div>
                <div class="area">
                    <div class="title border-topbottom">热门城市</div>
                    <div class="button-list">
                        <div class="button-wrapper"  v-for="item of hotCities" :key="item.id">
                           <div class="button">{{ item.name }}</div>
                        </div>
                    </div>
                </div>
                <div class="area" v-for="(value, key) of cities" :key="key" :ref="key">
                    <div class="title border-topbottom"> {{ key }} </div>
                    <div class="item-list" v-for="i of value" :key="i.id">
                        <div class="item border-bottom">{{ i.name }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import Bscroll from 'better-scroll'  // 引入better-scroll插件
export default {
    name: 'CityList',
    props: {
        cities: Object,
        hotCities: Array,
        letter: String
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    watch: {
        letter () {  // 监听letter数据的变化, 一旦发生改变, 函数内的代码就要被执行, alphabet组件传给父元素的数据, 再传给list子组件
            // console.log(this.letter)
            if(this.letter) {
                console.log('this.letter是: ' + this.letter)
                const el = this.$refs[this.letter][0]  // 获取:ref 里面的内容 第[0]项才是DOM元素
                console.log(el)
                this.scroll.scrollToElement(el) // betterScroll插件一定要传入的是 DOM元素
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .border-topbottom:before,.border-topbottom:after,.border-bottom:before
        border-color: #ccc
    .list
        position absolute
        top 1.78rem
        right 0
        bottom 0
        left 0
        overflow hidden
        .title 
            line-height: .54rem
            font-size: .26rem
            background-color: #eee
            padding-left: .2rem
            color: #666
        .button-list
            padding: .1rem .6rem .1rem .1rem
            overflow hidden
            .button-wrapper
                float: left
                width: 33.33%
                .button
                    text-align center
                    padding: .1rem 0
                    margin .1rem
                    border: .02rem solid #ccc
                    border-radius: .06rem
        .item-list
            .item
                line-height: .76rem
                padding-left: .2rem
</style>
