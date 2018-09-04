import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        city: '深圳'  // 默认值是深圳
    },
    actions: {
        changeCity (ctx, city) {
            ctx.commit('actionsChangeCity', city)  // 组件的方法里监听changeCity事件: this.$store.dispatch('changeCity', city)
        }
    },
    mutations: {
        actionsChangeCity (state, city) {  // 接收actions里提交过来的数据, 并把state.city修改为接收到的值
            state.city = city
        }
    }
})

/*
    1. 安装
    npm i vuex --save 
     2. src目录下新建文件夹 store / index.js
     3. 编辑 index.js
        imporm Vue from 'vue'
        import Vuex from 'vuex'
        Vue.use(Vuex)
        export default new Vuex.Store({
            state: {city: '深圳'}
        })
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