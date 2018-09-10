<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content"></div>
    </div>
</template>

<script>
import DetailBanner from './components/banner'
import detailHeader from './components/header'
export default {
    name: 'Detail',
    components: {
        DetailBanner,
        detailHeader
    }
}
</script>

<style lang="stylus" scoped>
    .content 
        height 50rem
</style>
