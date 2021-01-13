<template>
  <div class="home-footer">
      <div class="footer-inner" @click="gotoHomepage">
          <img v-if="footerHomeActive" src="../assets/images/footer/home-active.png" alt="" height="100%" width="100%">
          <img v-else src="../assets/images/footer/home.png" alt="" height="100%" width="100%">
          <span :class="{footerActiveText:footerHomeActive}">首页</span>
      </div>

      <div class="footer-inner" @click="gotoDiscount">
          <img v-if="footerDiscountActive" src="../assets/images/footer/discount-active.png" alt="" height="100%" width="100%">
          <img v-else src="../assets/images/footer/discount.png" alt="" height="100%" width="100%">
          <span :class="{footerActiveText:footerDiscountActive}">优惠</span>
      </div>

      <div class="footer-inner" @click="gotoCustomerService">
          <img v-if="footerCustomerServiceActive" src="../assets/images/footer/customer-service-active.png" alt="" height="100%" width="100%">
          <img v-else src="../assets/images/footer/customer-service.png" alt="" height="100%" width="100%">
          <span :class="{footerActiveText:footerCustomerServiceActive}">客服</span>
      </div>

      <div class="footer-inner" @click="gotoSlotMachine">
          <img v-if="footerJoinActive" src="../assets/images/footer/join-active.png" alt="" height="100%" width="100%">
          <img v-else src="../assets/images/footer/join.png" alt="" height="100%" width="100%">
          <span :class="{footerActiveText:footerJoinActive}">加盟</span>
      </div>

      <div class="footer-inner" @click="gotoPersonalCenter">
          <img v-if="footerMineActive" src="../assets/images/footer/mine-active.png" alt="" height="100%" width="100%">
          <img v-else src="../assets/images/footer/mine.png" alt="" height="100%" width="100%">
          <span :class="{footerActiveText:footerMineActive}">我的</span>
      </div>
  </div>
</template>

<script>
export default {
  props:['footerHome','footerPromotion','footerCustomerService','footerGameConsole','footerMine'],

  data(){
    return{
      footerHomeActive: this.footerHome,
      footerDiscountActive: this.footerPromotion,
      footerCustomerServiceActive: this.footerCustomerService,
      footerJoinActive: this.footerGameConsole,
      footerMineActive: this.footerMine
    }
  },

  methods:{
    gotoHomepage(){
      this.$router.push({ path: this.redirect || '/homepage' })
    },

    gotoDiscount(){
      this.$router.push({ path: this.redirect || '/discount' })
    },

    gotoCustomerService(){
      this.$router.push({ path: this.redirect || '/customerservice' })
    },

    gotoSlotMachine(){
      this.$router.push({ path: this.redirect || '/slotmachine' })
    },

    gotoPersonalCenter(){
      this.$router.push({ path: this.redirect || '/personalcenter' })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.home-footer{
  position: fixed;
  bottom: 0;
  background-color: #212534;
  width: 100%;
  height: 13vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2vw 2vw 0vw 0vw;
}

.footer-inner{
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img{
    width: 5.5vw;
    height: auto;
    margin-bottom: 1vw;
  }

  img:hover{
    cursor: pointer;
  }

  span{
    font-family: "Microsoft YaHei";
    font-size: 2.8vw;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #bacef1;
  }

  span:hover{
    cursor: pointer;
  }
}

.footerActiveText{
  color: #33bcd4 !important;
}
</style>
