<template>
  <div class="wrapper">
    <img src="//i.loli.net/2020/11/21/pj3CmfbgGL9U56a.png" alt="">
      <span class="number"><slot name="number" class="number" ></slot></span>
      <span class="title"><slot name="title" class="title"></slot></span>
    <span class="article"><slot name="article" class="article"></slot></span>
  </div>
</template>
<style scoped lang="scss">
.wrapper{
  display: flex;
  position: relative;
  >img{
    width: 100vw;
  }
  >.number{
    position: absolute;
    left: 5%;
    top: 5%;
  }
  >.title{
    position: absolute;
    left: 15%;
    top: 9%;
  }
  >.article{
    position: absolute;
    left: 10%;
    top: 25%;
  }
}
</style>