<template>
  <div class="container">
    <img src="//i.loli.net/2020/11/25/wUu3c57BvWPDQHC.png" alt="">
    <span class="title">{{title}}</span>
    <ul class="stagePhotoList">
      <li v-for="item in stagePhoto" :key="item">
        <van-image :src="item"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    stagePhoto: {type:Array}
  },
  data(){
    return{
      title:'剧照'
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/helper.scss";
.container{
  margin-top: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  >img{
    width: 320px;
    height: 590px;
  }
  >.title{
    position: absolute;
    left: 10px;
    top: 12px;
    font-weight: bold;
    color: $blue;
  }
  .stagePhotoList{
    position: absolute;
    width: 280px;
    height: 515px;
    overflow: auto;
    top: 55px;
    left: 50%;
    transform: translateX(-50%);
    >li{
      >img{
        width: 280px;
      }
    }

  }
}
</style>