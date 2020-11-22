<template>
<div class="wrapper">
  <div class="content">
    <div class="buttons">
      <button :class="item === beSelectedTheme ? 'active' : undefined"
              v-for="item in theme" :key="item"
              @click="()=>{changeTheme(item)}"
      >
        {{item}}
      </button>
    </div>
    <div class="list">
      <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto;">
        <li v-for="i in demo" class="infinite-list-item">
            <img :src="i.img" alt="">
            <h1>{{i.title}}</h1>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      theme:['红色主题：建党100周年',
        '关于初心和梦想不得不说的故事',
        '校园特色风光（校园代表队）',
          '疫情下的重生',
          '其他内容'
      ],
      beSelectedTheme:'红色主题：建党100周年',
      demo: [{title:'demo11111111111111111111111111111111111111111111111',img:'//i.loli.net/2020/11/22/P5AqxEclZpnwaGS.png'}],
    }
  },
  methods:{
    changeTheme(theme){
      this.beSelectedTheme = theme
    },
    load () {
      this.demo = [...this.demo,{title:'demo11111111111111111111111111111111111111111111111',img:'//i.loli.net/2020/11/22/P5AqxEclZpnwaGS.png'}]
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/helper.scss";
.wrapper{
  background:  url("//i.loli.net/2020/11/21/Lq5ygQm4a6xFXHb.png");
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  >.content{
    margin-top: 40px;
    border:2px solid $blue;
    width: 320px;
    border-radius: 15px;
    background: white;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    height: 90%;
    >.buttons{
      margin-top: 5px;
      display: flex;
      flex-direction: column;
      >button{
        margin-bottom: 5px;
        border-color: transparent;
        border-radius: 15px;
        font:inherit;
        outline: none;
        &.active{
          color: white;
          background: $blue;
        }
      }
    }
    >.list{
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: auto;
      >ul{
        height: 400px;
        >li{
          //margin-bottom: 5px;
          display: flex;
          flex-direction: column;
          align-items: center;
          >img{
            width: 250px;
          }
          >h1{
            width: 250px;
            font-size: 16px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>

