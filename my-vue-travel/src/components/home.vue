<template>
  <div> 
    {{ msg }} 
    <br>
    <router-link to="/List">go list</router-link>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style scoped></style>
