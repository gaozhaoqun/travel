export default {
    changeCity (state, city) {  // 接收actions里提交过来的数据, 并把state.city修改为接收到的值
        state.city = city
        try {
            localStorage.city = city
        } catch (e) {}
        
    }
}