<template>
    <div>
        {{ msg }}
        <br>
        <router-link to="/">go home</router-link>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: "list页面"
        }
    }
}
</script>

<style>

</style>
