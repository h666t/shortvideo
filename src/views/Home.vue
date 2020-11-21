<template>
  <div class="wrapper">
    <div class="header">
      <img src="//i.loli.net/2020/11/21/goPAW7zSrCt4VY9.png" alt="">
    </div>
        <HomeListBackground/>
        <HomeAbout/>
    <HomeSponsor/>
    <HomeTheme/>
  </div>
</template>

<script lang="js">
import HomeListBackground from '@/components/home/HomeBackground'
import HomeAbout from "@/components/home/HomeAbout"
import HomeSponsor from "@/components/home/HomeSponsor"
import HomeTheme from "@/components/home/HomeTheme"
export default {
  components:{
    HomeTheme,
    HomeAbout,
    HomeListBackground,
    HomeSponsor
  }
}
</script>

<style scoped lang="scss" >
.wrapper{
  display: flex;
  align-items: center;
  flex-direction: column;
  background: darkblue;
  >.header{
    >img{
      max-width: 350px;
    }
  }
}
</style>