<template>
    <ul class="list">
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
    </ul>   
</template>

<script>
export default {
    name: 'CityAlphabet'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .list
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column
        position: absolute
        right: 0
        top: 1.78rem
        bottom: 0
        width: .4rem
        color: $bgColor
        .item
            line-height: .44rem
            text-align center
                
</style>
