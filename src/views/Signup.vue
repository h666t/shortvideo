<template>
  <div class="wrapper">
    <div class="formAndImg">
      <img src="//i.loli.net/2020/11/21/d3uK7gkQX4HmTMi.png" alt="">
<div class="form">
  <el-form :model="formLabelAlign">
    <el-form-item>
      <el-input placeholder="姓名" v-model="formLabelAlign.name"></el-input>
      <el-input placeholder="邮箱" v-model="formLabelAlign.type"></el-input>
      <el-input placeholder="学校" v-model="formLabelAlign.school"></el-input>
      <el-input  placeholder="手机号" v-model="formLabelAlign.region"></el-input>
      <el-input placeholder="验证码" v-model="formLabelAlign.school"></el-input>
      <el-button plain>圆角按钮</el-button>
    </el-form-item>
  </el-form>
</div>
    </div>

  </div>
</template>


<script>
export default {
  data() {
    return {
      formLabelAlign: {
        name: '',
        region: '',
        type: '',
        school:''
      }
    };
  }
}
</script>

<style scoped lang="scss">
.wrapper{
  background:rgb(16,45,254) url("//i.loli.net/2020/11/21/Lq5ygQm4a6xFXHb.png");
  height: 100vh;
  >.formAndImg{
    display: flex;
    flex-direction:column ;
    align-items: center;
    position: relative;
    border:1px solid red;
    >img{
      height: 480px;
      margin-top: 30px;
    }
    >.form{
      margin-top: 30px;
      position: absolute;
      top: 140px;
      width: 250px;
    }
  }
}
</style>


