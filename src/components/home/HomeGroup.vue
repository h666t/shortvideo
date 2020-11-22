<template>
  <div class="wrapper">
    <img src="//i.loli.net/2020/11/21/ZAJg5IPeKX39yiM.png" alt=""/>
    <span class="number">
        {{content.number}}
      </span>
    <span class="title">
        {{content.title}}
      </span>
    <span class="text">
      {{content.text}}
    </span>
    <span class="others">
      {{content.others}}
    </span>
  </div>
</template>

<script>
export default {
  data(){
    return {
      content:{
        number:'05',
        title:'参赛群体',
        text:`1.各高校在读学生及毕业一年内的毕业生
 2.学校代表队`,
        others:`（参加代表队的学生可以同时以个人或团队名字重复报名）`
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/helper.scss";
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
    color: $blue;
    font-weight: bold;
    font-size: 18px;
  }
  >.title{
    position: absolute;
    left: 50px;
    top: 18px;
    color: $blue;
    font-weight: bold;
    font-size: 18px;
  }
  >.text{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 50px;
    width: 260px;
    line-height: 1.5;
    color: rgb(60,60,60);
    font-size: 14px;
    white-space: pre-wrap;
  }
  >.others{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 260px;
    line-height: 1.5;
    color: rgb(137,137,137);
    font-size: 14px;
    top: 100px;
  }
}
</style>