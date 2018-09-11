<template>
    <div>
        <div class="item" v-for="(item, index) in list" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon">
                    <span class="iconfont piao">&#xe609;</span>{{ item.title }}
                </span>
            </div>

            <!-- 递归组件的调用 -->
            <div v-if="item.children" class="item-children">
                <!-- 如果自身有 children 把children当做list传给自己 -->
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'detailList',  // 组件的名字很大的用处就是为了递归组件
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
    .item-title 
        line-height .8rem
        font-size .28rem
        padding 0 .32rem
        .item-title-icon
            .piao
                color: #272
                margin-right .12rem
    .item-children
        padding 0 .3rem
</style>
