<template>
  <div class="page-register">
    <article class="header">
      <header>
        <a href="/" class="site-logo" />
        <span class="login">
          <em class="bold">已有美团账号？</em>
          <a href="/login">
            <el-button size="small">登录</el-button>
          </a>
        </span>
      </header>
    </article>
    <section>
      <el-form
        ref="regForm"
        :model="regForm"
        :rules="regRules"
        label-width="100px"
        class="regForm"
      >
        <el-form-item label="昵称" prop="name">
          <el-input v-model="regForm.name" placeholder="请输入昵称"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input
            v-model="regForm.email"
            type="email"
            placeholder="请输入邮箱"
          ></el-input>
          <el-button plain round size="mini" @click="sendMeg"
            >发送验证码</el-button
          >
          <span class="status">{{ statusMsg }}</span>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input
            v-model="regForm.code"
            maxlength="4"
            placeholder="验证码"
            style="width:35%;"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input
            v-model="regForm.pwd"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="cpwd">
          <el-input
            v-model="regForm.cpwd"
            type="password"
            placeholder="确认密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="reg-btn" @click="registerForm('regForm')"
            >同意以下协议并注册</el-button
          >
        </el-form-item>
      </el-form>
      <div class="error">
        {{ error }}
      </div>
      <a class="f1" href="http://www.meituan.com/about/terms" target="_blank"
        >《美团网用户协议》</a
      >
    </section>
  </div>
</template>
<script>
export default {
  // 选择自定义模板
  layout: 'blank',
  name: 'Register',
  data() {
    // 校验方法
    const validateCPwd = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码！'))
      } else if (value !== this.regForm.pwd) {
        callback(new Error('两次输入的密码不一致！'))
      } else {
        callback()
      }
    }
    return {
      statusMsg: '', // 验证状态信息
      error: '',
      regForm: {
        name: '',
        code: '',
        pwd: '',
        cpwd: '',
        email: ''
      },
      regRules: {
        name: [{ required: true, message: '请输入昵称！', trigger: 'blur' }],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          {
            required: true,
            type: 'email',
            message: '请输入合法邮箱！',
            trigger: ['blur', 'change']
          }
        ],
        code: [{ required: true, message: '请输入验证码！', trigger: 'blur' }],
        pwd: [{ required: true, message: '请输入密码！', trigger: 'blur' }],
        cpwd: [
          {
            required: true,
            validator: validateCPwd,
            trigger: ['blur', 'change']
          }
        ]
      }
    }
  },
  methods: {
    /** 发送验证码 */
    sendMeg() {},
    registerForm(formName) {
      // this.$refs[formName].resetFields()
      // this.$refs[formName].clearValidate()
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            type: 'success',
            message: '注册成功！'
          })
        } else {
          // this.$message({
          //   type: 'error',
          //   message: '注册失败！'
          // })
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/register/index.scss';
.regForm {
  .reg-btn {
    background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
  }
}
</style>
