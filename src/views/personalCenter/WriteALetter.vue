<template>
  <div class="write-a-letter-main-container">

    <xf-game-header headerTitlePassed="写信"></xf-game-header>

    <div class="write-a-letter-scrollable-container">

      <div class="write-a-letter-container">
        <div class="write-a-letter-top">
          <span class="write-a-letter-top-title">标题</span>

          <el-dropdown @command="handleCommand" trigger="click">
            <span class="el-dropdown-link">
              <span class="write-a-letter-dropdown-text">快捷输入</span><img src="../../assets/images/games/filled-arrow-down.png" alt="" width="100%" height="100%">
            </span>

            <el-dropdown-menu slot="dropdown" style="position: absolute; left: 0vw;">
              <el-dropdown-item command="快捷输入 1">快捷输入 1</el-dropdown-item>
              <el-dropdown-item command="快捷输入 2">快捷输入 2</el-dropdown-item>
              <el-dropdown-item command="快捷输入 3">快捷输入 3</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

        </div>

        <el-form ref="titleForm" :model="titleForm" :rules="titleRules">
          <el-form-item prop="lettertitle">
            <el-input
              type="textarea"
              :rows="3"
              resize="none"
              placeholder="请输入标题"
              v-model="titleForm.lettertitle">
            </el-input>
          </el-form-item>
        </el-form>
      </div>

      <div class="write-a-content-container">
        <div class="write-a-letter-top">
          <span class="write-a-letter-top-title">内容</span>
        </div>

        <el-form ref="contentForm" :model="contentForm" :rules="contentRules">
          <el-form-item prop="lettercontent">
            <el-input
              type="textarea"
              :rows="6"
              resize="none"
              placeholder="请输入您的详细内容"
              v-model="contentForm.lettercontent">
            </el-input>
          </el-form-item>
        </el-form>
      </div>

      <div class="write-a-letter-send-button" @click="sendLetter">
          <span>发送</span>
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

  name: 'PromotionsTransferMoney',
    data() {
      return {
        titleForm: {
          lettertitle: '',
        },

        contentForm: {
          lettercontent: '',
        },

        titleRules: {
          lettertitle: [{ required: true, trigger: 'blur', message: '標題為必填項.' }],
        },

        contentRules: {
          lettercontent: [{ required: true, trigger: 'blur', message: '內容為必填項.' }],
        },
      }
    },

    computed: {

    },

    methods: {
      handleCommand(command) {
        this.titleForm.lettertitle = command;
        this.contentForm.lettercontent = command;
      },

      sendLetter(){
        this.$refs.titleForm.validate((valid) => {
          if (valid) {
            this.$router.push({ path: this.redirect || '/homepage' })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        this.$refs.contentForm.validate((valid) => {
          if (valid) {
            this.$router.push({ path: this.redirect || '/homepage' })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    },

    watch: {

    },

    mounted() {

    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

.write-a-letter-main-container{
  width: 100%;
  height: 100%;
  position: relative;

  .write-a-letter-scrollable-container{
    position: absolute;
    top: 12vw;
    bottom: 0;
    background-color: #131724;
    width: 100%;
    height: 165vw;
    overflow-y: auto;
    padding-top: 3.5vw;
  }

  .write-a-letter-container{
    width: 93vw;
    height: 36vw;
    margin: 0 auto;
    background-color: #212534;
	  border-radius: 1vw;
    margin-bottom: 3.5vw;
    padding-top: 3.5vw;
  }

  .write-a-content-container{
    width: 93vw;
    height: 47.5vw;
    margin: 0 auto;
    background-color: #212534;
	  border-radius: 1vw;
    margin-bottom: 3.5vw;
    padding-top: 5.5vw;
  }

  .write-a-letter-top{
    width: 83vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .write-a-letter-top-title{
    font-family: "Microsoft YaHei";
    font-size: 3vw;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0.5vw;
    color: #bacef1;
  }

  .write-a-letter-quick-input{
    width: 22vw;
    height: 8vw;
    background-color: #33bcd4;
  	border-radius: 0.5vw;
    display: flex;
    justify-content: center;
    align-items: center;

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.3vw;
    	color: #ffffff;
      margin-right: 1vw;
    }

    img{
      width: 2vw;
      height: auto;
    }
  }

  .write-a-letter-send-button{
    width: 93vw;
    height: 11vw;
    margin: 0 auto;
    background-color: #33bcd4;
    display: flex;
    justify-content: center;
    align-items: center;

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0vw;
    	color: #fefefe;
    }
  }

  .dropdown-content{
    position: absolute;
    top: 8.5vw;
    right: 0vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    z-index: 300;
    background-color: #33bcd4;
    border-radius: 0.5vw;
    padding-top: 5vw;

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.3vw;
    	color: #ffffff;
      padding: 0vw 6.65vw 5vw;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .el-dropdown-link{
    background-color: #33bcd4;
	  border-radius: 0.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2.5vw 2.5vw;

    img{
      height: 1vw;
      width: auto;
      margin-left: 1vw;
    }
  }

  .el-dropdown-link:hover{
    cursor: pointer;
  }

  .write-a-letter-dropdown-text{
    font-family: "Microsoft YaHei";
  	font-size: 3vw;
  	font-weight: normal;
  	font-stretch: normal;
  	letter-spacing: 0.3vw;
  	color: #ffffff;
  }
}

</style>

<style scoped>

.write-a-letter-container >>> .el-textarea__inner{
  width: 84vw;
  margin: 2.5vw auto 0vw;
  border-radius: 0.5vw;
  background-color: #505771;
  border: none;
  font-family: "Microsoft YaHei";
	font-size: 3vw;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0.3vw;
	color: #bacef1;
  padding: 2.5vw 3vw;
}

.write-a-content-container >>> .el-textarea__inner{
  width: 84vw;
  margin: 3vw auto 0vw;
  border-radius: 0.5vw;
  background-color: #505771;
  border: none;
  font-family: "Microsoft YaHei";
	font-size: 3vw;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0.3vw;
	color: #bacef1;
  padding: 2.5vw 3vw;
}

.write-a-letter-main-container >>> .el-form-item__error{
  font-size: 2.5vw;
  letter-spacing: 0.2vw;
  margin-left: 5vw;
}

.el-dropdown-menu--small .el-dropdown-menu__item{
  padding: 0vw 3vw;
  font-size: 3vw;
  color: #33bcd4;
  line-height: 6vw;
}

</style>
