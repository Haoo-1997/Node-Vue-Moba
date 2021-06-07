<template>
<div class="login-container">
    <el-card header="管理员登录" class="login-card">
        <!-- native表示监听elform的原生表单事件，prevent表示阻止表单默认提交，不要跳转页面 -->
        <el-form @submit.native.prevent="login">
            <el-form-item label="用户名">
                <el-input v-model="model.username"></el-input>
            </el-form-item>

            <el-form-item label="密码">
                <el-input type="password" v-model="model.password"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" native-type="submit">登录</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</div>
</template>

<script>
export default {
  data () {
    return {
      model: {}
    }
  },
  methods: {
    async login () {
      const res = await this.$http.post('login', this.model)
      //   console.log(res.data)

      // sessionStorage表示关闭页面重置用户名密码
      // sessionStorage.token = res.data.token

      // localStorage表示关闭页面再打开仍然保留上次登陆的账户和密码
      localStorage.token = res.data.token
      this.$router.push('/')
      this.$message({
        type: 'success',
        message: '登录成功'
      })
    }
  }
}
</script>

<style>
.login-card {
    width: 25rem;
    margin: 5rem auto;
}
</style>
