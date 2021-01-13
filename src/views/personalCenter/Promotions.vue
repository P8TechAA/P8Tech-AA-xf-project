<template>
  <div class="promotions-transfer-money-main-container">

    <xf-game-header headerTitlePassed="优惠活动"></xf-game-header>

    <div class="promotions-tm-scrollable-container">

      <div class="promotions-tm-content">
        <div class="promotions-tm-content-layer">
          <div class="promotions-tm-inner" @click="promotionF()">
            <img src="../../assets/images/games/promotions-transfer-money-image.png" alt="" width="100%" height="100%">
            <span>转运金</span>
          </div>

          <div class="promotions-tm-inner" @click="promotionF()">
            <img src="../../assets/images/games/promotions-transfer-money-image.png" alt="" width="100%" height="100%">
            <span>转运金</span>
          </div>

          <div class="promotions-tm-inner" @click="promotionF()">
            <img src="../../assets/images/games/promotions-transfer-money-image.png" alt="" width="100%" height="100%">
            <span>转运金</span>
          </div>
        </div>

        <div class="promotions-tm-hr-line"></div>

        <div class="promotions-tm-content-layer">
          <div class="promotions-tm-inner" @click="promotionF()">
            <img src="../../assets/images/games/promotions-transfer-money-image.png" alt="" width="100%" height="100%">
            <span>转运金</span>
          </div>

          <div class="promotions-tm-inner" @click="promotionF()">
            <img src="../../assets/images/games/promotions-transfer-money-image.png" alt="" width="100%" height="100%">
            <span>转运金</span>
          </div>

          <div class="promotions-tm-inner" @click="promotionF()">
            <img src="../../assets/images/games/promotions-transfer-money-image.png" alt="" width="100%" height="100%">
            <span>转运金</span>
          </div>
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

  name: 'PromotionsTransferMoney',
    data() {
      return {

      }
    },

    computed: {

    },

    methods: {
      promotionF(){
        swal("促销点击.")
      }
    },

    mounted() {

    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

.promotions-transfer-money-main-container{
  width: 100%;
  height: 100%;
  position: relative;

  .promotions-tm-scrollable-container{
    position: absolute;
    top: 12vw;
    bottom: 0;
    background-color: #131724;
    width: 100%;
    height: 165vw;
    overflow-y: auto;
    padding-top: 3.5vw;
  }

  .promotions-tm-content{
    width: 93vw;
    background-color: #212534;
	  border-radius: 1vw;
    margin: 0 auto;
  }

  .promotions-tm-content-layer{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .promotions-tm-inner{
    width: 33.33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3vw 0vw;

    img{
      width: 15vw;
      height: auto;
      margin-bottom: 3vw;
    }

    span{
      width: 75%;
      text-align: center;
      line-height: 3.8vw;
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.5vw;
    	color: #bacef1;
      word-break: break-all;
    }
  }

  .promotions-tm-hr-line{
    margin: 0 auto;
    width: 85vw;
    height: 0.3vw;
    background-color: #505771;
  }

}

</style>

<style scoped>

</style>
