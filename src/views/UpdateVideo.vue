<template>
  <div class="wrapper" >
    <img src="//i.loli.net/2020/11/23/dUWybcguDAlXZiV.png" alt="">
    <div class="content">
      <el-input
          type="text"
          placeholder="输入视频标题"
          v-model="text"
          maxlength="20"
          show-word-limit
      >
      </el-input>
      <div style="margin: 20px 0;"></div>
      <el-input
          type="textarea"
          placeholder="输入视频概述（200字以内）"
          v-model="textarea"
          maxlength="200"
          show-word-limit
          resize="none"
          rows="5"
      >
      </el-input>

      <UpdateVideoComponent
          :videoUploadPercent.sync="videoUploadPercent"
          :isShowUploadVideo.sync="isShowUploadVideo"
          :videoForm.sync="videoForm"
          :videoFlag.sync="videoFlag"
      />

    </div>
  </div>
</template>

<script>
import UpdateVideoComponent from "@/components/updateVideo/UpdateVideoComponent"
export default {
  components:{UpdateVideoComponent},
  data() {
    return {
      text: '',
      textarea: '',
      videoFlag: false,
      //是否显示进度条
      videoUploadPercent: 0,
      //进度条的进度，
      isShowUploadVideo: false,
      //显示上传按钮
      videoForm: {
        showVideoPath: ''
      }
    }
  },

}
</script>

<style scoped lang="scss" >
.wrapper {
  background: url("//i.loli.net/2020/11/21/Lq5ygQm4a6xFXHb.png");
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  > img {
    width: 320px;
    margin: 20px 0;
  }
  > .content {
    position: absolute;
    margin-top: 150px;
    width: 280px;
  }
}
</style>