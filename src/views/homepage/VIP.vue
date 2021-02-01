<template>
  <div class="vip-main-container">

    <div class="vip-scrollable-container">
      
      <section v-if="step == 'vip1'">
      <div class="vip-top-container">
        <div class="vip-top-top">
          <span :class="{vipNavigationActive:vipPrivilegesStatus}" @click="privilegesTab">VIP特权</span>
          <span :class="{vipNavigationActive:vipDetailsStatus}" @click="detailsTab">VIP详情</span>
        </div>

        <swiper class="swiper" :options="swiperOption">
          <swiper-slide>
            <img :src="vipMockItems.vipImageLeft" alt="" width="100%" height="100%">
            <div class="vip-card-text">
              <span class="vip-text-top">{{vipMockItems.vipLeftTextOne}}</span>
              <span class="vip-text-mid">{{vipMockItems.vipLeftTextTwo}}</span>
              <span class="vip-text-bottom">{{vipMockItems.vipLeftButton}}</span>
            </div>
          </swiper-slide>

          <swiper-slide class="vip-swiper-image">
            <img :src="vipMockItems.vipImageRight" alt="" width="100%" height="100%">
            <div class="vip-card-text">
              <span class="vip-text-top">{{vipMockItems.vipRighttTextOne}}</span>
              <span class="vip-text-mid">{{vipMockItems.vipRightTextTwo}}</span>
              <span class="vip-text-bottom">{{vipMockItems.vipRightButton}}</span>
            </div>
          </swiper-slide>

          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>

        <div class="progress-bar-percentage">
          {{vipMockItems.balance}}%
        </div>

        <div class="progress-bar-bar">
          <div class="progress-label-vip1">
            VIP{{vipMockItems.vipPrevLevel}}
          </div>

          <div class="progress-percentage-container">
            <div class="progress-bar-progress-indicator" :style="{width:vipMockItems.balance+'%'}"></div>
          </div>

          <div class="progress-label-vip2">
            VIP{{vipMockItems.vipNextLevel}}
          </div>
        </div>

        <div class="progress-description">
            您已完成&nbsp;{{vipMockItems.deposit}}&nbsp;存款和&nbsp;{{vipMockItems.turnover}}&nbsp;流水
        </div>
      </div>

      
        <div class="vip-privileges">
          <div class="vip-privileges-mark"></div>
          <span>VIP特权</span>
        </div>

        <div class="priviliges-row">
          <div class="privileges-col1-img">
            <img src="../../assets/images/vip/monthly-red-envelop.png" alt="" width="100%" height="100%">
          </div>
          <span class="privileges-col2-text">每月红包</span>
          <p class="privileges-col3-text">38<span class="privileges-col3-yuan">元</span></p>
          <div class="privileges-col4-button">
            <span>领取</span>
          </div>
        </div>

        <div class="priviliges-row">
          <div class="privileges-col1-img">
            <img src="../../assets/images/vip/monthly-deposit.png" alt="" width="100%" height="100%">
          </div>
          <span class="privileges-col2-text">每月存送</span>
          <p class="privileges-col3-text">588<span class="privileges-col3-yuan">元</span></p>
          <div class="privileges-col4-button">
            <span>领取</span>
          </div>
        </div>

        <div class="priviliges-row">
          <div class="privileges-col1-img">
            <img src="../../assets/images/vip/birthday-gift.png" alt="" width="100%" height="100%">
          </div>
          <span class="privileges-col2-text">生日礼金</span>
          <p class="privileges-col3-text">588<span class="privileges-col3-yuan">元</span></p>
          <div class="privileges-col4-button">
            <span>领取</span>
          </div>
        </div>

        <div class="vip-privileges vip-privileges-add-margin">
          <div class="vip-privileges-mark"></div>
          <span>VIP特权</span>
        </div>

        <div class="privileges-data">
          <div class="priveleges-inner">
            <div class="priveleges-inner-percentage">
              {{vipMockItems.eSportsRebate}}%
            </div>
            <div class="priveleges-inner-label">
              电竞返水
            </div>
          </div>

          <div class="priveleges-inner">
            <div class="priveleges-inner-percentage">
              {{vipMockItems.sportsRebate}}%
            </div>
            <div class="priveleges-inner-label">
              体育返水
            </div>
          </div>

          <div class="priveleges-inner">
            <div class="priveleges-inner-percentage">
              {{vipMockItems.realityRebate}}%
            </div>
            <div class="priveleges-inner-label">
              真人返水
            </div>
          </div>

          <div class="priveleges-inner">
            <div class="priveleges-inner-percentage">
              {{vipMockItems.electronicRebate}}%
            </div>
            <div class="priveleges-inner-label">
              电子返水
            </div>
          </div>

          <div class="priveleges-inner">
            <div class="priveleges-inner-percentage">
              {{vipMockItems.fishingRebate}}%
            </div>
            <div class="priveleges-inner-label">
              捕鱼返水
            </div>
          </div>

          <div class="priveleges-inner">
            <div class="priveleges-inner-percentage">
              {{vipMockItems.chessRebate}}%
            </div>
            <div class="priveleges-inner-label">
              棋牌返水
            </div>
          </div>
        </div>
      </section>

      <!-- Start of Section 2 -->

      <section v-if="step == 'vip2'" class="section2-container">
      <div class="vip-top-container">
        <div class="vip-top-top">
          <span :class="{vipNavigationActive:vipPrivilegesStatus}" @click="privilegesTab">VIP特权</span>
          <span :class="{vipNavigationActive:vipDetailsStatus}" @click="detailsTab">VIP详情</span>
        </div>
      </div>

      <div class="vip-details-tb-container">
        <table class="customers">
  <tr>
    <th>等级</th>
    <th>升级要求</th>
    <th>保级要求</th>
    <th>生日礼金</th>
    <th>每日红包</th>
    <th>日提款额度</th>
  </tr>

      
        <tr v-for="i in vip2Items" :key="i.id">
          <td>{{i.grade}}</td>
          <td>{{i.upgradeRequirements}}</td>
          <td>{{i.relagationRequirements}}</td>
          <td>{{i.birthdayGiftGold}}</td>
          <td>{{i.dailyRedPackage}}</td>
          <td>{{i.dailyWithdrawalQuota}}</td>
        </tr>
     

  
  
</table>
      </div>
        
      
        
       
      </section>




    </div>
 </div>
</template>

<script>
import Footer from '../../components/Footer.vue'

var Mock = require('mockjs');
const Random = Mock.Random;
const vipMock = Mock.mock({
  vipMock:{
    id: "@id",
    vipImageLeft: "@image('100x60','#d6d6d6', 'VIP Image')",
    vipLeftTextOne: ">存款量少20元可申请一次",
    vipLeftTextTwo: ">晋级奖金18888元",
    vipLeftButton: "立即申请",
    
    vipImageRight: '@image("100x60","#d6d6d6", "VIP Image")',
    vipRighttTextOne: ">存款量少20元可申请一次",
    vipRightTextTwo: ">晋级奖金18888元",
    vipRightButton: "立即申请",

    vipPrevLevel: 1,
    vipNextLevel: 2,

    "balance|1-100": 100,
    "deposit|1-100.2": 100,
    "turnover|1-100.2": 100,

    "eSportsRebate|1-100.2": 100,
    "sportsRebate|1-100.2": 100,
    "realityRebate|1-100.2": 100,
    "electronicRebate|1-100.2": 100,
    "fishingRebate|1-100.2": 100,
    "chessRebate|1-100.2": 100,
    },

    "vip2details|10": [
    {
      id: '@id',
      grade: "@word",
      upgradeRequirements: "@word",
      relagationRequirements: "@word",
      birthdayGiftGold: "@word",
      dailyRedPackage: "@word",
      dailyWithdrawalQuota: "@word",
    }
  ],
});

console.log(JSON.stringify(vipMock, null, 4));

export default {
  components:{
      'xf-footer': Footer
  },

  name: 'VIP',

  data() {
    return {
      vipMockItems:{},
      vip2Items:[],

      vipPrivilegesStatus: true,
      vipDetailsStatus: false,
      step: 'vip1',

      swiperOption: {
        loop: true,
        speed: 1000,
        autoplay: {
              delay: 4000,
              disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
    }
  },

  created() {
    this.vipMockF()
  },

  methods: {
    vipMockF() {
      this.vipMockItems=vipMock.vipMock
      this.vip2Items=vipMock.vip2details
    },

    privilegesTab(){
      this.step = 'vip1'
      this.vipPrivilegesStatus = true,
      this.vipDetailsStatus = false
    },

    detailsTab(){
      this.step = 'vip2'
      this.vipPrivilegesStatus = false,
      this.vipDetailsStatus = true
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.vip-main-container{
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;

  .vip-scrollable-container{
    position: relative;
    background-color: #131724;
    width: 100%;
  }

  .vip-top-container{
    width: 100%;
    background-image: url("../../assets/images/vip/vip-background.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 2.5vw 0vw 5vw;
  }

  .vip-top-top{
    width: 60vw;
    margin: 0 auto;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span{
      font-family: "Microsoft YaHei";
    	font-size: 4vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.4vw;
    	color: #ffffff;

      border-bottom: 1vw solid transparent;
      padding: 2vw 4vw;
    }

    .vipNavigationActive{
     border-bottom: 1vw solid #33bcd4;
    }
  }

  .swiper{
    width: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10vw;
  }

  .swiper-slide{
    width: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
      height: 35vw;
      width: auto;
    }
  }

  .vip-card-text{
    position: absolute;
    bottom: 4.5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .vip-text-top{
    font-family: "Microsoft YaHei";
    font-size: 2vw;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0.2vw;
    color: #ffffff;
    margin-bottom: 2vw;
  }

  .vip-text-mid{
    font-family: "Microsoft YaHei";
    font-size: 2vw;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0.2vw;
    color: #ffffff;
    margin-bottom: 3.5vw;
  }

  .vip-text-bottom{
    font-family: "Microsoft YaHei";
  	font-size: 2.2vw;
  	font-weight: normal;
  	font-stretch: normal;
  	letter-spacing: 0.2vw;
  	color: #590101;
    background-image: linear-gradient(90deg, #e3d5a8 0%, #a88f5d 100%), linear-gradient(#122336, #122336);
	  background-blend-mode: normal, normal;
	  border-radius: 0.7vw;
    padding: 1.5vw 6vw;
    margin-left: 2.4vw;
  }

  .progress-bar-percentage{
    width: 52vw;
    margin: 0 auto;
    font-family: "Microsoft YaHei";
  	font-size: 3vw;
  	font-weight: normal;
  	font-stretch: normal;
  	letter-spacing: 0.3vw;
  	color: #ffffff;
    margin-top: 7vw;
  }

  .progress-bar-bar{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1vw;
  }

  .progress-label-vip1{
    font-family: "Microsoft YaHei";
  	font-size: 3vw;
  	font-weight: normal;
  	font-stretch: normal;
  	letter-spacing: 0.3vw;
  	color: #ffffff;
  }

  .progress-percentage-container{
    width: 52vw;
    height: 2vw;
    background-color: #ffffff;
	  border-radius: 1vw;
    margin: 0 2vw;
  }

  .progress-label-vip2{
    font-family: "Microsoft YaHei";
  	font-size: 3vw;
  	font-weight: normal;
  	font-stretch: normal;
  	letter-spacing: 0.3vw;
  	color: #ffffff;
  }

  .progress-bar-progress-indicator{
    height: 100%;
    border-radius: 1vw;
    background-color: #48e3b0;
  }

  .progress-description{
    font-family: "Microsoft YaHei";
  	font-size: 3vw;
  	font-weight: normal;
  	font-stretch: normal;
  	letter-spacing: 0.5vw;
  	color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3.5vw;
  }

  .vip-privileges{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 3vw;
    margin-bottom: 5vw;

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0vw;
    	color: #bacef1;
    }
  }

  .vip-privileges-mark{
    width: 0.8vw;
    height: 4vw;
    background-color: #33bcd4;
    margin-right: 3vw;
    margin-left: 3vw;
  }

  .priviliges-row{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 5vw;
  }

  .privileges-col1-img{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 23vw;

    img{
      height: 10vw;
      width: auto;
    }
  }

  .privileges-col2-text{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: "Microsoft YaHei";
  	font-size: 2.8vw;
  	font-weight: normal;
  	font-stretch: normal;
  	letter-spacing: 0.2vw;
  	color: #bacef1;
    width: 23vw;
  }

  .privileges-col3-text{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: "Microsoft YaHei";
  	font-size: 2.8vw;
  	font-weight: normal;
  	font-stretch: normal;
  	letter-spacing: 0.2vw;
  	color: #bacef1;
    width: 29vw;
  }

  .privileges-col3-yuan{
    font-size: 2vw;
  }

  .privileges-col4-button{
    width: 18vw;
    height: 7.5vw;
    background-color: #33bcd4;
    display: flex;
    justify-content: center;
    align-items: center;

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.5vw;
    	color: #ffffff;
    }
  }

  .vip-privileges-add-margin{
    margin-top: 7vw;
  }

  .privileges-data{
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .priveleges-inner-percentage{
    font-family: "Microsoft YaHei";
  	font-size: 5vw;
  	font-weight: bold;
  	font-stretch: normal;
  	letter-spacing: 0.6vw;
  	color: #ccb455;
    margin-bottom: 2vw;
  }

  .priveleges-inner-label{
    font-family: "Microsoft YaHei";
  	font-size: 2.5vw;
  	font-weight: normal;
  	font-stretch: normal;
  	letter-spacing: 0.3vw;
  	color: #bacef1;
  }

  .priveleges-inner{
    width: 15vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0vw 7vw 7vw;
  }


  .section2-container{
  position: relative;
  width: 100%;
  height: 100%;
}

  .vip-details-tb-container{
    position: relative;
    width: 94%;
    height: 100%;
    margin: 0 auto;
    // background-color: green;
    margin-top: 3vw;
  }



 .customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  font-size: 3vw;
  text-align: center;
  background-color: #212534;
  
}

.customers td{
  border: 0.01vw solid #eee;
  color: #bacef1;
  padding: 2vw 0vw;
}

.customers th {
  background-color: #33bcd4;
  color: white;
  text-align: center;
  padding: 2vw;
}



}
</style>

<style scoped>
  body,html{
    width: 100%;
    height: 100%;
  }

  .swiper-button-next{
    width: 5vw;
    height: 5vw;
    right: 5vw;
    top: 20vw;
    opacity: 1;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .swiper-navigation-size{
    font-size: 0vw;
  }

  .swiper-button-next:after{
    width: 5vw;
    height: 5vw;
    color: transparent;
    background-image: url("../../assets/images/vip/slide-right.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-size: 0vw;
  }

  .swiper-button-prev{
    width: 5vw;
    height: 5vw;
    left: 5vw;
    top: 20vw;
    opacity: 1;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .swiper-button-prev:after{
    width: 5vw;
    height: 5vw;
    color: transparent;
    background-image: url("../../assets/images/vip/slide-left.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-size: 0vw;
  }
</style>
