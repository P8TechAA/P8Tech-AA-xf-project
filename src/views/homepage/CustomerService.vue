<template>
  <div class="customer-service-main-container">

    <xf-game-header headerTitlePassed="客服"></xf-game-header>

    <div class="customer-service-scrollable-container">

      <div class="customer-service-banner">
        <img src="../../assets/images/customerservice/customer-service-banner.png" alt="" width="100%" height="100%">
      </div>

      <div class="customer-service-info-container">
        <p>欢迎联系XX</p>
        <p>我们的官网是&nbsp;<a href="https://www.xxxxx.com" target="_blank">https://www.xxxxx.com</a></p>
        <p>XX五大优惠滚动来袭，日日存，日日送，每日惊喜不重样。邀新朋，唤旧友，XX100元彩金免费领！</p>
      </div>

      <div class="customer-service-contactqq">
          <img src="../../assets/images/customerservice/customer-service-contactqq.png" alt="" width="100%" height="100%">
          <span>联系QQ</span>
      </div>

      <div class="customer-service-contactqq">
          <img src="../../assets/images/customerservice/customer-service-online-service.png" alt="" width="100%" height="100%">
          <span>在线客服</span>
      </div>

    </div>

    <xf-footer :footerCustomerService="footerCustomerServiceActive"></xf-footer>

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

  name: 'CustomerService',
    data() {
      return {
        footerCustomerServiceActive: true,
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

.customer-service-main-container{
  width: 100%;
  height: 100%;
  position: relative;

  .customer-service-scrollable-container{
    position: absolute;
    top: 12vw;
    bottom: 0;
    background-color: #131724;
    width: 100%;
    height: 165vw;
    overflow-y: auto;
    padding-top: 4.5vw;
    padding-bottom: 15vw;
  }

  .customer-service-banner{
    width: 94vw;
    height: auto;
    margin: 0 auto;

    img{
      width: 100%;
      height: auto;
      border: 0.5vw solid #212534;
      border-radius: 1vw;
    }
  }

  .customer-service-info-container{
    width: 94vw;
    background-color: #212534;
    margin: 0 auto;
    padding: 4vw 9vw 6vw;
    border-radius: 3vw;
    margin-top: 2vw;
    word-break: break-all;

    p{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
      line-height: 5vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0px;
    	color: #bacef1;
    }

    a{
      text-decoration: none;
      color: #33bcd4;
    }
  }

  .customer-service-contactqq{
    width: 94vw;
    height: 11.5vw;
    margin: 0 auto;
    background-color: #33bcd4;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5.5vw;

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
    }
  }

  .customer-service-contactqq:hover{
    cursor: pointer;
  }

}

</style>

<style scoped>

</style>
