<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="searchInput" type="text" placeholder="輸入城市名或拼音" />
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" @click="handleCityClick(item.name)" v-for="item of list" :key="item.id">
                    {{ item.name }}
                </li>
                <li v-show="hasNoData" class="search-item border-bottom">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
    name: 'CitySearch',
    props: {
        cities: Object
    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    methods: {
        ...mapMutations(['changeCity']),
        handleCityClick (city) {
            // this.$store.dispatch('changeCity', city) // 把数据通过dispatch方法传入到 store文件夹里index.js [actions].
            // this.$store.commit('changeCity', city)
            this.changeCity(city)
            this.$router.push('/') // 路由跳转到首页
        }
        
    },
    watch: {
        keyword () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword) {  //  如果搜索输入框为空, 清空list数组
                this.list = []
                return
            }
            this.timer = setTimeout(() => {  // 当keyword发生改变的时候, 隔100毫秒这个箭头函数会被执行
                const result = []
                for (let i in this.cities) {
                    this.cities[i].forEach( (value) => {
                        if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                            result.push(value)
                        }
                    })
                }
                this.list = result
            }, 10)
        }
    },
    computed: {
        hasNoData () {
            return !this.list.length
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.search)
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .search
        height: .72rem
        background: $bgColor
        padding: .1rem
        .searchInput
            box-sizing border-box
            color: #666
            height .72rem
            line-height .72rem
            width 100%
            border-radius .06rem
            padding: .1rem
    .search-content 
        overflow hidden
        position absolute
        top: 1.78rem
        left: 0
        right 0
        bottom 0
        z-index 1
        background #fff
        .search-item
            line-height .62rem
            padding-left .2rem
            color #666
            background #fff
</style>
