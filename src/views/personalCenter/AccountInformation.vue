<template>
  <div class="account-information-main-container">

    <xf-game-header headerTitlePassed="账户信息"></xf-game-header>

    <div class="account-information-exclusive-url">
      <a :href="accountInfoItems.accountInfoURL" target="_blank">专属网址 : {{accountInfoItems.accountInfoURL}}</a>
    </div>

    <div class="account-information-scrollable-container">

      <div class="account-information-container">

        <div class="account-information-inner">
          <div class="inner-prefix">账号</div>
          <div class="inner-value">{{accountInfoItems.id}}</div>
        </div>

        <div class="account-information-inner">
          <div class="inner-prefix">性别</div>
          <div class="inner-value">{{accountInfoItems.accountInfoGender}}</div>
        </div>

        <div class="account-information-inner">
          <div class="inner-prefix">姓名</div>
          <div class="inner-value">{{accountInfoItems.accountInfoName}}</div>
        </div>

        <div class="account-information-inner">
          <div class="inner-prefix">生日</div>
          <div class="inner-value">{{accountInfoItems.accountInfoBday}}</div>
        </div>

        <div class="account-information-inner">
          <div class="inner-prefix">QQ</div>
          <div class="inner-value">{{accountInfoItems.accountInfoQq}}</div>
        </div>

        <div class="account-information-inner">
          <div class="inner-prefix">微信</div>
          <div class="inner-value">{{accountInfoItems.accountInfoWeChat}}</div>
        </div>

        <div class="account-information-inner">
          <div class="inner-prefix">邮箱</div>
          <div class="inner-value">{{accountInfoItems.accountInfoMailBox}}</div>
          <div class="mailbox-verification-button" @click="verifyMailBox()">验证</div>
        </div>

        <div class="account-information-inner">
          <div class="inner-prefix">电话</div>
          <div class="inner-value">{{accountInfoItems.accountInfoPhone}}</div>
        </div>

        <div class="account-information-inner">
          <div class="inner-prefix">注册时间</div>
          <div class="inner-value">{{accountInfoItems.accountInfoRegTime}}</div>
        </div>

        <div class="account-information-inner">
          <div class="inner-prefix">专属推广码</div>
          <div class="inner-value">{{accountInfoItems.accountInfoPromoCode}}</div>
        </div>

        <div class="account-information-inner">
          <div class="inner-prefix">推广链接</div>
          <div class="inner-value">{{accountInfoItems.accountInfoSponsoredLinks}}</div>
        </div>

        <div class="account-information-submit-button" @click="submitAccountInformation()">
          <span>提交</span>
        </div>

      </div>

    </div>

    <xf-footer></xf-footer>

  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

var Mock = require('mockjs');
const Random = Mock.Random;
const accountInformationMock = Mock.mock({
    userMock:{
        id: "@id",
        accountInfoURL: "@url",
        accountInfoGender: "Male",
        accountInfoName: "@name",
        accountInfoBday: "@date",
        accountInfoQq: "@word",
        accountInfoWeChat: "@email",
        accountInfoMailBox: "@email",
        accountInfoPhone: "00000000",
        accountInfoRegTime: "@time",
        accountInfoPromoCode: "00000000",
        accountInfoSponsoredLinks: "@url",
      }
   });

console.log(JSON.stringify(accountInformationMock, null, 4));

export default {
  components:{
      'xf-game-header': Header,
      'xf-footer': Footer
  },

  name: 'AccountInformation',
    data() {
      return {
        accountInfoItems:{},
        accountNumber: '账号',
        gender: '性别',
        name: '姓名',
        birthday: '生日',
        qq: 'QQ',
        wechat: '微信',
        mailbox: '邮箱',
        phone: '电话',
        registrationTime: '注册时间',
        exclusivePromotionalCode: '专属推广码',
        sponsoredLinks: '推广链接',
      }
    },

    created() {
      this.accountInfoDataF()
    },

    methods: {
      accountInfoDataF() {
        this.accountInfoItems=accountInformationMock.userMock
      },

      submitAccountInformation(){
        swal("帐户信息已提交!")
      },

      verifyMailBox(){
        swal("验证请求已发送!")
      }
    },

  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

.account-information-main-container{
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;

  .account-information-scrollable-container{
    position: relative;
    width: 93%;
    margin: 0vw auto 13vw;
    display: flex;
    flex-wrap: wrap;
  }

  .account-information-exclusive-url{
    width: 100%;
    height: 12vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    margin-top: 12vw;
    a{
      text-decoration: none;
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.3vw;
    	color: #33bcd4;
    }
  }

  .account-information-container{
    width: 93vw;
    margin: 0 auto;
  }

  .account-information-inner{
    width: 100%;
    height: 12vw;
    background-color: #212534;
	  border-radius: 0.5vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0.8vw;
  }

  .inner-prefix{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 37vw;
    height: 100%;
    font-family: "Microsoft YaHei";
  	font-size: 3vw;
  	font-weight: normal;
  	font-stretch: normal;
  	letter-spacing: 0.3vw;
  	color: #bacef1;
    padding-left: 9vw;
  }

  .inner-value{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 35vw;
    height: 100%;
    font-family: "Microsoft YaHei";
  	font-size: 3vw;
  	font-weight: normal;
  	font-stretch: normal;
  	letter-spacing: 0.3vw;
  	color: #758197;
  }

  .mailbox-verification-button{
    width: 17vw;
    height: 8vw;
    background-color: #2d879c;
	  border-radius: 0.3vw;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Microsoft YaHei";
  	font-size: 3vw;
  	font-weight: normal;
  	font-stretch: normal;
  	letter-spacing: 0.3vw;
  	color: #ffffff;
  }

  .account-information-submit-button{
    width: 100%;
    height: 12vw;
    background-color: #2d879c;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5vw;

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

body,html{
  width: 100%;
  height: 100%;
}

</style>
