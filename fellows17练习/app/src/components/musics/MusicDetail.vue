<template>
    <div>
        <aplayer autoplay :music="musicData" :showlrc="isLrc" v-if="isShow" theme="rgb(0,150,136)"></aplayer>
    </div>
</template>

<script>
    import axios from 'axios';
    import Aplayer from 'vue-aplayer';
    export default {
        data() {
            return {
                musicData:[],
                isShow:false,
                isLrc:true
            }
        },
        components:{
            Aplayer
        },
        mounted:function(){
            this.$store.commit('change','rgb(0,150,136)');
            this.$store.commit('changes','Music');
            axios.get('/static/data/musicdata.json').then((res)=>{
                var arr = res.data.musicData;
                for(var i=0;i<arr.length;i++){
                    arr[i].lrc = '/static' + arr[i].lrc;
                    var {title,author,src:url,musicImgSrc:pic,lrc} = arr[i];
                    var obj = {title,author,url,pic,lrc};
                    this.musicData.push(obj);
                }
                this.isShow = true;
            })
        }
        
    }
</script>

<style scoped>
     .aplayer{
      margin: 0;
     }
</style>