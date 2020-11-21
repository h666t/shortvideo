<template>
  <div class="wrapper">
    <img src="//i.loli.net/2020/11/21/Ev4eGCOZuYmRQDk.png" alt=""/>
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
        number:'02',
        title:'大赛目的',
        content:'为拓宽中国大学生知识技能储备，迎合时下脉搏，为大学生创业方向提供新选择，丰富大学生课余生活以及培养青年人创业精神。威蓝全球以平台为依托,联合中国传媒大学新媒体领域专家教授，知名互联网及短视频企业CEO、创始人，实战经验丰富的创新创业导师、天使投资人等面向社会举办“中传紫荆谷杯”创新创业短视频大赛。同时也为各地区的院校提供信息交流和教育展示的平台，共同进步，相互学习。再者，明年是中国共产党建党100周年，为了紧跟中国共产党的步伐，弘扬红色文化，大赛也为此特地设立了相关主题。希望在学生展示自我的同时，也能为日后的个人发展和短视频技术走进校园奠定一定的基础。'}
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper{
  position: relative;
  margin-bottom: 30px;
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
    top: 55px;
    width: 280px;
    color: rgb(60,60,60);
    font-size: 12px;
    white-space: pre-wrap;
    line-height: 1.5;
  }
}
</style>