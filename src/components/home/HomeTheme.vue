<template>
  <div class="wrapper">
    <img src="//i.loli.net/2020/11/21/BDQldEkCfY1mu3K.png" alt="">
    <span class="number">{{content.number}}</span>
    <span class="bigTitle">{{content.bigTitle}}</span>
    <div class="list">
      <div class="listItem" v-for="item in content.title" :key="item.key">
        <span class="title">{{item.key}}</span>
        <span class="content">{{item.value}}</span>
      </div>
    </div>
    <div class="productionContentTitle">{{content.productionContent.title}}</div>
    <div class="productionContentText">{{content.productionContent.text}}</div>
    <div class="ruleTitle">{{content.rule.title}}</div>
    <div class="ruleTopic">{{content.rule.topic}}</div>
    <div class="ruleContent">{{content.rule.text}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      content:{
        number:'04',
        bigTitle:'大赛主题',
        title:[
          {key:'主题一',value:'红色主题：建党100周年'},
          {key:'主题二',value: '关于初心和梦想不得不说的故事'},
          {key:'主题三',value:'校园特色风光（校园代表队）'},
          {key:'主题四',value:'“疫情下的重生”'},
          {key:'主题五',value: '其他内容'}
        ],
        productionContent:{
          title:'参赛作品内容',
          text:`
1.作品应积极向上，不含色情、暴力因素，立意和表现方式新颖，内容生动活泼，题目自拟。
2.参赛作品形式不限（可商业宣传、表演、公益等），鼓励创作者和团队发挥创新精神。
3.视频时长 3 分钟以内;支持横、竖屏格式;字幕为简体中文(或英文); 要求视频画面干净，不带角标、台标、水印或 logo，可上字幕。
4.提供短视频对应概述简介（200 字内）和两张剧照。
5.制作一个专属短视频海报（封面）。
6.选择规定主题的选手（红色主题、梦想初心、疫情、校园风光），评分时可+5分。`
        },
        rule:{
          title:'参赛细则',
          topic:'# 带上你的好友一起来参与吧 #',
          text:`1.所有参赛者在报名时填写的个人信息必须真实合法。
2.提交作品必须是由参赛者本人参与主创并拥有完整版权的作品。因作品著作权、版权引起的纠纷，由参赛者负责。
3.参赛期间，参赛者不能将作品给予或转让给第三方使用；不可在参赛期间将作品用于商业用途；一切不符合参赛规则而产生的后果皆有参赛者个人或团队负责。
4.入围名单会在官方公众号和主办方公众号上发布，后续培训、比赛和颁奖典礼若不确认参与，则视为自动放弃。
5.凡递交参赛作品的参赛者视认可大赛所有规则要求，组委会也将保留对本次大赛的一切解释权利。`
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper{
  margin-bottom: 30px;
  position: relative;
  >img{
    width: 350px;
    height: 780px;
  }
  >.number{
    position: absolute;
    left: 22px;
    top: 10px;
    color: rgb(16,45,254);
    font-weight: bold;
  }
  >.bigTitle{
    position: absolute;
    left: 65px;
    top: 18px;
    color: rgb(16,45,254);
    font-weight: bold;
  }
  >.list{
    position: absolute;
    left: 52px;
    font-size: 12px;
    top: 71px;
    color: rgb(16,45,254);
   >.listItem{
     margin-bottom: 17px;
     >.title{
       margin-right: 20px;
     }
   }
  }
  >.productionContentTitle{
    position: absolute;
    left: 27px;
    top: 254px;
    font-size: 18px;
    color: rgb(16,45,254);
    font-weight: bold;
  }
  >.productionContentText{
    position: absolute;
    left: 27px;
    top: 270px;
    white-space: pre-wrap;
    width: 300px;
    font-size: 12px;
    line-height: 1.5;
  }
  >.ruleTitle{
    position: absolute;
    left: 27px;
    top: 510px;
    color: rgb(16,45,254);
    font-weight: bold;
  }
  >.ruleTopic{
    position: absolute;
    left: 70px;
    top: 540px;
    color: rgb(16,45,254);
  }
  >.ruleContent{
    position: absolute;
    width: 300px;
    left: 30px;
    top: 570px;
    font-size: 12px;
    line-height: 1.5;
    white-space: pre-wrap;
  }
}
</style>