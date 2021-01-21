<template>
  <div class="promotion-main-container">

    <xf-game-header headerTitlePassed="优惠活动"></xf-game-header>

    <div class="promotion-navigationbar-container">
      <ul>
        <li :class="{promoActiveNav: isActive('all')}" @click="setActive('all')">全部</li>
        <li :class="{promoActiveNav: isActive('firstDeposit')}" @click="setActive('firstDeposit')">首存</li>
        <li :class="{promoActiveNav: isActive('physicalEducation')}" @click="setActive('physicalEducation')">体育</li>
        <li :class="{promoActiveNav: isActive('realPeople')}" @click="setActive('realPeople')">真人</li>
        <li :class="{promoActiveNav: isActive('backWater')}" @click="setActive('backWater')">返水</li>
        <li :class="{promoActiveNav: isActive('haoli')}" @click="setActive('haoli')">豪礼</li>
      </ul>
    </div>

    <div class="promotion-scrollable-container">
      <div v-for="i in firstDepositItems" :key="i.id" class="position-card-main-container">
        <div v-if="isActive('firstDeposit') || isActive('all')" class="promotion-card-container">
        
          <div class="promo-inner-top">
            <div class="promo-inner-top-left">
              <span>{{i.startDate}}</span><span>至</span><span>{{i.endDate}}</span>
            </div>
            <div class="promo-inner-top-right">
              <span>{{i.viewDetails}}</span>
            </div>
          </div>

          <div class="promo-orange-tag">
            <span>{{i.status}}</span>
          </div>

          <div class="promo-main-img">
            <img :src="i.discountCard" alt="" width="100%" height="100%">
          </div>

        </div>
      </div>

      <div v-for="i in physicalEducationItems" :key="i.id" class="position-card-main-container">
        <div v-if="isActive('physicalEducation') || isActive('all')" class="promotion-card-container">
          
          <div class="promo-inner-top">
            <div class="promo-inner-top-left">
              <span>{{i.startDate}}</span><span>至</span><span>{{i.endDate}}</span>
            </div>
            <div class="promo-inner-top-right">
              <span>{{i.viewDetails}}</span>
            </div>
          </div>

          <div class="promo-orange-tag">
            <span>{{i.status}}</span>
          </div>

          <div class="promo-main-img">
            <img :src="i.discountCard" alt="" width="100%" height="100%">
          </div>
        
        </div>
      </div>

      <div v-for="i in realPeopleItems" :key="i.id" class="position-card-main-container">
        <div v-if="isActive('realPeople') || isActive('all')" class="promotion-card-container">
          
          <div class="promo-inner-top">
            <div class="promo-inner-top-left">
              <span>{{i.startDate}}</span><span>至</span><span>{{i.endDate}}</span>
            </div>
            <div class="promo-inner-top-right">
              <span>{{i.viewDetails}}</span>
            </div>
          </div>

          <div class="promo-orange-tag">
            <span>{{i.status}}</span>
          </div>

          <div class="promo-main-img">
            <img :src="i.discountCard" alt="" width="100%" height="100%">
          </div>
        
        </div>
      </div>

      <div v-for="i in backWaterItems" :key="i.id" class="position-card-main-container">
        <div v-if="isActive('backWater') || isActive('all')" class="promotion-card-container">
          
          <div class="promo-inner-top">
            <div class="promo-inner-top-left">
              <span>{{i.startDate}}</span><span>至</span><span>{{i.endDate}}</span>
            </div>
            <div class="promo-inner-top-right">
              <span>{{i.viewDetails}}</span>
            </div>
          </div>

          <div class="promo-orange-tag">
            <span>{{i.status}}</span>
          </div>

          <div class="promo-main-img">
            <img :src="i.discountCard" alt="" width="100%" height="100%">
          </div>
        
        </div>
      </div>

      <div v-for="i in haoliItems" :key="i.id" class="position-card-main-container">
        <div v-if="isActive('haoli') || isActive('all')" class="promotion-card-container">
        
          <div class="promo-inner-top">
            <div class="promo-inner-top-left">
              <span>{{i.startDate}}</span><span>至</span><span>{{i.endDate}}</span>
            </div>
            <div class="promo-inner-top-right">
              <span>{{i.viewDetails}}</span>
            </div>
          </div>

          <div class="promo-orange-tag">
            <span>{{i.status}}</span>
          </div>

          <div class="promo-main-img">
            <img :src="i.discountCard" alt="" width="100%" height="100%">
          </div>
      
      </div>
      </div>
    </div>

    <xf-footer :footerPromotion="footerPromotionActive"></xf-footer>
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

var Mock = require('mockjs');
const Random = Mock.Random;

const discountMock = Mock.mock({
  "firstDeposit|2-10": [
    {
      id: '@id',
      startDate: "@date('yyyy-MM-dd')",
      endDate: "@date('yyyy-MM-dd')",
      viewDetails: "查看详情>>",
      status: "最新活动",
      discountCard:"@image('200x50', '#FFFFFF', 'Discount Cards')"
    }
  ],

  "physicalEducation|2-10": [
    {
      id: '@id',
      startDate: "@date('yyyy-MM-dd')",
      endDate: "@date('yyyy-MM-dd')",
      viewDetails: "查看详情>>",
      status: "最新活动",
      discountCard:"@image('200x50', '#FFFFFF', 'Discount Cards')"
    }
  ],

  "realPeople|2-10": [
    {
      id: '@id',
      startDate: "@date('yyyy-MM-dd')",
      endDate: "@date('yyyy-MM-dd')",
      viewDetails: "查看详情>>",
      status: "最新活动",
      discountCard:"@image('200x50', '#FFFFFF', 'Discount Cards')"
    }
  ],

  "backWater|2-10": [
    {
      id: '@id',
      startDate: "@date('yyyy-MM-dd')",
      endDate: "@date('yyyy-MM-dd')",
      viewDetails: "查看详情>>",
      status: "最新活动",
      discountCard:"@image('200x50', '#FFFFFF', 'Discount Cards')"
    }
  ],

  "haoli|2-10": [
    {
      id: '@id',
      startDate: "@date('yyyy-MM-dd')",
      endDate: "@date('yyyy-MM-dd')",
      viewDetails: "查看详情>>",
      status: "最新活动",
      discountCard:"@image('200x50', '#FFFFFF', 'Discount Cards')"
    }
  ],
});

console.log(JSON.stringify(discountMock, null, 4));

export default {
  components:{
    'xf-footer': Footer,
    'xf-game-header': Header
  },

  name: 'Discount',

  data() {
    return {
      activeItem: 'all',

      footerPromotionActive: true,

      firstDepositItems:[],
      physicalEducationItems:[],
      realPeopleItems:[],
      backWaterItems:[],
      haoliItems:[],
    }
  },

  created() {
    this.DiscountDataF()
  },

  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem
    },

    setActive(menuItem) {
      this.activeItem = menuItem
    },

    DiscountDataF() {
      this.firstDepositItems=discountMock.firstDeposit
      this.physicalEducationItems=discountMock.physicalEducation
      this.realPeopleItems=discountMock.realPeople
      this.backWaterItems=discountMock.backWater
      this.haoliItems=discountMock.haoli
    }
  } 
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.promotion-main-container{
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;

  .promotion-navigationbar-container{
    position: fixed;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #212534;
    width: 100%;
    height: 11vw;
    margin-top: 12vw;
    padding-top: 3vw;
 
    ul{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0vw;
    }

    li{
      list-style: none;
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
      font-stretch: normal;
    	letter-spacing: 0vw;
      color: #bacef1;
      width: 15vw;
      height: 100%;
      text-align: center;
    }

    li:hover{
      cursor: pointer;
    }
  }

  .promoActiveNav{
    color: #33bcd4 !important;
    border-bottom: 0.5vw solid #33bcd4 !important;
  }

  .promotion-scrollable-container{
    position: relative;
    width: 93%;
    margin: 26vw auto 13vw;
    display: flex;
    flex-wrap: wrap;
  }

  .position-card-main-container{
    position: relative;
    width: 100%;
  }

  .promotion-card-container{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .promo-main-img{
    width: 100%;

    img{
      border: 0.5vw solid #212534;
      border-radius: 1vw 0vw 1vw 1vw;
    }
  }

  .promo-inner-top{
    width: 100%;
    height: 5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .promo-inner-top-left{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    height: 100%;

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	color: #bacef1;
    }
  }

  .promo-inner-top-right{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 22vw;
    height: 100%;
    letter-spacing: 0.4vw;
    padding-left: 0.7vw;
    background-image: linear-gradient(0deg, #212534 31%, #203d4f 100%), linear-gradient(#212534, #212534);
    background-blend-mode: normal, normal;
    border-radius: 1vw 1vw 0vw 0vw;

    span{
      font-family: "Microsoft YaHei";
    	font-size: 2.6vw;
    	font-weight: normal;
    	font-stretch: normal;
    	color: #33bcd4;
    }
  }

  .promo-orange-tag{
    position: absolute;
    bottom: 5vw;
    left: 0.5vw;
    width: 13vw;
    height: 5vw;
    background-image: linear-gradient(90deg, 
      #ff4e00 0%, 
      #db1500 100%), 
    linear-gradient(
      #260600, 
      #260600);
    background-blend-mode: normal, 
      normal;
    border-radius: 0vw 3vw 3vw 0vw;
    display: flex;
    justify-content: center;
    align-items: center;

    span{
      font-family: "MicrosoftYaHei";
      font-size: 2.3vw;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0vw;
      color: #fefefe;
    }
  }

  .cardSection{
    display: none;
  }
}
</style>

<style scoped>
  html,body{
    width: 100%;
    height: 100%;
  }
</style>
