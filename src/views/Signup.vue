<template>
  <div class="wrapper">
    <div class="formAndImg">
      <img src="//i.loli.net/2020/11/21/d3uK7gkQX4HmTMi.png" alt="">
      <div class="form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item prop="name">
            <el-input placeholder="姓名" v-model="ruleForm.name"></el-input>
          </el-form-item>

          <el-form-item prop="email">
            <el-input placeholder="邮箱" v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item prop="school">
            <el-input placeholder="学校" v-model="ruleForm.school"></el-input>
          </el-form-item>
          <el-form-item prop="phone">
            <el-input placeholder="手机号" v-model="ruleForm.phone"></el-input>
          </el-form-item>
          <div class="code">
            <el-form-item prop="code">
              <el-input class="input" placeholder="验证码" v-model="ruleForm.code"></el-input>
              <el-button class="button">获取验证码</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </div>

  </div>
</template>


<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        phone: '',
        email: '',
        school: '',
        code: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入姓名', trigger: ['blur', 'change']},
          {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: ['blur', 'change']},
          {required: true, pattern: /^[\u2E80-\u9FFF]+$/, message: '请输入正确的中文姓名', trigger: ['blur', 'change']}
        ],
        phone: [
          {required: true, message: '请输入手机号', trigger: ['blur', 'change']},
          {required: true, pattern: /^[1]([3-9])[0-9]{9}$/, message: '请填入正确的手机号码', trigger: ['blur', 'change']}
        ],
        email: [
          {required: true, message: '请输入邮箱', trigger: ['blur', 'change']},
          {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
        ],
        school: [
          {required: true, message: '请输入学校', trigger: ['blur', 'change']},
          {required: true, pattern: /^[\u2E80-\u9FFFa-zA-Z]+$/, message: '请输入正确的学校名'}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }

}
</script>

<style scoped lang="scss">
.wrapper {
  background: rgb(16, 45, 254) url("//i.loli.net/2020/11/21/Lq5ygQm4a6xFXHb.png");
  height: 100vh;

  > .formAndImg {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;


    > img {
      height: 480px;
      margin-top: 30px;
    }

    > .form {
      position: absolute;
      margin-top: 180px;

      .code {
        .input {
          width: 45%;
          margin-right: 10%;
        }

        .button {
          width: 45%;
        }
      }
    }

  }
}
</style>
