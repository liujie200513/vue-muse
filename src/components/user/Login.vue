<template>
  <div>
    <login-header header-title="登陆"></login-header>
    <mu-container class="mu-container">
  <mu-form ref="form" :model="validateForm" class="mu-demo-form">
    <mu-form-item label="用户名" label-position = "left" prop="username" :rules="usernameRules">
      <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
    </mu-form-item>
    <mu-form-item label="密码" label-position = "left" prop="password" :rules="passwordRules">
        <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
    </mu-form-item>
    <mu-form-item  label="酒店" label-position = "left">
      <mu-select  v-model="validateForm.hotelId" full-width>
        <mu-option v-for="(org) in orgs" :key="org" :label="org" :value="org"></mu-option>
      </mu-select>
    </mu-form-item>
    <mu-form-item class="text-center">
      <mu-button color="primary" @click="submit">登陆</mu-button>
      <mu-button @click="clear">重置</mu-button>
    </mu-form-item>
  </mu-form>
</mu-container>
  </div>
</template>
<script>
import LoginHeader from '../commom/Header'
export default {
  name: 'Login',
  components: {
    LoginHeader
  },
  data () {
    return {
      usernameRules: [
        {validate: (val) => !!val, message: '必须填写用户名'},
        {validate: (val) => val.length >= 3, message: '用户名长度大于3'}
      ],
      passwordRules: [
        {validate: (val) => !!val, message: '必须填写密码'},
        {validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
      ],
      orgs: [
        'Option 1', 'Option 2', 'Option 3', 'Option 4',
        'Option 5', 'Option 6', 'Option 7', 'Option 8',
        'Option 9', 'Option 10'
      ],
      validateForm: {
        username: '',
        password: '',
        hotelId: ''
      }
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate().then((result) => {
        console.log('form valid: ', result)
        this.$router.push('/')
      })
    },
    clear () {
      this.$refs.form.clear()
      this.validateForm = {
        username: '',
        password: '',
        isAgree: false
      }
    }
  }
}
</script>
<style lang="css" scoped>
.mu-container{
  margin-top: 180px;
  padding: 30px;
}
.text-center{
  align-items:center
}
</style>
