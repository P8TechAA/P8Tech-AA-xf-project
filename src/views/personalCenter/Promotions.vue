<template>
  <div class="promotions-tm-main-container">

    <xf-game-header headerTitlePassed="优惠活动"></xf-game-header>

    <div class="promotions-tm-scrollable-container">
      <div v-for="i in promotionsItems" :key="i.id">
        <div @click="promotionF" class="promotions-items-container">
          <img :src="i.image" class="promotions-i-image"/>
          <div class="promotions-i-name">{{i.name}}</div>
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
const promotionsMock = Mock.mock({
  "array|6": [
    {
      "id|+1": 0,
      "name": "转运金",
      "image": require('../../assets/images/games/promotions-transfer-money-image.png'),
    }
  ],
});

console.log(JSON.stringify(promotionsMock, null, 4));

export default {
  components:{
    'xf-game-header': Header,
    'xf-footer': Footer
  },

  name: 'PromotionsTransferMoney',

  data() {
    return {
      promotionsItems:[],
    }
  },

  created() {
    this.promotionsDataF()
  },

  methods: {
    promotionF(){
      swal("促销点击.")
    },

    promotionsDataF() {
      this.promotionsItems=promotionsMock.array
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.promotions-tm-main-container{
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
 
  .promotions-tm-scrollable-container{
    position: relative;
    background-color: #212534;
    width: 93%;
    margin: 15vw auto 16vw;
    padding: 0vw 3vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .promotions-items-container{
   background-color: #212534;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 29vw;
   border-bottom: 0.5vw solid #505771;
  }

  .promotions-i-image{
    width: 16.5vw;
    height: auto;
    margin: 4vw auto 3vw;
  }

  .promotions-i-name{
    font-family: "Microsoft YaHei";
    font-size: 3.5vw;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0vw;
    color: #bacef1;
    text-align: center;
    margin-bottom: 3vw;
    width: 16vw;  
    overflow-x: auto;
    overflow-y: hidden;  
    white-space: nowrap;  
  }
}
</style>

<style scoped>
  html,body{
    height: 100%;
    width: 100%;
  }
</style>
