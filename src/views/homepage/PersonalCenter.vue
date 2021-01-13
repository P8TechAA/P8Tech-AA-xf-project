<template>
  <div class="mine-main-container">

    <section v-if="loginStatus=='userLogin'">
      <div class="mine-avatar-image-container">
          <div class="mine-avatar-left">
            <img src="../../assets/images/mine/mine-login-active.png" alt="" width="100%" height="100%">
          </div>

          <div class="mine-avatar-right">
            <div class="mine-avatar-user-name">
              <span>{{mineUserName}}</span><img src="../../assets/images/mine/vip-badge.png" alt="" width="100%" height="100%">
            </div>

            <div class="mine-avatar-joining-date">
              {{mineJoiningDate}}
            </div>

            <div class="mine-avatar-progress-bar-container">
              <div class="mine-progress-bar-inner">
                <div class="mine-progress-bar-indicator" :style="{width:progressBarPercentage+'%'}">

                </div>
              </div>
              <span>{{mineVipLabel}}</span>
            </div>

            <div class="mine-upgrade-desc">
              {{mineUpgradeDesc}}
            </div>
          </div>
      </div>
    </section>

    <section v-if="loginStatus=='userNotLogin'">
      <div class="not-login-mine-avatar-image-container">
        <div class="not-login-mine-avatar-image">
          <img src="../../assets/images/mine/mine-login-avatar.png" alt="" width="100%" height="100%">
        </div>

        <span>立即登录</span>
      </div>
    </section>

    <div class="mine-central-wallet-container">

      <div class="mine-central-wallet-top">
        <div class="mine-central-wallet-top-left">
          <span class="mine-central-text">中心钱包：</span>
          <span class="mine-central-balance">{{centralWalletAmount}}</span>
        </div>

        <section v-if="loginStatus=='userNotLogin'">
          <div class="mine-central-wallet-top-right">
            <div class="mine-goto-registration">
              <div class="mine-goto-registration-image-container">
                <img src="../../assets/images/mine/mine-goto-registration.png" alt="" width="100%" height="100%">
              </div>

              <div class="mine-goto-registration-texts-container">
                <span class="mine-goto-registration-text">前往注册>></span>
                <span class="mine-open-more-exciting-text">开启更多精彩</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="mine-central-hr-line"></div>

      <div class="mine-central-wallet-bottom">
        <div class="mine-central-wallet-bottom-inner">
          <img src="../../assets/images/home/home-deposit.png" alt="" width="100%" height="100%">
          <span>存款</span>
        </div>

        <div class="mine-central-wallet-bottom-inner">
          <img src="../../assets/images/home/home-withdraw.png" alt="" width="100%" height="100%">
          <span>取款</span>
        </div>

        <div class="mine-central-wallet-bottom-inner">
          <img src="../../assets/images/home/home-transfer.png" alt="" width="100%" height="100%">
          <span>转账</span>
        </div>

        <div class="mine-central-wallet-bottom-inner">
          <img src="../../assets/images/home/home-vip-details.png" alt="" width="100%" height="100%">
          <span>VIP详情</span>
        </div>
      </div>
    </div>

    <div class="mine-my-function-container">

      <div class="mine-my-function-top">
        <div class="mine-my-function-top-square"></div>
        <span>我的功能</span>
      </div>

      <div class="mine-my-function-menu-layer">
        <div class="mine-my-function-menu-inner">
          <img src="../../assets/images/mine/mine-transaction-record.png" alt="" width="100%" height="100%">
          <span>交易记录</span>
        </div>

        <div class="mine-my-function-menu-inner">
          <img src="../../assets/images/mine/mine-claim-collection.png" alt="" width="100%" height="100%">
          <span>优惠领取</span>
        </div>

        <div class="mine-my-function-menu-inner">
          <img src="../../assets/images/mine/mine-personal-information.png" alt="" width="100%" height="100%">
          <span>个人信息</span>
        </div>
      </div>


      <div class="mine-my-function-menu-layer">
        <div class="mine-my-function-menu-inner">
          <img src="../../assets/images/mine/mine-change-password.png" alt="" width="100%" height="100%">
          <span>修改密码</span>
        </div>

        <div class="mine-my-function-menu-inner">
          <img src="../../assets/images/mine/mine-bank-information.png" alt="" width="100%" height="100%">
          <span>银行信息</span>
        </div>

        <div class="mine-my-function-menu-inner">
          <img src="../../assets/images/mine/mine-download-center.png" alt="" width="100%" height="100%">
          <span>下载中心</span>
        </div>
      </div>


      <div class="mine-my-function-menu-layer">
        <div class="mine-my-function-menu-inner">
          <img src="../../assets/images/mine/mine-system-notification.png" alt="" width="100%" height="100%">
          <span>系统公告</span>
        </div>
      </div>

    </div>

    <div class="mine-sign-out-button">
        <span>退出登录</span>
    </div>


    <xf-footer :footerMine="footerMineActive"></xf-footer>

  </div>
</template>


<script>
import Footer from '../../components/Footer.vue'

export default {
  components:{
      'xf-footer': Footer
  },

  name: 'PersonalCenter',
    data() {
      return {
        footerMineActive: true,
        centralWalletAmount: 0.00,
        mineUserName: 'weishenmeagan',
        mineJoiningDate: '您已经加入xxxx300天',
        mineVipLabel: 'VIP1',
        mineUpgradeDesc: '升级需要500.00存款和3000.00流水',
        progressBarPercentage: 75,
        loginStatus: 'userNotLogin',
      }
    },

    computed: {

    },

    methods: {

    },

    mounted() {

    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

.mine-main-container{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0vw;
  overflow-y: auto;
  padding-bottom: 15vw;

  .mine-avatar-image-container{
    width: 100%;
    height: 35vw;
    background-image: url("../../assets/images/mine/mine-cover-bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .mine-avatar-left{
    margin-left: 3vw;
    margin-top: 2vw;
    margin-right: 3vw;

    img{
      width: 15vw;
      height: auto;
    }
  }

  .mine-avatar-right{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .mine-avatar-user-name{
    display: flex;
    justify-content: flex-start;
    align-items: center;

    span{
      font-family: "Microsoft YaHei";
    	font-size: 2.5vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.3vw;
    	color: #ffffff;
      margin-right: 1.5vw;
    }

    img{
      height: 5vw;
      width: auto;
    }
  }

  .mine-avatar-joining-date{
    font-family: "Microsoft YaHei";
    font-size: 2.5vw;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0.3vw;
    color: #ffffff;
    margin-bottom: 1vw;
  }

  .mine-avatar-progress-bar-container{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1vw;

    span{
      font-family: "Microsoft YaHei";
      font-size: 2.8vw;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0.3vw;
      color: #ffffff;
    }
  }

  .mine-progress-bar-inner{
    width: 40vw;
    height: 2vw;
    background-color: #ffffff;
	  border-radius: 1vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 1vw;
  }

  .mine-progress-bar-indicator{
    background-color: #48e3b0;
	  border-radius: 1vw;
    height: 100%;
  }

  .mine-upgrade-desc{
    font-family: "Microsoft YaHei";
    font-size: 2.5vw;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0.3vw;
    color: #ffffff;
  }

  .mine-central-wallet-container{
    margin: 0 auto;
    width: 93vw;
    height: 35.5vw;
    background-image: url("../../assets/images/mine/mine-top-container-bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-top: -3.5vw;
  }

  .mine-central-wallet-top{
    width: 100%;
    height: 19vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // background-color: orange;
  }

  .mine-central-wallet-top-left{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 3vw;
  }

  .mine-central-text{
    font-family: "Microsoft YaHei";
  	font-size: 2.8vw;
  	font-weight: normal;
  	font-stretch: normal;
  	letter-spacing: 0px;
  	color: #bacef1;
    margin-bottom: 1.5vw;
  }

  .mine-central-balance{
    font-family: "Microsoft YaHei";
  	font-size: 4vw;
  	font-weight: normal;
  	font-stretch: normal;
  	letter-spacing: 0px;
  	color: #bacef1;
  }

  .mine-central-wallet-top-right{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .mine-goto-registration{
    width: 34vw;
    height: 11vw;
    background-color: #393d4e;
    margin-top: 2.5vw;
    border-radius: 6vw 0vw 0vw 6vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .mine-goto-registration-image-container{
    display: flex;
    align-items: center;
    margin-left: 2.5vw;

    img{
      height: 6vw;
      width: auto;
    }
  }

  .mine-goto-registration-texts-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 2vw;
  }

  .mine-goto-registration-text{
    font-family: "Microsoft YaHei";
  	font-size: 2.3vw;
  	font-weight: normal;
  	font-stretch: normal;
  	letter-spacing: 0.5vw;
  	color: #33bcd4;
    margin-bottom: 1.3vw;
  }

  .mine-open-more-exciting-text{
    font-family: "Microsoft YaHei";
  	font-size: 2.3vw;
  	font-weight: normal;
  	font-stretch: normal;
  	letter-spacing: 0.5vw;
  	color: #bacef1;
  }

  .mine-central-hr-line{
    width: 89vw;
    height: 0.3vw;
    margin: 0 auto;
    background-color: #5b6577;
  }

  .mine-central-wallet-bottom{
    width: 100%;
    height: 15vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mine-central-wallet-bottom-inner{
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img{
      margin-left: 2vw;
      height: 7vw;
      width: auto;
    }

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0px;
    	color: #bacef1;
      margin-left: 1vw;
    }
  }

  .mine-my-function-container{
    width: 93vw;
    height: 73vw;
    margin: 3vw auto;
    background-color: #212534;
	  border-radius: 1vw;
    padding-top: 3.5vw;
  }

  .mine-my-function-top{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 8vw;

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0px;
    	color: #bacef1;
      margin-left: 3vw;
    }
  }

  .mine-my-function-top-square{
    width: 1.2vw;
    height: 3.5vw;
    background-color: #33bcd4;
    margin-left: 1.3vw;
  }

  .mine-my-function-menu-layer{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 5vw;
  }

  .mine-my-function-menu-inner{
    width: 33.33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
      height: 9vw;
      width: auto;
      margin-bottom: 1.5vw;
    }

    span{
      font-family: "Microsoft YaHei";
    	font-size: 2.5vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0px;
    	color: #bacef1;
    }
  }

  .mine-sign-out-button{
    width: 93vw;
    height: 10vw;
    background-color: #33bcd4;
    margin: 0 auto;
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

  .not-login-mine-avatar-image-container{
    width: 100%;
    height: 35vw;
    background-image: url("../../assets/images/mine/mine-cover-bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    span{
      font-family: "Microsoft YaHei";
    	font-size: 2.8vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.5vw;
    	color: #ffffff;
      margin-left: 3vw;
    }
  }

  .not-login-mine-avatar-image{

    img{
      width: 15vw;
      height: auto;
      margin-left: 3vw;
      margin-top: 2vw;
    }
  }

}

</style>

<style scoped>

</style>
