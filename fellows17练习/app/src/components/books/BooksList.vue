<template>
    <div>
      <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe>
        <li></li>
    </div>
</template>

<script>
    import axios from 'axios'
    import vueswipe  from 'vue-swipe/dist/vue-swipe.css'
    import { Swipe, SwipeItem } from 'vue-swipe';
    export default {
        components:{
            Swipe,
            SwipeItem
        },
        data() {
            return {
                bookList:[]
            }
        },
        mounted:function(){
            this.$store.commit('change','rgb(255,105,180)'),
            this.$store.commit('changes','Book')

            // axios.get(API_INTERFACE+'http://m.maoyan.com/movie/list.json?type=hot&offset=&limit=10').then((res)=>{
            //    this.bookList = res.
            // })
        },
        
    }
</script>

<style scoped>
    .my-swipe {
    height: 300px;
    }

    .slide1 {
    background: url(c1.jpg) 0 0 no-repeat;
    background-size:cover
    }

    .slide2 {
    background: url(c2.jpg) 0 0 no-repeat;
    background-size:cover
    }

    .slide3 {
    background:url(c3.jpg) 0 0 no-repeat;
    background-size:cover
    }
</style>