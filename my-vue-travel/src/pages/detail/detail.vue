<template>
    <div>
        <detail-banner></detail-banner>
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
export default {
    name: 'Detail',
    components: {
        DetailBanner,
        detailHeader,
        detailList
    },
    data () {
        return {
            list: [{
                title: '学生票',
                children: [{
                    title: '成人三馆联票',
                    children: [{
                        title: '成人三馆联票 - 连锁店销售',
                        children: [{
                            title: '四级菜单了'
                        }]
                    }]
                }, {
                    title: '成人五馆联票'
                }]
            }, {
                title: '成人票',
                children: [{
                    title: '一折起售 - 限时特价!!!'
                }]
            }, {
                title: '儿童票'
            }, {
                title: '特惠票'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .content 
        height 50rem
</style>
