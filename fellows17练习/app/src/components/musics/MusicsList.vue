<template>
    <div>
       music
    </div>
</template>

<script>
    export default {
        mounted:function(){
            this.$store.commit('change','rgb(0,150,136)'),
            this.$store.commit('changes','Music')
        }
    }
</script>

<style scoped>

</style>