<template>
  <div class="recover-password-main-container">

    <xf-game-header headerTitlePassed="找回密码"></xf-game-header>

    <div class="recover-password-scrollable-container">

      <div class="recover-password-tabs">
        <div class="email-retrieval" :class="{activeRetrievalTabs:emailRetrievalStatus}" @click="emailVerification()">
          <span>邮箱找回</span>
        </div>

        <div class="sms-retrieval" :class="{activeRetrievalTabs:smsRetrievalStatus}" @click="smsVerification()">
          <span>短信找回</span>
        </div>
      </div>

      <section v-if="step == 'email'">

        <div class="recover-password-provide-username">
          <span>请提供您的用户名XXXXXXXXXXXXXX</span>
        </div>

        <div class="recover-password-container">
          <el-form ref="recoverPasswordForm" :model="recoverPasswordForm" :rules="recoverPasswordRules">

            <el-form-item prop="username">
              <el-input v-model="recoverPasswordForm.username" type="text" auto-complete="off" placeholder="6-12个字符">
                <template slot="prefix">
                  <div class="recover-password-prefix-container">
                    <span class="recover-pass-required">*</span><span>用户名:</span>
                  </div>
                </template>
              </el-input>
            </el-form-item>

            <el-form-item prop="email">
              <el-input v-model="recoverPasswordForm.email" type="email" auto-complete="off" placeholder="请输入注册邮箱">
                <template slot="prefix">
                  <div class="recover-password-prefix-container">
                    <span class="recover-pass-required">*</span><span>邮  箱:</span>
                  </div>
                </template>
              </el-input>
            </el-form-item>

            <div class="recover-password-submit-button" @click="submitRecoverPassword()">
              <span>提交</span>
            </div>
          </el-form>
        </div>

      </section>

      <section v-if="step == 'sms'">

      </section>
    </div>

    <xf-footer></xf-footer>

  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

export default {
  components:{
      'xf-game-header': Header,
      'xf-footer': Footer
  },

  name: 'RecoverPassword',
    data() {

      var emailValidator = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('電子郵件為必填項.'));
        } else if (value !== this.registeredEmail) {
          callback(new Error("電子郵件與任何註冊的電子郵件都不匹配."));
        } else {
          callback();
        }
      };

      return {
        emailRetrievalStatus: true,
        smsRetrievalStatus: false,

        recoverPasswordForm: {
          username: '',
          email: ''
        },

        recoverPasswordRules: {
          username: [
            { required: true, trigger: 'blur', message: '用戶名為必填項.' },
            { min: 6, max: 10, trigger: 'blur', message: '用戶名必須是6-12個字符.' },
          ],

          email: [
              { validator: emailValidator, trigger: 'blur' }
          ],
        },

        // This is sample registered email
        registeredEmail: 'registeredEmail@gmail.com',
        step: 'email',
      }
    },

    computed: {

    },

    methods: {

      emailVerification(){
        this.emailRetrievalStatus = true,
        this.smsRetrievalStatus = false,
        this.step = 'email'
      },

      smsVerification(){
        this.emailRetrievalStatus = false,
        this.smsRetrievalStatus = true,
        this.step = 'sms'
      },

      submitRecoverPassword(){
        this.$refs.recoverPasswordForm.validate((valid) => {
          if (valid) {
            swal("密碼恢復請求已提交");
            this.$router.push({ path: this.redirect || '/homepage' })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }

    },

    mounted() {

    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

.recover-password-main-container{
  width: 100%;
  height: 100%;
  position: relative;

  .recover-password-scrollable-container{
    position: absolute;
    top: 12vw;
    bottom: 0;
    background-color: #131724;
    width: 100%;
    height: 165vw;
    overflow-y: auto;
    padding-top: 2vw;
    padding-bottom: 15vw;
  }

  .recover-password-tabs{
    width: 93vw;
    height: 11vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .email-retrieval{
    height: 100%;
    width: 50%;
    background-color: #212534;
	  border-radius: 0.5vw 0vw 0vw 0.5vw;
    display: flex;
    justify-content: center;
    align-items: center;

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0vw;
    	color: #bacef1;
    }
  }

  .sms-retrieval{
    height: 100%;
    width: 50%;
    background-color: #212534;
	  border-radius: 0vw 0.5vw 0.5vw 0vw;
    display: flex;
    justify-content: center;
    align-items: center;

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0vw;
    	color: #bacef1;
    }
  }

  .activeRetrievalTabs{
    background-color: #33bcd4;
	   border-radius: 0.5vw;

     span{
       color: #ffffff;
     }
  }

  .recover-password-provide-username{
    width: 100%;
    height: 12vw;
    // background-color: orange;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10vw;
    margin-bottom: 2.5vw;

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.3vw;
    	color: #758197;
    }
  }

  .recover-password-container{
    width: 93vw;
    margin: 0 auto;
  }

  .recover-pass-required{
    color: #FF0000;
  }

  .recover-password-submit-button{
    width: 100%;
    height: 12vw;
    background-color: #33bcd4;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4vw;

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0vw;
    	color: #fefefe;
    }
  }
}

</style>

<style scoped>
.recover-password-main-container >>> .el-form-item{
  margin: 0;
  margin-bottom: 2.5vw;
}

.recover-password-main-container >>> .el-input__inner{
  background-color: #212534;
  border: none;
  border-radius: 0.5vw;
  font-family: "Microsoft YaHei";
  font-size: 3vw;
  color: #bacef1;
  letter-spacing: 0.3vw;
  font-weight: normal;
  font-stretch: normal;
  height: 12vw;
  width: 100%;
  padding-left: 25vw;
  padding-right: 10vw;
}

.recover-password-main-container >>> .el-input__prefix{
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Microsoft YaHei";
  color: #bacef1;
  font-size: 3vw;
  letter-spacing: 0.3vw;
  font-weight: normal;
  font-stretch: normal;
  padding-left: 3vw;
}

.recover-password-main-container >>> input::placeholder {
  font-family: "Microsoft YaHei";
  color: #bacef1;
}

.recover-password-main-container >>> .el-form-item__error{
  font-size: 2.5vw;
  margin-top: -3vw;
  margin-left: 1vw;
}
</style>
