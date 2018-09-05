import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

// let defaultCity = '上海'  // 设置默认城市
// try {
//     if (localStorage.city) { // 用到localStorage的时候一定要加 try catch
//         defaultCity = localStorage.city
//     }
// } catch (e) {}

export default new Vuex.Store({
    state: state,   // 值是 上面import的state
    // actions: {
    //     changeCity (ctx, city) {
    //         ctx.commit('changeCity', city)  // 组件的方法里监听changeCity事件: this.$store.dispatch('changeCity', city)
    //     }
    // },
    mutations // import mutations from './mutations' 进来的
})

/*
    1. 安装
    npm i vuex --save 

    2. src目录下新建文件夹 store / index.js

    3. 编辑 index.js
        import Vue from 'vue'
        import Vuex from 'vuex'
        Vue.use(Vuex)
        export default new Vuex.Store({
            state: {city: '深圳'}
        })
        actions: {
        changeCity (ctx, city) {
            ctx.commit('actionsChangeCity', city)  // 组件的方法里监听changeCity事件: this.$store.dispatch('changeCity', city)
        }
    },
        mutations: {
            changeCity (state, city) {  // 参数是监听别的组件 传入进来的city
                state.city = city  // 把从别的组件接收来的数据, 赋值给state.city
            }
        }
    4. 在组件里使用
        在标签栏定义个方法 handleCityClick(item.name)
        methods: {
            handleCityClick (city) {
                this.$store.dispatch('changeCity, city)
            }
        }

    5. Vue的页面跳转
    methods: {
            handleCityClick (city) {
                this.$store.dispatch('changeCity', city) // 把选中的值, 传给state
                this.$router.push('/')  // 跳转到首页
            }
        }
*/