<template>
  <div class="container">
    <div class="uploaderCover">
      <div class="text">{{title}}</div>
      <van-uploader v-model="fileList"
                    :before-read="beforeRead"
                    :after-read="afterRead"
                    :max-count="maxCount"
                    :max-size="maxSize"
                    @oversize="onOversize" />
    </div>
  </div>
</template>

<script>
import {Toast} from 'vant'
export default {
  data(){
    return {
      can:false
    }
  },
  props:{
    title:{type:String},
    fileList:{type:Array},
    maxCount:{type:Number},
    maxSize:{type:Number}
  },
  methods: {
    beforeRead(file) {
      console.log(file.type)
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        Toast('请上传 jpg/png 格式图片');
        return false;
      }
      return true;
    },
    afterRead(file) {
        file.status = 'uploading';
        file.message = '上传中...';
        setTimeout(() => {
          file.status = 'failed';
          file.message = '上传失败';
        }, 1000);
    },
    onOversize(file) {
      console.log(file);
      Toast(`文件大小不能超过 ${this.maxSize}kb`);
    },
  }
}
</script>

<style scoped lang="scss">
@import "~@/helper.scss";

.container {
  > .uploaderCover {
    > .text {
      color: $blue;
      margin: 5px 0;
      font-size: 14px;
    }
  }
}
</style>