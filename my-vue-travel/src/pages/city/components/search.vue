<template>
    <div class="search">
        <input class="searchInput" type="text" placeholder="輸入城市名或拼音" />
    </div>
</template>

<script>
export default {
    name: 'CitySearch'
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
</style>
