<template>
    <div>
        <div class="list">
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">深圳</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">深圳</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">深圳</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">深圳</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">深圳</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">深圳</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">深圳</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">深圳</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">深圳</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">深圳</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">深圳</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">深圳</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">深圳</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">深圳</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">阿拉善</div>
                    <div class="item border-bottom">阿拉善</div>
                    <div class="item border-bottom">阿拉善</div>
                    <div class="item border-bottom">阿拉善</div>
                    <div class="item border-bottom">阿拉善</div>
                    <div class="item border-bottom">阿拉善</div>
                    <div class="item border-bottom">阿拉善</div>
                    <div class="item border-bottom">阿拉善</div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">B</div>
                <div class="item-list">
                    <div class="item border-bottom">阿拉善</div>
                    <div class="item border-bottom">阿拉善</div>
                    <div class="item border-bottom">阿拉善</div>
                    <div class="item border-bottom">阿拉善</div>
                    <div class="item border-bottom">阿拉善</div>
                    <div class="item border-bottom">阿拉善</div>
                    <div class="item border-bottom">阿拉善</div>
                    <div class="item border-bottom">阿拉善</div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">C</div>
                <div class="item-list">
                    <div class="item border-bottom">阿拉善</div>
                    <div class="item border-bottom">阿拉善</div>
                    <div class="item border-bottom">阿拉善</div>
                    <div class="item border-bottom">阿拉善</div>
                    <div class="item border-bottom">阿拉善</div>
                    <div class="item border-bottom">阿拉善</div>
                    <div class="item border-bottom">阿拉善</div>
                    <div class="item border-bottom">阿拉善</div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    name: 'CityList'
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
            line-height: .44rem
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
