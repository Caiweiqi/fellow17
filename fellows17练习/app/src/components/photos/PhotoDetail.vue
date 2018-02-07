<template>
    <div>
        

    </div>
</template>

<script>
    import axios from 'axios';
    import VueTouch from "vue-touch";
    import Vue from 'vue';
    Vue.use(VueTouch,{name:'v-touch'});

    export default {
        data() {
            return {
                idx: this.$route.params.idx
            }
        },
    }
</script>

<style scoped>

</style>