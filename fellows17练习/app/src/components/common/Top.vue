<template>
    <div class="com-top" :style="{background:$store.state.bgColor}">
      <router-link to="/">
          <span class="com-top-btn">首页</span>
      </router-link>
      <h2>{{$store.state.topTitle}}</h2>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .com-top{
        height: 1rem;
        background:rgb(33, 150, 243);
        position: fixed;
        top:0;
        left: 0;
        width: 100%;

    }
    .com-top-btn{
        color: #fff;
        position: absolute;
        left:0.2rem;
        top:50%;
        transform: translateY(-50%);
        font-size: 0.3rem;
    }
    .com-top h2{
        line-height: 1rem;
        text-align: center;
        color: #fff;
        font-size :0.7rem;
    }
</style>
