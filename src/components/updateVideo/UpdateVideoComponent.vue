<template>
  <div class="container" :class="videoForm.showVideoPath !=='' ? 'hasvideo' : undefined">
    <el-upload class="avatar-uploader"
               action="https://jsonplaceholder.typicode.com/posts/"
               :on-progress="uploadVideoProcess"
               :on-success="handleVideoSuccess"
               :on-error="handleVideoError"
               :before-upload="beforeUploadVideo"
               :show-file-list="false"
    >
      <video v-if="videoForm.showVideoPath !=='' && !videoFlag"
             :src="videoForm.showVideoPath"
             class="avatar video-avatar"
             controls="controls">
        您的浏览器不支持视频播放
      </video>

      <i v-else-if="videoForm.showVideoPath ==='' && !videoFlag"
         class="avatar-uploader-icon">
        <span class="el-icon-plus "> </span>
        <span>点击上传视频</span>
      </i>
      <el-progress v-if="videoFlag === true"
                   type="circle"
                   :percentage="videoUploadPercent"
                   style="margin-top:7px;"></el-progress>
    </el-upload>
    <el-button
        v-if="videoForm.showVideoPath"
        class="deleteVideo"
        type="danger"
        icon="el-icon-delete" circle size="mini"
        @click="removeVideoPath"
    ></el-button>
  </div>
</template>

<script>
export default {
  props:{
    videoUploadPercent:{
      type: Number
    },
    isShowUploadVideo:{
      type: Boolean
    },
    videoForm:{
      type:Object
    },
    videoFlag:{
      type:Boolean
    }
  },
  methods: {
    //上传前回调
    beforeUploadVideo(file) {
      const fileSize = file.size / 1024 / 1024 < 50;
      if (['video/mp4',  'video/avi',  'video/mov'].indexOf(file.type) === -1) {
        this.$message.error("请上传正确的视频格式");
        return false;
      }
      if (!fileSize) {
        this.$message.error("视频大小不能超过50MB");
        return false;
      }
      this.$emit('update:isShowUploadVideo',false)
    },
    //进度条
    uploadVideoProcess(event, file, fileList) {
      this.$emit('update:videoFlag',true)
      this.$emit('update:videoUploadPercent',file.percentage.toFixed(0) * 1)
    },
    //上传成功回调
    handleVideoSuccess(res, file) {
      this.$emit('update:isShowUploadVideo',true)
      this.$emit('update:videoFlag',false)
      this.$emit('update:videoUploadPercent',0)
      //前台上传地址
      //if (file.status == 'success' ) {
      //    this.videoForm.showVideoPath = file.url;
      //} else {
      //     layer.msg("上传失败，请重新上传");
      //}

      //后台上传地址
      // if (res.Code == 0) {
      //   this.videoForm.showVideoPath = res.Data;
      // } else {
      //   layer.msg(res.Message);
      // }
    },handleVideoError(){
      this.$emit('update:isShowUploadVideo',true)
      this.$emit('update:videoFlag',false)
      this.$emit('update:videoUploadPercent',0)
    },
    removeVideoPath(){
      this.$emit('update:videoForm',{showVideoPath:''})
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/helper.scss";
//.avatar-uploader .el-upload {
//  border: 1px dashed #d9d9d9;
//  border-radius: 6px;
//  cursor: pointer;
//  position: relative;
//  overflow: hidden;
//}
//.avatar-uploader .el-upload:hover {
//  border-color: #409EFF;
//}
.container{
  margin-top: 15px;
  border: 1px solid #DCDFE6;
  height: 140px;
  width: 280px;
  background: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.hasvideo{
    border: none;
    background: transparent;
  }
  .avatar-uploader-icon {
    font-size: 14px;
    color: #8c939d;
    height: 140px;
    width: 280px;
    line-height: 178px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >span{
      font-style: normal;
    }
  }
  >.deleteVideo{
    position: absolute;
    right: 18px;
    top: 185px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.avatar {
  max-height: 135px;
  max-width: 280px;
  display: block;
  border-radius: 14px;
}
</style>

