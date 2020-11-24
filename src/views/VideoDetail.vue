<template>
  <div class="wrapper">
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
  mounted() {
    setTimeout(()=>{
      this.detail = {
        title:'又是一年杜鹃开',
        cover:'//i.loli.net/2020/11/22/P5AqxEclZpnwaGS.png',
         src:'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
      }
      this.$refs.video.load()
    },1000)
  },
  data() {
    return {
      detail:{}
    }
  },
}
</script>

<style scoped lang="scss">
@import "~@/helper.scss";

.wrapper {
  display: flex;
  align-items: center;
  background: $backgroundColor;
  flex-direction: column;
  background:  url("//i.loli.net/2020/11/21/Lq5ygQm4a6xFXHb.png");

  > .header {
    border: 1px solid red;

    video {
      object-fit: fill;
      max-width: 300px;
      max-height: 240px;
    }
  }

}
</style>