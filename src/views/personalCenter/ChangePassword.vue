<template>
  <div class="change-password-main-container">

    <xf-game-header headerTitlePassed="修改密码"></xf-game-header>

    <div class="change-password-scrollable-container">
      <div class="change-password-container">
        <el-form ref="changePasswordForm" :model="changePasswordForm" :rules="changePasswordRules">
          
          <el-form-item prop="oldPassword">
            <el-input v-model="changePasswordForm.oldPassword" :type="oldPasswordFieldType" auto-complete="off" placeholder="旧密码">
              <template slot="prefix">
                <div class="change-password-prefix-container">
                  <span class="change-pass-required">*</span><span>旧密码</span>
                </div>
              </template>
              <div class="show-hide-password-container" slot="suffix" @click="showOldPass()">
                <svg-icon v-if="oldPasswordVisibility" icon-class="reg-hidepass-icon" class="reg-hidepass-icon" />
                <svg-icon v-else icon-class="reg-showpass-icon" class="reg-hidepass-icon" />
              </div>
            </el-input>
          </el-form-item>

          <el-form-item prop="newPassword">
            <el-input v-model="changePasswordForm.newPassword" :type="newPasswordFieldType" auto-complete="off" placeholder="新密码">
              <template slot="prefix">
                <div class="change-password-prefix-container">
                  <span class="change-pass-required">*</span><span>新密码</span>
                </div>
              </template>
              <div class="show-hide-password-container" slot="suffix" @click="showNewPass()">
                <svg-icon v-if="newPasswordVisibility" icon-class="reg-hidepass-icon" class="reg-hidepass-icon" />
                <svg-icon v-else icon-class="reg-showpass-icon" class="reg-hidepass-icon" />
              </div>
            </el-input>
          </el-form-item>

          <el-form-item prop="confirmNewPassword">
            <el-input v-model="changePasswordForm.confirmNewPassword" :type="confirmNewPasswordFieldType" auto-complete="off" placeholder="确认新密码">
              <template slot="prefix">
                <div class="change-password-prefix-container">
                  <span class="change-pass-required">*</span><span>确认密码</span>
                </div>
              </template>
              <div class="show-hide-password-container" slot="suffix" @click="showConfirmNewPass()">
                <svg-icon v-if="confirmNewPasswordVisibility" icon-class="reg-hidepass-icon" class="reg-hidepass-icon" />
                <svg-icon v-else icon-class="reg-showpass-icon" class="reg-hidepass-icon" />
              </div>
            </el-input>
          </el-form-item>

        </el-form>

        <div class="change-password-submit-button" @click="submitChangePassword()">
            <span>修改密码</span>
        </div>

      </div>
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

  name: 'ChangePassword',
    
  data() {
    var oldPasswordValidator = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('需要舊密碼.'));
      } else if (value !== this.oldPassword) {
        callback(new Error("舊密碼不匹配."));
      } else {
        callback();
      }
    };

    var confirmPasswordValidator = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('確認密碼為必填項.'));
      } else if (value !== this.changePasswordForm.newPassword) {
        callback(new Error("確認密碼與密碼不匹配."));
      } else {
        callback();
      }
    };

    return {
      changePasswordForm: {
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
      },

      changePasswordRules: {
        oldPassword: [
          { validator: oldPasswordValidator, trigger: 'blur' }
        ],

        newPassword: [
          { required: true, trigger: 'blur', message: '需要新密碼.' },
          { min: 6, max: 10, trigger: 'blur', message: '密碼必須是6-10個字符.' },
          { pattern:'^[a-zA-Z0-9$@$!%*?&#^-_. +]+$', trigger: 'blur', message: '密碼必須是英文字符' }
        ],

        confirmNewPassword: [
          { validator: confirmPasswordValidator, trigger: 'blur' }
        ],
      },

      oldPasswordFieldType: 'password',
      newPasswordFieldType: 'password',
      confirmNewPasswordFieldType: 'password',
      oldPasswordVisibility: true,
      newPasswordVisibility: true,
      confirmNewPasswordVisibility: true,

      // Change this with the oldpassword logic
      oldPassword: 'oldPassword',
    }
  },

  methods: {
    showOldPass(){
      this.oldPasswordFieldType = this.oldPasswordFieldType === 'password' ? 'text' : 'password';
      this.oldPasswordVisibility = this.oldPasswordVisibility === true ? false : true;
    },

    showNewPass(){
      this.newPasswordFieldType = this.newPasswordFieldType === 'password' ? 'text' : 'password';
      this.newPasswordVisibility = this.newPasswordVisibility === true ? false : true;
    },

    showConfirmNewPass(){
      this.confirmNewPasswordFieldType = this.confirmNewPasswordFieldType === 'password' ? 'text' : 'password';
      this.confirmNewPasswordVisibility = this.confirmNewPasswordVisibility === true ? false : true;
    },

    submitChangePassword(){
      this.$refs.changePasswordForm.validate((valid) => {
        if (valid) {
          swal("Change Password Successful");
          this.$router.push({ path: this.redirect || '/homepage' })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.change-password-main-container{
  width: 100%;
  height: 100%;
  position: relative;

  .change-password-scrollable-container{
    position: absolute;
    top: 12vw;
    bottom: 0;
    background-color: #131724;
    width: 100%;
    height: 165vw;
    overflow-y: auto;
    padding-bottom: 15vw;
    padding-top: 3vw;
  }

  .change-password-container{
    width: 93vw;
    margin: 0 auto;
  }

  .show-hide-password-container{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 5vw;
  }

  svg{
    height: 5.5vw;
    width: 5.5vw;
  }

  .change-password-submit-button{
    width: 100%;
    height: 11.5vw;
    background-color: #33bcd4;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5vw;

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.5vw;
    	color: #fefefe;
    }
  }
}
</style>

<style scoped>
.change-pass-required{
   color: #ff0000;
}

.change-password-main-container >>> .el-form-item{
  margin: 0;
  margin-bottom: 3vw;
}

.change-password-main-container >>> .el-input--prefix .el-input__inner{
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
  padding-right: 20vw;
}

.change-password-main-container >>> .el-input__prefix{
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
  padding-left: 2vw;
}

.change-password-main-container >>> input::placeholder {
  font-family: "Microsoft YaHei";
  color: #bacef1;
}

.change-password-main-container >>> input[type=password] {
  font-family: "Microsoft YaHei";
  color: #bacef1;
}

.change-password-main-container >>> input[type=password]:focus {
  font-family: "Microsoft YaHei";
  color: #bacef1;
}

.change-password-main-container >>> button[type=button]:focus {
  outline:none;
}

.change-password-main-container >>> .el-button--medium{
  background-color: #33bcd4;
  border-radius: 5vw;
  border-color: #33bcd4;
  height: 11vw;
  font-family: "MicrosoftYaHei";
  font-size: 3vw;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: -0.5vw;
  color: #fefefe;
}

.change-password-main-container >>> .el-form-item__error{
  font-family: "Microsoft YaHei";
  font-size: 2.5vw;
  letter-spacing: 0.2vw;
}
</style>
