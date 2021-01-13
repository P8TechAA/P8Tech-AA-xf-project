<template>
  <div class="registration-main-container">

    <!-- Registration Step 1 - Start -->

    <section v-if="step == 1">
      <div class="register-container">
        <el-form ref="registerForm" :model="registerForm" :rules="registerRules" label-position="left" label-width="0px" class="login-form">

          <el-form-item prop="registerName">
            <el-input v-model="registerForm.registerName" type="text" auto-complete="on" placeholder="请输入真实姓名">
              <template slot="prefix">
                <div class="register-prefix-container">
                  <!-- <img src="../../assets/images/registration/user-icon.png" alt="" width="100%" height="100%"> -->
                  <svg-icon icon-class="reg-user-icon" class="reg-user-icon" />
                  <span>姓名</span>
                </div>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item prop="registerUserName">
            <el-input v-model="registerForm.registerUserName" type="text" auto-complete="on" placeholder="6-10个字符，包含大小写字母">
              <template slot="prefix">
                <div class="register-prefix-container">
                  <!-- <img src="../../assets/images/registration/user-icon.png" alt="" width="100%" height="100%"> -->
                  <svg-icon icon-class="reg-user-icon" class="reg-user-icon" />
                  <span>用户名</span>
                </div>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input v-model="registerForm.password" :type="passwordFieldType" auto-complete="off" placeholder="6-10个英文字符">
              <template slot="prefix">
                <div class="register-prefix-container">
                  <!-- <img src="../../assets/images/registration/user-password.png" alt="" width="100%" height="100%"> -->
                  <svg-icon icon-class="reg-password-icon" class="reg-password-icon" />
                  <span>用户密码</span>
                </div>
              </template>
              <div class="show-hide-password-container" slot="suffix" @click="showPass()">
                <!-- <img v-if="passwordVisibility" src="../../assets/images/login/hidePassword.png" alt="" width="100%" height="100%">
                <img v-else src="../../assets/images/login/showPassword.png" alt="" width="100%" height="100%"> -->
                <svg-icon v-if="passwordVisibility" icon-class="reg-hidepass-icon" class="reg-hidepass-icon" />
                <svg-icon v-else icon-class="reg-showpass-icon" class="reg-hidepass-icon" />
              </div>
            </el-input>
          </el-form-item>

          <el-form-item prop="confirmPassword">
            <el-input v-model="registerForm.confirmPassword" :type="confirmPasswordFieldType" auto-complete="off" placeholder="确认密码">
              <template slot="prefix">
                <div class="register-prefix-container">
                  <!-- <img src="../../assets/images/registration/user-password.png" alt="" width="100%" height="100%"> -->
                  <svg-icon icon-class="reg-password-icon" class="reg-password-icon" />
                  <span>用户密码</span>
                </div>
              </template>
              <div class="show-hide-password-container" slot="suffix" @click="showConfirmPass()">
                <!-- <img v-if="passwordConfirmVisibility" src="../../assets/images/login/hidePassword.png" alt="" width="100%" height="100%">
                <img v-else src="../../assets/images/login/showPassword.png" alt="" width="100%" height="100%"> -->
                <svg-icon v-if="passwordConfirmVisibility" icon-class="reg-hidepass-icon" class="reg-hidepass-icon" />
                <svg-icon v-else icon-class="reg-showpass-icon" class="reg-hidepass-icon" />
              </div>
            </el-input>
          </el-form-item>

          <el-form-item style="width:100%;" class="register-loading-button">
            <el-button class="removeBlueHighlight" size="medium" type="primary" style="width:100%;" @click="nextStep()">
              <span>登 录 中</span>
            </el-button>
          </el-form-item>

        </el-form>

        <div class="register-login-immediately">
            <p>已有XX账户？<a href="#">立即登录</a></p>
        </div>
      </div>
    </section>

    <!-- Registration Step 1 - End -->


    <!-- Registration Step 2 - Start -->

    <section v-if="step == 2">
        <div class="register-container">
          <el-form ref="registerNextForm" :model="registerNextForm" :rules="registerNextRules" label-position="left" label-width="0px" class="login-form">

            <el-form-item prop="registerNextEmail" class="register-input-container">
              <el-input v-model="registerNextForm.registerNextEmail" type="email" auto-complete="on" placeholder="找回密码的重要依据">
                <template slot="prefix">
                  <div class="register-prefix-container">
                    <!-- <img src="../../assets/images/registration/email-icon.png" alt="" width="100%" height="100%"> -->
                    <svg-icon icon-class="reg-email-icon" class="reg-email-icon" />
                    <span>邮箱地址</span>
                  </div>
                </template>
              </el-input>
            </el-form-item>

            <el-form-item prop="registerNextMobile" class="register-input-container">
              <el-input v-model="registerNextForm.registerNextMobile" type="number" auto-complete="on" placeholder="我们会不定时发放特别优惠">
                <template slot="prefix">
                  <div class="register-prefix-container">
                    <!-- <img src="../../assets/images/registration/mobile-icon.png" alt="" width="100%" height="100%"> -->
                    <svg-icon icon-class="reg-mobile-icon" class="reg-mobile-icon" />
                    <span>手机号码</span>
                  </div>
                </template>
              </el-input>
            </el-form-item>

            <el-form-item prop="registerNextCaptcha" class="register-input-container">
              <el-input v-model="registerNextForm.registerNextCaptcha" type="text" auto-complete="on" placeholder="请输入手机验证码">
                <template slot="prefix">
                  <div class="register-prefix-container">
                    <!-- <img src="../../assets/images/registration/user-password.png" alt="" width="100%" height="100%"> -->
                    <svg-icon icon-class="reg-password-icon" class="reg-password-icon" />
                    <span>验证码</span>
                  </div>
                </template>
                <template slot="suffix">
                  <div class="registrationNext-verification-container">
                      <button @click="checkVerification" type="button" name="button">验证</button>
                  </div>
                </template>
              </el-input>
            </el-form-item>

            <el-form-item prop="registerNextReferral" class="register-input-container">
              <el-input v-model="registerNextForm.registerNextReferral" type="text" auto-complete="on" placeholder="不是代理下玩家无需填写">
                <template slot="prefix">
                  <div class="register-prefix-container">
                    <!-- <img src="../../assets/images/registration/referral-code-icon.png" alt="" width="100%" height="100%"> -->
                    <svg-icon icon-class="reg-referral-icon" class="reg-referral-icon" />
                    <span>推荐码</span>
                  </div>
                </template>
              </el-input>
            </el-form-item>

            <el-form-item style="width:100%;" class="register-loading-button">
              <el-button class="removeBlueHighlight" size="medium" type="primary" style="width:100%;" @click="submitRegistration">
                <span>登 录 中</span>
              </el-button>
            </el-form-item>

          </el-form>

          <div class="register-login-immediately">
              <p>已有XX账户？<a href="#">立即登录</a></p>
          </div>
        </div>
    </section>

    <!-- Registration Step 2 - End -->

  </div>
</template>

<script>

import { encrypt } from '@/utils/rsaEncrypt'
import Config from '@/settings'
import Cookies from 'js-cookie'
export default {
  name: 'Register',
  data() {

    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('確認密碼為必填項.'));
      } else if (value !== this.registerForm.password) {
        callback(new Error("密碼不匹配."));
      } else {
        callback();
      }
    };

    return {
      cookiePass: '',
      registerForm: {
        registerName: '',
        registerUserName:'',
        password: '',
        confirmPassword: '',
        rememberMe: false
      },

      // Registration Next Step - Start

      registerNextForm: {
        registerNextEmail: '',
        registerNextMobile: '',
        registerNextCaptcha: '',
        registerNextReferral: '',
        rememberMe: false
      },

      // Registration Next Step - End

      registerRules: {
        registerName: [{ required: true, trigger: 'blur', message: '必須提供真實姓名.' }],

        registerUserName: [
          { required: true, trigger: 'blur', message: '用戶名為必填項.' },
          { min: 6, max: 10, trigger: 'blur', message: '用戶名必須是6-10個字符' },
          { pattern:'^[a-zA-Z0-9$@$!%*?&#^-_. +]+$', trigger: 'blur', message: '無效字符.' },
          { pattern:'[a-z]', trigger: 'blur', message: '用戶名必須使用小寫字符.' },
          { pattern:'[A-Z]', trigger: 'blur', message: '用戶名必須具有大寫字符.' }
        ],
        password: [
          { required: true, trigger: 'blur', message: '密碼是必需的.' },
          { min: 6, max: 10, trigger: 'blur', message: '密碼必須是6-10個字符.' },
          { pattern:'^[a-zA-Z0-9$@$!%*?&#^-_. +]+$', trigger: 'blur', message: '密碼必須是英文字符' }
        ],

        confirmPassword: [
            { validator: validatePass2, trigger: 'blur' }
        ],
      },


      // Registration Next Step - Start

      registerNextRules: {
        registerNextEmail: [
          { required: true, trigger: 'blur', message: '電子郵件地址為必填項.' },
          { type: 'email', trigger: 'blur', message: '無效的電子郵件地址格式.' }
        ],
        registerNextMobile: [
          { required: true, trigger: 'blur', message: '手機號碼為必填項.' }
        ],
        registerNextCaptcha: [{ required: true, trigger: 'blur', message: '必須輸入電話驗證碼.' }]
      },

      // Registration Next Step - End


      redirect: undefined,

      passwordFieldType: 'password',
      confirmPasswordFieldType: 'password',
      passwordVisibility: true,
      passwordConfirmVisibility: true,

      totalSteps: 2,
      step: 1,
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


  methods: {
    showPass() {
        this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
        this.passwordVisibility = this.passwordVisibility === true ? false : true;
    },

    showConfirmPass(){
        this.confirmPasswordFieldType = this.confirmPasswordFieldType === 'password' ? 'text' : 'password';
        this.passwordConfirmVisibility = this.passwordConfirmVisibility === true ? false : true;
    },

    nextStep(){

      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          this.step++;
        } else {
          console.log('error submit!!');
          return false;
        }
      });


    },

    checkVerification(){
      swal("Verification Code Sent!");
    },

    submitRegistration(){

      this.$refs.registerNextForm.validate((valid) => {
        if (valid) {
          swal("Registration Successful");
          this.$router.push({ path: this.redirect || '/entry' })
          this.$parent.entryActiveLeft = 0;
          this.$parent.barActiveIndex = 0;
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }

  },

  // Changing the parent data - Start

  mounted(){
    this.$parent.entryActiveLeft = '50%';
    this.$parent.barActiveIndex = 1;
  }

  // Changing the parent data - End

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.register-container {
  width: 93.5vw;
  margin: 0 auto;
  margin-top: 8.5vw;

  .register-prefix-container{
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

    img{
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

  .register-loading-button{
    margin-top: 10vw;
  }

  .register-login-immediately{
    text-align: center;
    margin-top: 5.5vw;
    margin-bottom: 5.5vw;

    P{
      font-family: MicrosoftYaHei;
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.3vw;
    	color: #758197;
    }

    a{
      color: #33bcd4;
      text-decoration: none;
    }
  }

  .registrationNext-verification-container{
    width: 17vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1.5vw;

    button{
      width: 100%;
      height: 7vw;
      font-family: MicrosoftYaHei;
    	font-size: 2.5vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.5vw;
    	color: #ffffff;
      background-color: #2d879c;
      border: none;
      border-radius: 0.5vw;
    }

    button:hover{
      cursor: pointer;
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

  .registration-error{
    font-family: MicrosoftYaHei;
    font-size: 3.5vw;
    font-weight: normal;
    font-stretch: normal;
    color: #F56C6C;
  }
}
</style>


<style scoped>

.register-container >>> .el-input__prefix{
  width: 28vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2vw;
}

.register-container >>> .el-input--prefix .el-input__inner{
  background-color: transparent;
  border: none;
  border-bottom: 0.3vw solid rgba(113, 125, 146, .2);
  border-radius: 0;
  padding-left: 35vw;
  padding-right: 26vw;
  padding-bottom: 5vw;
  padding-top: 5vw;
  font-family: MicrosoftYaHei;
  font-size: 3vw;
  font-weight: normal;
  font-stretch: normal;
}

.register-container >>> input::placeholder {
  font-family: MicrosoftYaHei;
  color: #758197;
}

.register-container >>> input[type=text] {
  font-family: MicrosoftYaHei;
  color: #758197;
}

.register-container >>> input[type=password] {
  font-family: MicrosoftYaHei;
  color: #758197;
}

.register-container >>> input[type=email] {
  font-family: MicrosoftYaHei;
  color: #758197;
}

.register-container >>> input[type=number] {
  font-family: MicrosoftYaHei;
  color: #758197;
}

.register-container >>> input[type=text]:focus {
  font-family: MicrosoftYaHei;
  color: #758197;
}

.register-container >>> input[type=password]:focus {
  font-family: MicrosoftYaHei;
  color: #758197;
}

.register-container >>> input[type=email]:focus {
  font-family: MicrosoftYaHei;
  color: #758197;
}

.register-container >>> input[type=number]:focus {
  font-family: MicrosoftYaHei;
  color: #758197;
}

.register-container >>> button[type=button]:focus {
  outline:none;
}

.register-container >>> .el-button--medium{
  background-color: #33bcd4;
  border-radius: 5vw;
  border-color: #33bcd4;
  height: 11vw;

  font-family: MicrosoftYaHei;
	font-size: 3vw;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: -0.5vw;
	color: #fefefe;
}

.register-container >>> .el-form-item__content{
  margin-bottom: -2vw;
}

.register-container >>> .el-form-item__error{
  font-size: 2.5vw;
  letter-spacing: 0.2vw;
}

/* Chrome, Safari, Edge, Opera */
.register-container >>> input::-webkit-outer-spin-button,
.register-container >>> input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.register-container >>> input[type=number] {
  -moz-appearance: textfield;
}

</style>
