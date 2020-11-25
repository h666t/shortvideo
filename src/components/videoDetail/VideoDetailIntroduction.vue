<template>
  <div class="container">
    <img src="//i.loli.net/2020/11/25/PGx3kz5pnqFBUcm.png" alt="">
    <span class="title">{{title}}</span>
    <article>{{introduction}}</article>
  </div>
</template>

<script>
export default {
  props:{
    introduction:{type:String}
  },
  data(){
    return {
      title:'视频概述'
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/helper.scss";
.container{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  >img{
    width: 320px;
  }
  >.title{
    position: absolute;
    top: 13px;
    left:15px;
    font-weight: bold;
    color: $blue;
  }
  >article{
    position: absolute;
    width: 280px;
    height: 190px;
    top: 45px;
    overflow: auto;
  }
}
</style>