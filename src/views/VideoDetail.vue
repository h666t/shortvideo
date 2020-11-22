<template>
  <div class="wrapper">
    <div class="header">
      <img src="//i.loli.net/2020/11/22/HDjhJmlsyPpSBba.png" alt="">
      <h1>又是一年杜鹃开</h1>
    </div>

  </div>
</template>

<script>
export default {
    data(){
      return {
      }
    }
}
</script>

<style scoped lang="scss">
@import "~@/helper.scss";
.wrapper{
  display: flex;
  align-items: center;
  background: $backgroundColor;
  flex-direction: column;
  >.header{
    border:1px solid red;
    position: relative;
    >img{
      width: 320px;
    }
    >h1{
      position: absolute;
      top: 55px;
      left: 20px;
      font-size: 16px;
    }
  }

}
</style>