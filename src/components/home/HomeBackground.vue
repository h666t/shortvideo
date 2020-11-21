<template>
  <div class="wrapper">
    <img src="//i.loli.net/2020/11/21/pj3CmfbgGL9U56a.png" alt=""/>
    <span class="number">
        {{content.number}}
      </span>
    <span class="title">
        {{content.title}}
      </span>
    <span class="article">
      {{content.content}}
    </span>
  </div>
</template>

<script>
export default {
  data(){
    return {
      content:{
        number:'01',
        title:'活动背景',
        content:'当前互联网蓬勃发展,创新创业机遇与挑战并存,随着5G时代的到来,短视频迎来大爆发, 中国传媒大学紫荆谷创新创业辅导中心以互联网'
      }
    }
  }

}
</script>

<style scoped lang="scss">
.wrapper{
    position: relative;
     margin-bottom: 30px;
      margin-top: 30px;
    >img{
      width: 320px;
    }
    >.number{
      position: absolute;
      left: 20px;
      top: 12px;
      color: rgb(16,45,254);
      font-weight: bold;
      font-size: 18px;
    }
    >.title{
      position: absolute;
      left: 50px;
      top: 18px;
      color: rgb(16,45,254);
      font-weight: bold;
      font-size: 18px;
    }
    >.article{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 60px;
      width: 280px;
      line-height: 1.5;
      color: rgb(60,60,60);
      font-size: 16px;
      white-space: pre-wrap;
    }
}
</style>