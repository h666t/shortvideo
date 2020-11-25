<template>
  <div class="wrapper">
    <VideoDetailHeader :detail="detail"/>
    <VideoDetailBody :stagePhoto="detail.stagePhoto"/>
    <VideoDetailIntroduction :introduction="detail.introduction"/>
  </div>
</template>

<script>
import VideoDetailHeader from "@/components/videoDetail/VideoDetailHeader"
import  VideoDetailBody from '@/components/videoDetail/VideoDetailBody'
import VideoDetailIntroduction from '@/components/videoDetail/VideoDetailIntroduction'
export default {
  components: {VideoDetailHeader,VideoDetailBody,VideoDetailIntroduction},
  mounted() {
    setTimeout(() => {
      //TODO
      this.detail = {
        title: '又是一年杜鹃开',
        cover: '//i.loli.net/2020/11/22/P5AqxEclZpnwaGS.png',
        src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
        stagePhoto:[
            '//i.loli.net/2020/11/25/OxPwTq5XtF3IpyQ.png',
            '//i.loli.net/2020/11/25/optF8h2driA3J7Q.png',
            '//i.loli.net/2020/11/25/OxPwTq5XtF3IpyQ.png',
            '//i.loli.net/2020/11/25/optF8h2driA3J7Q.png',
            '//i.loli.net/2020/11/25/OxPwTq5XtF3IpyQ.png',
            '//i.loli.net/2020/11/25/optF8h2driA3J7Q.png',
        ],
        introduction:`人最大的需要，不一定是金钱，也不一定是地位，而是人的价值，人的价值体现在，被社会需要，被工作需要，被家人需要，甚至被陌生人需要。
他人有需求，自己正好能助一臂之力，这种发自内心的愉悦，胜过一切。有人说幸福是相濡以沫，幸福是腰缠万贯，幸福是身强力健，幸福是儿孙满堂……能相濡以沫，是因为你需要我，我需要你，彼此成了依靠。能腰缠万贯，是因为社会需要你发挥聪明才智去建设，金钱是你创造价值过后的回报。`
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