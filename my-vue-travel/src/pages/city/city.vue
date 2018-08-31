<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :letter="letter" :cities="cities" :hotCities="hotCities"></city-list>
        <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>    
    </div>    
</template>

<script>
import axios from 'axios'
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
import CityAlphabet from './components/alphabet'
export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data () {
        return {
            cities: {},  // 定义数据用于接收 axios返回的数据
            hotCities: [], // 定义数据用于接收 axios返回的数据
            letter: ''
        }
    },
    mounted () {
        this.getCityInfo()
     },
    methods: {
        getCityInfo () {
            axios.get('/api/city.json').then(this.getSucc)
        },
        getSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.cities = data.cities  // 数据赋值
                this.hotCities = data.hotCities // 数据赋值
            }
        },
        handleLetterChange (letter) {
            this.letter = letter
        }
    }
}
</script>

<style lang="stylus" scoped></style>
