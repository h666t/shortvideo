<template>
  <div class="wrapper">
    <VideoDetailHeader :detail="detail"/>
    <VideoDetailBody/>
  </div>
</template>

<script>
import VideoDetailHeader from "@/components/videoDetail/VideoDetailHeader"
import  VideoDetailBody from '@/components/videoDetail/VideoDetailBody'
export default {
  components: {VideoDetailHeader,VideoDetailBody},
  mounted() {
    setTimeout(() => {
      this.detail = {
        title: '又是一年杜鹃开',
        cover: '//i.loli.net/2020/11/22/P5AqxEclZpnwaGS.png',
        src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
      }

    }, 1000)
  },
  data() {
    return {
      detail: {}
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
  background: url("//i.loli.net/2020/11/21/Lq5ygQm4a6xFXHb.png");
}
</style>