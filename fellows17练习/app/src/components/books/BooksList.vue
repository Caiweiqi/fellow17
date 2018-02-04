<template>
    <div>
      <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe>
    </div>
</template>

<script>
    import vueswipe  from 'vue-swipe/dist/vue-swipe.css'
    import { Swipe, SwipeItem } from 'vue-swipe';
    export default {
          mounted:function(){
            this.$store.commit('change','rgb(255,105,180)'),
            this.$store.commit('changes','Book')
        },
        components:{
            Swipe,
            SwipeItem
        }
    }
</script>

<style scoped>
    .my-swipe {
    height: 350px;
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