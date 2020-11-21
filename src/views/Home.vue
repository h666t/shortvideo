<template>
  <div class="wrapper">
    <div class="header">
      <img src="//i.loli.net/2020/11/21/goPAW7zSrCt4VY9.png" alt="">
    </div>
    <HomeArticle/>
  </div>
</template>

<script lang="ts">
import HomeArticle from '../components/home/HomeArticle.vue';
export default {
  components: {HomeArticle}
}
</script>

<style lang="scss" scoped>
.wrapper{
  height: 100vh ;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgb(64,122,255);
  >.header{
    >img{
      width: 100vw  ;
      border:1px solid red;
    }
  }
}
</style>