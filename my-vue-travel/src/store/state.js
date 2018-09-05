let defaultCity = '上海'  // 设置默认城市
try {
    if (localStorage.city) { // 用到localStorage的时候一定要加 try catch
        defaultCity = localStorage.city
    }
} catch (e) {}

export default {
    city: defaultCity
}