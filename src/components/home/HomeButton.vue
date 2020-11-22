<template>
  <span  class="wrapper">
    <img @click="gotoSignup"  src="//i.loli.net/2020/11/21/m9RCEOtspu5WDy3.png" alt="">
      <div @click="gotoSignup" class="text">活动报名</div>
  </span>
</template>

<script>
export default {
  methods:{
    gotoSignup(){
      this.$router.push('/signup')
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/helper.scss";
.wrapper{
  position: relative;
  margin-bottom: 30px;
    >img{
      width: 300px;
    }
  >.text{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: $blue;
    font-weight: bolder;
    font-size: 18px;
  }

}
</style>