<template>
    <div>

    </div>
</template>

<script>
    export default {
         mounted:function(){
            this.$store.commit('change','rgb(64,224,208)'),
            this.$store.commit('changes','Photo')
        }
    }
</script>

<style scoped>

</style>