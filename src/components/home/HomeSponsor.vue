<template>
  <div class="wrapper">
    <img src="//i.loli.net/2020/11/21/9WugEfn2xqh4zVy.png" alt=""/>
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
      number:'03',
      title:'大赛主办方承办媒体等合作',
      content:
`主办方：
 承办：威蓝全球；
 协办（排名不分先后）：
 专业合作院校：中国传媒大学；紫荆谷创新创业发展辅导中心；阿里商学院；上海戏剧学院；浙江传媒学院
 特邀媒体支持：VIDEO ++, SMG`
}
  }

}
}
</script>

<style scoped lang="scss">
.wrapper{
  position: relative;
  margin-bottom: 30px;
  >img{
    width: 350px;
    height: 244px;
  }
  >.number{
    position: absolute;
    left: 25px;
    top: 15px;
    color: rgb(16,45,254);
    font-weight: bold;
  }
  >.title{
    position: absolute;
    left: 60px;
    top: 22px;
    color: rgb(16,45,254);
    font-weight: bold;
  }
  >.article{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 55px;
    width: 280px;
    line-height: 1.5;
    color: rgb(60,60,60);
    white-space: pre-wrap;
  }
}
</style>