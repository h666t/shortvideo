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
      <ul>
        <li @click="gotoVideoDetail" v-for="i in demoForShow" :key="i.id">
            <img :src="i.img" alt="">
            <h1>{{i.title}}</h1>
        </li>
      </ul>
      <div class="pager">
        <el-pagination class="a"
            layout="pager"
            :page-size='5'
            :total="demo.length"
            @current-change="(e)=>{changeCurrentPage(e)}"
            :pager-count="5"
        >
        </el-pagination>
      </div>
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
      demo: [{id:1,title:'demo11111111111111111111111111111111111111111111111',img:'//i.loli.net/2020/11/22/P5AqxEclZpnwaGS.png'},
            {id:2,title:'demo',img:'//i.loli.net/2020/11/22/P5AqxEclZpnwaGS.png'},
            {id:3,title:'demo',img:'//i.loli.net/2020/11/22/P5AqxEclZpnwaGS.png'},
            {id:4,title:'demo',img:'//i.loli.net/2020/11/22/P5AqxEclZpnwaGS.png'},
            {id:5,title:'demo',img:'//i.loli.net/2020/11/22/P5AqxEclZpnwaGS.png'},
            {id:6,title:'demo',img:'//i.loli.net/2020/11/22/P5AqxEclZpnwaGS.png'},
            {id:7,title:'demo',img:'//i.loli.net/2020/11/22/P5AqxEclZpnwaGS.png'},
            {id:8,title:'demo2',img:'//i.loli.net/2020/11/22/P5AqxEclZpnwaGS.png'},
            {id:9,title:'demo2',img:'//i.loli.net/2020/11/22/P5AqxEclZpnwaGS.png'},
            {id:10,title:'demo2',img:'//i.loli.net/2020/11/22/P5AqxEclZpnwaGS.png'},
            {id:11,title:'demo2',img:'//i.loli.net/2020/11/22/P5AqxEclZpnwaGS.png'},
            {id:12,title:'demo2',img:'//i.loli.net/2020/11/22/P5AqxEclZpnwaGS.png'},
            {id:13,title:'demo11111111111111111111111111111111111111111111111',img:'//i.loli.net/2020/11/22/P5AqxEclZpnwaGS.png'},
            {id:14,title:'demo',img:'//i.loli.net/2020/11/22/P5AqxEclZpnwaGS.png'},
            {id:15,title:'demo',img:'//i.loli.net/2020/11/22/P5AqxEclZpnwaGS.png'},
            {id:16,title:'demo',img:'//i.loli.net/2020/11/22/P5AqxEclZpnwaGS.png'},
            {id:17,title:'demo',img:'//i.loli.net/2020/11/22/P5AqxEclZpnwaGS.png'},
            {id:18,title:'demo2',img:'//i.loli.net/2020/11/22/P5AqxEclZpnwaGS.png'},
      ],
      currentPage:1
    }
  },
  computed:{
    demoForShow(){
      const demo_clone = [...this.demo]
      const start = (this.currentPage-1)*5
      return demo_clone.splice(start,5)
    }
  },
  methods:{
    changeTheme(theme){
      this.beSelectedTheme = theme
    },
    changeCurrentPage(e){
      this.currentPage = e
    },
    gotoVideoDetail(){
      this.$router.push('/videodetail/1')
    }
  },
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
      >.pager{
        display: flex;
        justify-content: center;
      }
      >ul{
        >li{
          margin-bottom: 5px;
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

