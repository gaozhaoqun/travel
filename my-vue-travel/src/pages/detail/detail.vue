<template>
    <div>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/banner'
import detailHeader from './components/header'
import detailList from './components/list'
import axios from 'axios'
export default {
    name: 'Detail',
    components: {
        DetailBanner,
        detailHeader,
        detailList
    },
    data () {
        return {
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
            list: []
        }
    },
    mounted () {
        this.getDetail()
    },
    methods: {
        getDetail () {
            axios.get('/api/detail.json', {
                params: {
                    id: this.$route.params.id // 获取动态路由的id
                }
            }).then(this.getDetailSucc)
        },
        getDetailSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
                this.list = data.categoryList
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .content 
        height 50rem
</style>
