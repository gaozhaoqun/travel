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