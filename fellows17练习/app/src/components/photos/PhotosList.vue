<template>
    <ul class="photoData">
        <li v-for="(obj,index) in photoData" :key="index">
            <router-link :to="'/photoDetail/'+index">
                <img :src="obj.src" alt="">
            </router-link>
        </li>
    </ul>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                photoData:[]
            }
        },
         mounted:function(){
            this.$store.commit('change','rgb(64,224,208)'),
            this.$store.commit('changes','Photo'),

            axios.get('static/data/photodata.json').then((res)=>{
               this.photoData = res.data.photoData;
               this.$store.state.photoData = this.photoData
            })
        }
    }
</script>

<style scoped>
    .photoData{
        overflow: hidden;
    }
    .photoData li{
        float: left;
        width: 50%;
    }
    .photoData img{
        width: 100%
    }
</style>