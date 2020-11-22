<template>
  <div class="wrapper">
    <div class="header">
      <img src="//i.loli.net/2020/11/21/goPAW7zSrCt4VY9.png" alt="">
    </div>
        <HomeListBackground/>
        <HomeAbout/>
    <HomeSponsor/>
    <HomeTheme/>
    <HomeGroup/>
    <HomeButton/>
  </div>
</template>

<script lang="js">
import HomeListBackground from '@/components/home/HomeBackground'
import HomeAbout from "@/components/home/HomeAbout"
import HomeSponsor from "@/components/home/HomeSponsor"
import HomeTheme from "@/components/home/HomeTheme"
import HomeGroup from "@/components/home/HomeGroup"
import HomeButton from "@/components/home/HomeButton"
export default {
  components:{
    HomeButton,
    HomeGroup,
    HomeTheme,
    HomeAbout,
    HomeListBackground,
    HomeSponsor
  }
}
</script>

<style scoped lang="scss" >
@import "~@/helper.scss";
.wrapper{
  display: flex;
  align-items: center;
  flex-direction: column;
  background: $blue;
  >.header{
    >img{
      max-width: 350px;
    }
  }
}
</style>