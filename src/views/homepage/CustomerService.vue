<template>
  <div class="customer-service-main-container">

    <xf-game-header headerTitlePassed="客服"></xf-game-header>

    <div class="customer-service-scrollable-container">
      <div class="customer-service-banner">
        <img :src="customerServiceItems.customerServiceImg" alt="">
      </div>

      <div class="customer-service-info-container">
        <div class="cSWelcomeText">{{customerServiceItems.sentence1}}</div>
        
        <div class="cSWebsite">
          {{customerServiceItems.websiteText}}&nbsp;<a :href="customerServiceItems.websiteAddress" target="_blank">{{customerServiceItems.websiteAddress}}</a>
        </div>
        
        <div class="cSDescription">{{customerServiceItems.customerServiceDescription}}</div>
      </div>

      <div class="customer-service-button-1">
          <img :src="customerServiceItems.csBtn1Image" alt="">
          <span>{{customerServiceItems.csBtn1Text}}</span>
      </div>

      <div class="customer-service-button-2">
          <img :src="customerServiceItems.csBtn2Image" alt="">
          <span>{{customerServiceItems.csBtn2Text}}</span>
      </div>
    </div>

    <xf-footer :footerCustomerService="footerCustomerServiceActive"></xf-footer>

  </div>
</template>


<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

var Mock = require('mockjs');

const customerServiceMock = Mock.mock({
  "customerServiceData":{
    id: "@id",
    customerServiceImg: "@image('200x45','#4A7BF7','Image')",
    sentence1: "@sentence(1)",
    websiteText: "我们的官网是",
    websiteAddress: "@url",
    customerServiceDescription: "@paragraph(1)",
    csBtn1Image:"@image('50x50','#fefefe','Button')",
    csBtn1Text:"联系QQ",
    csBtn2Image:"@image('50x50','#fefefe','Button')",
    csBtn2Text:"在线客服",
  }
});

console.log(JSON.stringify(customerServiceMock, null, 4));

export default {
  components:{
      'xf-footer': Footer,
      'xf-game-header': Header
  },

  name: 'CustomerService',

  data() {
    return {
      footerCustomerServiceActive: true,
      customerServiceItems:{}
    }
  },

  created() {
    this.customerServiceDataF()
  },

  methods: {
    customerServiceDataF() {
      this.customerServiceItems=customerServiceMock.customerServiceData;
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.customer-service-main-container{
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;

  .customer-service-scrollable-container{
    position: relative;
    width: 93%;
    margin: 16vw auto 17vw;
    display: flex;
    flex-wrap: wrap;
  }

  .customer-service-banner{
    width: 100%;

    img{
      width: 100%;
      height: auto;
      border: 0.5vw solid #212534;
      border-radius: 1vw;
    }
  }

  .customer-service-info-container{
    width: 100%;
    background-color: #212534;
    padding: 6vw 9vw 6vw;
    border-radius: 3vw;
    margin-top: 2vw;
    word-break: break-all;
  }

  .cSWelcomeText{
    font-family: "Microsoft YaHei";
    font-size: 3vw;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0vw;
    color: #bacef1;
    line-height: 5vw;
    margin-bottom: 3vw;
  }

  .cSWebsite{
    font-family: "Microsoft YaHei";
    font-size: 3vw;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0vw;
    color: #bacef1;
    line-height: 5vw;
    margin-bottom: 3vw;
  }

  .cSWebsite a{
    font-family: "Microsoft YaHei";
    font-size: 3vw;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0vw;
    color: #33bcd4;
    line-height: 5vw;
    text-decoration: none;
  }

  .cSDescription{
    font-family: "Microsoft YaHei";
    font-size: 3vw;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0vw;
    color: #bacef1;
    line-height: 5vw;
  }

  .customer-service-button-1{
    width: 100%;
    height: 11.5vw;
    background-color: #33bcd4;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5vw;

    img{
      width: 7vw;
      height: auto;
      margin-right: 2vw;
    }

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0px;
    	color: #fefefe;
      line-height: 4vw;
    }
  }

  .customer-service-button-1:hover{
    cursor: pointer;
  }

  .customer-service-button-2{
    width: 100%;
    height: 11.5vw;
    background-color: #33bcd4;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5vw;

    img{
      width: 7vw;
      height: auto;
      margin-right: 2vw;
    }

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0px;
    	color: #fefefe;
      line-height: 4vw;
    }
  }

  .customer-service-button-2:hover{
    cursor: pointer;
  }
}
</style>

<style scoped>
  body,html{
    width: 100%;
    height: 100%;
  }
</style>
