<template>
  <div class="promotion-main-container">

    <xf-game-header headerTitlePassed="优惠活动"></xf-game-header>

    <div class="discount-additional-height">

    </div>

    <div class="promotion-navigationbar-container">
      <ul>
        <li :class="{promoActiveNav:allSectionNav}" @click="allCards">全部</li>
        <li :class="{promoActiveNav:firstDepositNav}" @click="firstDepositF">首存</li>
        <li :class="{promoActiveNav:physicalEducationNav}" @click="physicalEducationF">体育</li>
        <li :class="{promoActiveNav:realPeopleNav}" @click="realPeopleF">真人</li>
        <li :class="{promoActiveNav:backwaterNav}" @click="backwaterF">返水</li>
        <li :class="{promoActiveNav:haoliNav}" @click="haoliF">豪礼</li>
      </ul>
    </div>

    <div class="promotion-scrollable-container">

        <!-- change the class "cardSection" to group the cards according to its assigned section. -->
        <!-- Example no.1 :class="{cardSection:firstDeposit}" -->
        <!-- Example no.2 :class="{cardSection:physicalEducation}"  -->
        <!-- Example no.3 :class="{cardSection:realPeople}"  -->
        <!-- Example no.4 :class="{cardSection:backwater}"  -->
        <!-- Example no.5 :class="{cardSection:haoli}"  -->

        <div :class="{cardSection:firstDeposit}" class="promotion-card-container">
            <div class="promo-inner-top">
              <div class="promo-inner-top-left">
                <span>2019-12-06至2020-12-06</span>
              </div>
              <div class="promo-inner-top-right">
                <span>查看详情&#62;&#62;</span>
              </div>
            </div>

            <div class="promo-orange-tag">
                <img src="../../assets/images/promotion/promotion-tag.png" alt="" width="100%" height="100%">
            </div>

            <div class="promo-main-img">
                <img src="../../assets/images/promotion/promotion-image.png" alt="" width="100%" height="100%">
            </div>
        </div>


        <div :class="{cardSection:firstDeposit}" class="promotion-card-container">
            <div class="promo-inner-top">
              <div class="promo-inner-top-left">
                <span>2019-12-06至2020-12-06</span>
              </div>
              <div class="promo-inner-top-right">
                <span>查看详情&#62;&#62;</span>
              </div>
            </div>

            <div class="promo-orange-tag">
                <img src="../../assets/images/promotion/promotion-tag.png" alt="" width="100%" height="100%">
            </div>

            <div class="promo-main-img">
                <img src="../../assets/images/promotion/promotion-image.png" alt="" width="100%" height="100%">
            </div>
        </div>


        <div :class="{cardSection:physicalEducation}" class="promotion-card-container">
            <div class="promo-inner-top">
              <div class="promo-inner-top-left">
                <span>2019-12-06至2020-12-06</span>
              </div>
              <div class="promo-inner-top-right">
                <span>查看详情&#62;&#62;</span>
              </div>
            </div>

            <div class="promo-orange-tag">
                <img src="../../assets/images/promotion/promotion-tag.png" alt="" width="100%" height="100%">
            </div>

            <div class="promo-main-img">
                <img src="../../assets/images/promotion/promotion-image.png" alt="" width="100%" height="100%">
            </div>
        </div>


        <div :class="{cardSection:physicalEducation}" class="promotion-card-container">
            <div class="promo-inner-top">
              <div class="promo-inner-top-left">
                <span>2019-12-06至2020-12-06</span>
              </div>
              <div class="promo-inner-top-right">
                <span>查看详情&#62;&#62;</span>
              </div>
            </div>

            <div class="promo-orange-tag">
                <img src="../../assets/images/promotion/promotion-tag.png" alt="" width="100%" height="100%">
            </div>

            <div class="promo-main-img">
                <img src="../../assets/images/promotion/promotion-image.png" alt="" width="100%" height="100%">
            </div>
        </div>


        <div :class="{cardSection:realPeople}" class="promotion-card-container">
            <div class="promo-inner-top">
              <div class="promo-inner-top-left">
                <span>2019-12-06至2020-12-06</span>
              </div>
              <div class="promo-inner-top-right">
                <span>查看详情&#62;&#62;</span>
              </div>
            </div>

            <div class="promo-orange-tag">
                <img src="../../assets/images/promotion/promotion-tag.png" alt="" width="100%" height="100%">
            </div>

            <div class="promo-main-img">
                <img src="../../assets/images/promotion/promotion-image.png" alt="" width="100%" height="100%">
            </div>
        </div>


        <div :class="{cardSection:realPeople}" class="promotion-card-container">
            <div class="promo-inner-top">
              <div class="promo-inner-top-left">
                <span>2019-12-06至2020-12-06</span>
              </div>
              <div class="promo-inner-top-right">
                <span>查看详情&#62;&#62;</span>
              </div>
            </div>

            <div class="promo-orange-tag">
                <img src="../../assets/images/promotion/promotion-tag.png" alt="" width="100%" height="100%">
            </div>

            <div class="promo-main-img">
                <img src="../../assets/images/promotion/promotion-image.png" alt="" width="100%" height="100%">
            </div>
        </div>


        <div :class="{cardSection:backwater}" class="promotion-card-container">
            <div class="promo-inner-top">
              <div class="promo-inner-top-left">
                <span>2019-12-06至2020-12-06</span>
              </div>
              <div class="promo-inner-top-right">
                <span>查看详情&#62;&#62;</span>
              </div>
            </div>

            <div class="promo-orange-tag">
                <img src="../../assets/images/promotion/promotion-tag.png" alt="" width="100%" height="100%">
            </div>

            <div class="promo-main-img">
                <img src="../../assets/images/promotion/promotion-image.png" alt="" width="100%" height="100%">
            </div>
        </div>


        <div :class="{cardSection:backwater}" class="promotion-card-container">
            <div class="promo-inner-top">
              <div class="promo-inner-top-left">
                <span>2019-12-06至2020-12-06</span>
              </div>
              <div class="promo-inner-top-right">
                <span>查看详情&#62;&#62;</span>
              </div>
            </div>

            <div class="promo-orange-tag">
                <img src="../../assets/images/promotion/promotion-tag.png" alt="" width="100%" height="100%">
            </div>

            <div class="promo-main-img">
                <img src="../../assets/images/promotion/promotion-image.png" alt="" width="100%" height="100%">
            </div>
        </div>


        <div :class="{cardSection:haoli}" class="promotion-card-container">
            <div class="promo-inner-top">
              <div class="promo-inner-top-left">
                <span>2019-12-06至2020-12-06</span>
              </div>
              <div class="promo-inner-top-right">
                <span>查看详情&#62;&#62;</span>
              </div>
            </div>

            <div class="promo-orange-tag">
                <img src="../../assets/images/promotion/promotion-tag.png" alt="" width="100%" height="100%">
            </div>

            <div class="promo-main-img">
                <img src="../../assets/images/promotion/promotion-image.png" alt="" width="100%" height="100%">
            </div>
        </div>


        <div :class="{cardSection:haoli}" class="promotion-card-container">
            <div class="promo-inner-top">
              <div class="promo-inner-top-left">
                <span>2019-12-06至2020-12-06</span>
              </div>
              <div class="promo-inner-top-right">
                <span>查看详情&#62;&#62;</span>
              </div>
            </div>

            <div class="promo-orange-tag">
                <img src="../../assets/images/promotion/promotion-tag.png" alt="" width="100%" height="100%">
            </div>

            <div class="promo-main-img">
                <img src="../../assets/images/promotion/promotion-image.png" alt="" width="100%" height="100%">
            </div>
        </div>

    </div>


    <xf-footer :footerPromotion="footerPromotionActive"></xf-footer>

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

    name: 'Discount',
    data() {
      return {
        allSectionNav: true,
        firstDepositNav: false,
        physicalEducationNav: false,
        realPeopleNav: false,
        backwaterNav: false,
        haoliNav: false,

        firstDeposit: false,
        physicalEducation: false,
        realPeople: false,
        backwater: false,
        haoli: false,

        footerPromotionActive: true,
      }
    },

    computed: {

    },

    methods: {

      allCards(){
        this.allSectionNav = true;

        this.firstDepositNav = false;
        this.physicalEducationNav = false;
        this.realPeopleNav = false;
        this.backwaterNav = false;
        this.haoliNav = false;

        this.firstDeposit = false;
        this.physicalEducation = false;
        this.realPeople = false;
        this.backwater = false;
        this.haoli = false;
      },

      firstDepositF(){
        this.allSectionNav = false;

        this.firstDepositNav = true;
        this.physicalEducationNav = false;
        this.realPeopleNav = false;
        this.backwaterNav = false;
        this.haoliNav = false;

        this.firstDeposit = false;
        this.physicalEducation = true;
        this.realPeople = true;
        this.backwater = true;
        this.haoli = true;
      },

      physicalEducationF(){
        this.allSectionNav = false;

        this.firstDepositNav = false;
        this.physicalEducationNav = true;
        this.realPeopleNav = false;
        this.backwaterNav = false;
        this.haoliNav = false;

        this.firstDeposit = true;
        this.physicalEducation = false;
        this.realPeople = true;
        this.backwater = true;
        this.haoli = true;
      },

      realPeopleF(){
        this.allSectionNav = false;

        this.firstDepositNav = false;
        this.physicalEducationNav = false;
        this.realPeopleNav = true;
        this.backwaterNav = false;
        this.haoliNav = false;

        this.firstDeposit = true;
        this.physicalEducation = true;
        this.realPeople = false;
        this.backwater = true;
        this.haoli = true;
      },

      backwaterF(){
        this.allSectionNav = false;

        this.firstDepositNav = false;
        this.physicalEducationNav = false;
        this.realPeopleNav = false;
        this.backwaterNav = true;
        this.haoliNav = false;

        this.firstDeposit = true;
        this.physicalEducation = true;
        this.realPeople = true;
        this.backwater = false;
        this.haoli = true;
      },

      haoliF(){
        this.allSectionNav = false;

        this.firstDepositNav = false;
        this.physicalEducationNav = false;
        this.realPeopleNav = false;
        this.backwaterNav = false;
        this.haoliNav = true;

        this.firstDeposit = true;
        this.physicalEducation = true;
        this.realPeople = true;
        this.backwater = true;
        this.haoli = false;
      }

    },

    mounted() {

    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

.promotion-main-container{
  width: 100%;
  height: 100%;
  position: relative;

  .discount-additional-height{
    width: 100%;
    height: 4vw;
    background-color: #212534;
  }

  .promotion-navigationbar-container{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #212534;
    width: 100%;
    height: 8vw;

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
    position: absolute;
    top: 24vw;
    bottom: 0;
    background-color: #131724;
    width: 100%;
    height: 153vw;
    overflow-y: auto;
    padding-top: 3vw;
    padding-bottom: 13vw;
  }

  .promotion-card-container{
    position: relative;
    margin: 0 auto;
    width: 94vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .promo-main-img{
    width: 100%;

    img{
      width: 100%;
      height: auto;
      border: 0.5vw solid #212534;
      border-radius: 1vw 0vw 1vw 1vw;
    }
  }

  .promo-inner-top{
    width: 100%;
    height: 5vw;
    // background-color: orange;
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
      bottom: 3.3vw;
      left: 0;

    img{
      width: 12.4vw;
      height: auto;
    }
  }

  .cardSection{
    display: none;
  }
}

</style>

<style scoped>

</style>
