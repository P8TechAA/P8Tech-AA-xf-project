<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-position="left" label-width="0px" class="login-form">

      <el-form-item prop="loginName">
        <el-input v-model="loginForm.loginName" type="text" auto-complete="on" placeholder="请输入注册用户名">
          <template slot="prefix">
            <div class="login-prefix-container">
              <svg-icon icon-class="reg-user-icon" class="reg-user-icon" />
              <span>用户名</span>
            </div>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input v-model="loginForm.password" :type="passwordFieldType" auto-complete="off" placeholder="请输入密码">
          <template slot="prefix">
            <div class="login-prefix-container">
              <svg-icon icon-class="reg-password-icon" class="reg-password-icon" />
              <span>用户密码</span>
            </div>
          </template>
          <template slot="suffix">
            <div class="show-hide-password-container" title="显示密码" @click="showPass()">
              <svg-icon v-if="visible" icon-class="reg-hidepass-icon" class="reg-hidepass-icon" />
              <svg-icon v-else icon-class="reg-showpass-icon" class="reg-hidepass-icon" />
            </div>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item style="width:100%;" class="login-loading-button">
        <el-button class="removeBlueHighlight" :loading="loading" size="medium" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>

    </el-form>

    <div class="login-need-help">
        <p>忘记密码？<span>找回密码</span></p>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import { encrypt } from '@/utils/rsaEncrypt'
import Config from '@/settings'
import Cookies from 'js-cookie'
import { login } from '@/api/login'

export default {
  name: 'Login',
  data() {
    return {
      xfdatas: [],
      xfdataLoginName: '',
      xfdataLoginPassword: '',
      cookiePass: '',
      loginForm: {
        loginName: '',
        password: '',
        rememberMe: false
      },

      loginRules: {
        loginName: [{ required: true, trigger: 'blur', message: '用户名不能为空' }],
        password: [{ required: true, trigger: 'blur', message: '密码不能为空' }]
      },

      loading: false,
      redirect: undefined,
      passwordFieldType: 'password',
      visible: true,
    }
  },

  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },

  created() {
    this.getCookie()
  },

  methods: {
    getCookie() {
      const loginName = Cookies.get('loginName')
      let password = Cookies.get('password')
      const rememberMe = Cookies.get('rememberMe')
      // 保存cookie里面的加密后的密码
      this.cookiePass = password === undefined ? '' : password
      password = password === undefined ? this.loginForm.password : password
      this.loginForm = {
        loginName: loginName === undefined ? this.loginForm.loginName : loginName,
        password: password,
        rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
      }
    },

    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        const user = {
          loginName: this.loginForm.loginName,
          password: this.loginForm.password,
          rememberMe: this.loginForm.rememberMe
        }
        if (user.password !== this.cookiePass) {
          user.password = encrypt(user.password)
        }
        if (valid) {
          this.loading = true
          if (user.rememberMe) {
            Cookies.set('loginName', user.loginName, { expires: Config.passCookieExpires })
            Cookies.set('password', user.password, { expires: Config.passCookieExpires })
            Cookies.set('rememberMe', user.rememberMe, { expires: Config.passCookieExpires })
          } else {
            Cookies.remove('loginName')
            Cookies.remove('password')
            Cookies.remove('rememberMe')
          }
          login(this.loginForm.loginName, this.loginForm.password).then(res => {
            if(res.code != 0){
              swal("用户名或者密码错误")
              this.loading = false
              this.$router.push({ path: this.redirect || '/' })
            }
            else if (res.code == 0) {
              this.loading = false
              this.$router.push({ path: this.redirect || '/homepage' })
            }
          })

        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    showPass() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
      this.visible = this.visible === true ? false : true;
    }
  }
}

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.login-container {
  position: absolute;
  top: 52.5vw;
  left: 3vw;
  width: 93.5vw;
  margin: 0 auto;
  margin-top: 11vw;

  .door{
    font-size: 10vw;
    color: red;
  }

  .login-prefix-container{
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: MicrosoftYaHei;
    font-size: 3vw;
  	font-stretch: normal;
    color: #bacef1;
    letter-spacing: 0.25vw;

     svg{
      width: 5.5vw;
      height: 5.5vw;
      margin-right: 4vw;
    }
  }

  .show-hide-password-container{
    width: 10vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg{
      width: 5.5vw;
      height: 5.5vw;
    }

    svg:hover{
      cursor: pointer;
    }
  }

  .login-loading-button{
    margin-top: 12vw;
  }

  .login-need-help{
    text-align: center;
    margin-top: 8vw;
    margin-bottom: 8vw;

    P{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.3vw;
    	color: #758197;
    }

    span{
      color: #33bcd4;
    }
  }

  .removeBlueHighlight {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  }

  .dragon{
    font-size: 3vw;
    color: red;
  }
}
</style>


<style scoped>

.login-container >>> .el-input__prefix{
  width: 28vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2vw;
}

.login-container >>> .el-input__inner{
  background-color: transparent;
  border: none;
  border-bottom: 0.3vw solid rgba(113, 125, 146, .2);
  border-radius: 0;
  padding-left: 35vw;
  padding-right: 20vw;
  padding-bottom: 5vw;
  padding-top: 5vw;
  font-family: "Microsoft YaHei";
  font-size: 3vw;
	font-weight: normal;
	font-stretch: normal;
}

.login-container >>> input::placeholder {
  font-family: "Microsoft YaHei";
  color: #758197;
}

.login-container >>> input[type=text] {
  font-family: "Microsoft YaHei";
  color: #758197;
}

.login-container >>> input[type=password] {
  font-family: "Microsoft YaHei";
  color: #758197;
}

.login-container >>> input[type=text]:focus {
  font-family: "Microsoft YaHei";
  color: #758197;
}

.login-container >>> input[type=password]:focus {
  font-family: "Microsoft YaHei";
  color: #758197;
}

.login-container >>> .el-button--medium{
  background-color: #33bcd4;
  border-radius: 5vw;
  border-color: #33bcd4;
  height: 11vw;
  font-family: "Microsoft YaHei";
	font-size: 3.5vw;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: -0.5vw;
	color: #fefefe;
}

.login-container >>> .el-form-item__error{
  font-size: 3vw;
}
</style>
