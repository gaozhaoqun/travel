<template>
    <transition>
        <!-- solt 插槽 把组件塞进去 -->
        <slot></slot>
    </transition>
</template>

<script>
export default {
    name: 'FadeAnimation'
}
</script>

<style lang="stylus" scoped>
    .v-enter,.v-leave-to
        opacity: 0
    .v-enter-active, .v-leave-active
        transition: opacity .2s
</style>
