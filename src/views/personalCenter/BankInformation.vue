<template>
  <div class="bank-information-main-container">

    <xf-game-header headerTitlePassed="银行信息"></xf-game-header>

    <div class="bank-information-scrollable-container">
      <div class="bank-information-container">
        <el-form :model="bankInformationForm" ref="bankInformationForm">
          <el-form-item
            v-for="(bankInfo, index) in bankInformationForm.bankInfos"
            :key="bankInfo.key"
            :prop="'bankInfos.' + index + '.value'"
            :rules="{
              required: true, message: '银行信息为必填项. ', trigger: 'blur'
            }"
          >
          
            <div class="bank-information-label">
              <span>北京银行</span>
              <div class="bank-information-border"></div>
            </div>

            <el-input v-model="bankInfo.value" placeholder="26533*****34">
              <template slot="suffix">
                <div class="untie-bank-information-container">
                  <div class="untie-bank-buttton" @click.prevent="removeDomain(bankInfo)">
                    <span>解绑</span>
                  </div>
                </div>
              </template>
            </el-input>
          </el-form-item>
        </el-form>
      </div>

      <div class="add-bank-card-button" @click="addDomain">
        <span>+添加银行卡</span>
      </div>

      <div class="save-bank-card-button" @click="submitForm('bankInformationForm')">
        <span>保存银行信息</span>
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
    'xf-footer': Footer,
    'xf-game-header': Header
  },

  name: 'BankInformation',

  data() {
    return {
      bankInformationForm: {
        bankInfos: [{
          key: 1,
          value: ''
        }],
        email: ''
      }
    }
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          swal("银行信息已保存.");
          this.$router.push({ path: this.redirect || '/homepage' })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },

    removeDomain(item) {
      var index = this.bankInformationForm.bankInfos.indexOf(item);
      if (index !== -1) {
        this.bankInformationForm.bankInfos.splice(index, 1);
      }
    },

    addDomain() {
      this.bankInformationForm.bankInfos.push({
        key: Date.now(),
        value: ''
      });
    }
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.bank-information-main-container{
  width: 100%;
  height: 100%;
  position: relative;

  .bank-information-scrollable-container{
    position: absolute;
    top: 12vw;
    bottom: 0;
    background-color: #131724;
    width: 100%;
    height: 165vw;
    overflow-y: auto;
    padding-top: 3vw;
    padding-bottom: 15vw;
  }

  .bank-information-container{
    width: 93vw;
    margin: 0 auto;
  }

  .bank-information-label{
    width: 100%;
    height: 11vw;
    background-color: #212534;
	  border-radius: 1vw 1vw 0vw 0vw;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 6vw;

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.3vw;
    	color: #bacef1;
    }
  }

  .bank-information-border{
    width: 87vw;
    height: 0.3vw;
    background-color: #505771;
    position: absolute;
    bottom: 0;
    left: 3vw;
  }

  .untie-bank-information-container{
    height: 100%;
    display: flex;
    align-items: center;
  }

  .untie-bank-buttton{
    width: 20vw;
    height: 9vw;
    background-color: #33bcd4;
	  border-radius: 0.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1.5vw;

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.3vw;
    	color: #fefefe;
    }
  }

  .add-bank-card-button{
    width: 93vw;
    margin: 0 auto;
    height: 11.5vw;
    background-color: #33bcd4;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12vw;

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0vw;
    	color: #fefefe;
    }
  }

  .save-bank-card-button{
    width: 93vw;
    margin: 0 auto;
    height: 11.5vw;
    background-color: #33bcd4;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3vw;

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
.bank-information-main-container >>> .el-form-item{
  margin: 0;
  margin-bottom: 3vw;
}

.bank-information-main-container >>> .el-input__inner{
  background-color: #212534;
  border: none;
  border-radius: 0vw 0vw 1vw 1vw;
  font-family: "Microsoft YaHei";
  font-size: 3vw;
  color: #bacef1;
  letter-spacing: 0.3vw;
  font-weight: normal;
  font-stretch: normal;
  height: 12vw;
  width: 100%;
  padding-left: 6vw;
  padding-right: 30vw;
}

.bank-information-main-container >>> input::placeholder {
  font-family: "Microsoft YaHei";
  color: #bacef1;
}

.bank-information-main-container >>> .el-form-item__error{
  font-size: 2.5vw;
  margin-top: -3vw;
  margin-left: 5.5vw;
}
</style>
