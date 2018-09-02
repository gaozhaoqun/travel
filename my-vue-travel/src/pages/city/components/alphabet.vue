<template>
    <ul class="list">
        <li 
        class="item" 
        @click="handleLetterClick" 
        v-for="i of letters" 
        :key="i"
        :ref="i"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        > 
            {{ i }} 
        </li>
    </ul>   
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object
    },
    computed: {
        letters () {
            const letters = []
            for (let i in this.cities) {
                console.log(i) 
                letters.push(i)
            }
            return letters
            // 得到这个数组['A', 'B', 'C', ...]
        }
    },
    data () {
        return {
            touchStatus: false,
            startY: 0,
            timer: null // 性能优化第二步: 函数节流, 由于touchMove函数
        }
    },
    updated () {  // 性能优化: 第一步
        this.startY = this.$refs['A'][0].offsetTop  // 当alphabet被重新渲染, updated周琦钩子才会被执行, 再去获取 A 字母的offsetTop的值
    },
    methods: {
        handleLetterClick (e) {
            this.$emit('change',e.target.innerText)
        },
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            this.timer = setTimeout( () => {
                if (this.touchStatus) {
                    // const startY = this.$refs['A'][0].offsetTop  // li循环的第一项是 A, 然后offsetTop是到顶部的距离
                    const touchY = e.touches[0].clientY - 79 // clientY值是元素距离屏幕最顶端的距离, 要减去搜索框 + 城市选择的高度 .79rem
                    const index = Math.floor((touchY - this.startY) / 22)  // 字母的下标,要向下取整, 可以算出 当前滑动的位置对应的字母下标是哪个
                    //console.log('index是: ' + index)
                    if (index >= 0 && index < this.letters.length) {
                        //console.log(this.letters[index])
                        this.$emit('change', this.letters[index]) // this.letters[1 /2 /3], 也就是向父级穿递 A B C ..
                    }
                }
            }, 16)  // 函数节流, 延迟16毫秒之后执行, 假设在16毫秒之间又做了手指滚动的操作, 那么它会把上一次你做的操作清除掉, 重新执行这次操作
                    // 很大程度上节约 handleTouchMove 执行频率
            
        },
        handleTouchEnd () {
            this.touchStatus = false
        }
    }
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
