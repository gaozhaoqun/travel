<template>
    <div class='icons'>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="@/assets/img/icon1.jpg" />
                <p class="icon-desc">热门景点</p>
            </div>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="@/assets/img/icon1.jpg" />
                <p class="icon-desc">热门景点</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    data () {
        return {
            
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .icons {
        height: 0
        overflow: hidden
        padding-bottom: 50%
        .icon {
            position relative
            float: left
            width: 25%
            height 0
            padding-bottom: 25%
            .icon-img {
                display block
                position absolute
                top 0
                left 0
                bottom .44rem
                right 0
                box-sizing border-box
                padding .1rem
                .icon-img-content {
                    height 100%
                    display block
                    margin 0 auto
                }
            }
            .icon-desc {
                position absolute 
                left 0
                bottom -.42rem
                height .44rem
                line-height .44rem
                text-align center
                color $c333
                width 100%
            }
        }
    }
</style>
