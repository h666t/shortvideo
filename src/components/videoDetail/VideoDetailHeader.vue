<template>
<div class="wrapper">
  <img src="//i.loli.net/2020/11/25/r1yIYuzLxJ3AX7G.png" alt="">
  <div class="header">
    <h1>{{detail.title}}</h1>
    <div class="video">
      <video
          ref="video"
          :poster="detail.cover"
          controls>
        <source :src="detail.src"/>
        您的浏览器不支持视频播放
      </video>
    </div>
  </div>
</div>
</template>

<script>
export default {
props:{
  detail:{type:Object}
},
  updated() {
    this.$refs.video.load()
  }
}
</script>

<style lang="scss" scoped>
@import "~@/helper.scss";

.wrapper {
  display: flex;
  align-items: center;
  background: $backgroundColor;
  flex-direction: column;
  position: relative;
  >img{
    width: 320px;
  }
  > .header {
    position: absolute;
    margin-top: 20px;
    video {
      object-fit: fill;
      max-width: 300px;
      max-height: 240px;
      -webkit-border-radius: 14px;
      -moz-border-radius: 14px;
      border-radius: 14px;
    }
    >h1{
      font-size: 16px;
      margin: 10px 0;
    }
  }
}
</style>