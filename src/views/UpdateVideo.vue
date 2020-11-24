<template>
  <div class="wrapper" >
    <img src="//i.loli.net/2020/11/23/dUWybcguDAlXZiV.png" alt="">
    <div class="content">
      <UpdateVideoHeader
        :text.sync="text"
        :textarea.sync="textarea"
      />

      <UpdateVideoComponent
          :videoUploadPercent.sync="videoUploadPercent"
          :isShowUploadVideo.sync="isShowUploadVideo"
          :videoForm.sync="videoForm"
          :videoFlag.sync="videoFlag"
      />
      <UpdateVideoUpdateImages
          title='上传视频封面'
          :file-list.sync="coverFileList"
          :maxCount="1"
          :maxSize="500 * 1024"
      />
      <UpdateVideoUpdateImages
          title='上传剧照'
          :file-list.sync="stagePhotoFileList"
          :maxCount="3"
          :maxSize="500 * 1024"
      />
    </div>
  </div>
</template>

<script>
import UpdateVideoComponent from "@/components/updateVideo/UpdateVideoComponent"
import UpdateVideoHeader from '@/components/updateVideo/UpdateVideoHeader'
import UpdateVideoUpdateImages from "@/components/updateVideo/public/UpdateVideoUpdateImages"
export default {
  components:{UpdateVideoComponent,UpdateVideoHeader,UpdateVideoUpdateImages},
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
        showVideoPath: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
      },
      coverFileList:[
        {
          url: 'https://img.yzcdn.cn/vant/leaf.jpg',
          status: 'uploading',
          message: '上传中...',
        },
      ],
      stagePhotoFileList:[]
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