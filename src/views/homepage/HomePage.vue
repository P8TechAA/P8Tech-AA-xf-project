<template>
  <div class="home-main-container">

    <div class="home-slideshow-main-container">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide><img src="../../assets/images/home/home-slideshow-img.png" alt="" width="100%"></swiper-slide>
        <swiper-slide><img src="../../assets/images/home/home-slideshow-img.png" alt="" width="100%"></swiper-slide>
        <swiper-slide><img src="../../assets/images/home/home-slideshow-img.png" alt="" width="100%"></swiper-slide>
        <swiper-slide><img src="../../assets/images/home/home-slideshow-img.png" alt="" width="100%"></swiper-slide>
        <swiper-slide><img src="../../assets/images/home/home-slideshow-img.png" alt="" width="100%"></swiper-slide>
        <swiper-slide><img src="../../assets/images/home/home-slideshow-img.png" alt="" width="100%"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <div class="home-news-ticker-container">
        <div class="home-news-ticker-icon">
          <img src="../../assets/images/home/home-speaker.png" alt="" width="100%" height="100%">
        </div>

        <div class="home-news-ticker-text-container">
          <marquee-text class="home-news-ticker" :duration="10">
            <p>页面提示为准！不便之处敬请见谅 祝您生活愉快（2020年3月31日</p>
          </marquee-text>
        </div>
      </div>
    </div>

    <div class="home-welcome-user-container">
      <div class="home-welcome-logo">
        <span>LOGO</span>
      </div>

      <div class="home-welcome-user">
        <span>欢迎您，亲爱的用户</span>
      </div>

      <div class="home-welcome-login-first">
        <span>请先登录</span>
      </div>

      <div class="home-welcome-user-icon">
        <img src="../../assets/images/home/home-user-icon.png" alt="" width="100%" height="100%">
      </div>
    </div>

    <div class="home-menu-container">
      <div class="home-icon-container">
        <div class="home-icon-icon">
            <img src="../../assets/images/home/home-deposit.png" alt="" width="100%" height="100%">
        </div>
        <div class="home-icon-text">
            <span>存款</span>
        </div>
      </div>

      <div class="home-icon-container">
        <div class="home-icon-icon">
            <img src="../../assets/images/home/home-withdraw.png" alt="" width="100%" height="100%">
        </div>
        <div class="home-icon-text">
            <span>取款</span>
        </div>
      </div>

      <div class="home-icon-container">
        <div class="home-icon-icon">
            <img src="../../assets/images/home/home-transfer.png" alt="" width="100%" height="100%">
        </div>
        <div class="home-icon-text">
            <span>转账</span>
        </div>
      </div>

      <div class="home-icon-container">
        <div class="home-icon-icon">
            <img src="../../assets/images/home/home-vip-details.png" alt="" width="100%" height="100%">
        </div>
        <div class="home-icon-text">
            <span>VIP详情</span>
        </div>
      </div>
    </div>

    <div class="home-navigation-container">
      <ul>
        <li :class="{homeNav1Active:homeNav1Status}"><a href="#eSportsContainer">电竞赛事</a></li>
        <li :class="{homeNav2Active:homeNav2Status}"><a href="#physicalEducationContainer">体育</a></li>
        <li :class="{homeNav3Active:homeNav3Status}"><a href="#realPersonContainer">真人</a></li>
        <li :class="{homeNav4Active:homeNav4Status}"><a href="#chessContainer">棋牌</a></li>
        <li :class="{homeNav5Active:homeNav5Status}"><a href="#fishingContainer">捕鱼</a></li>
        <li :class="{homeNav6Active:homeNav6Status}"><a href="#videoGamesContainer">电游</a></li>
      </ul>
    </div>

      <div class="scroll-area" ref="homeScrollerContainer" @scroll="scrollerFunction">
        <div class="eSportsContainer" ref="eSportsContainer" id="eSportsContainer">
          <img src="../../assets/images/home/esports-1.png" alt="" width="100%" height="100%">
        </div>

        <div class="physicalEducationContainer" ref="physicalEducationContainer" id="physicalEducationContainer">
          <img src="../../assets/images/home/pe-89.png" alt="" width="100%" height="100%">
        </div>

        <div class="realPersonContainer" ref="realPersonContainer" id="realPersonContainer">
          <img src="../../assets/images/home/realperson-68.png" alt="" width="100%" height="100%">
          <img src="../../assets/images/home/realperson-ag.png" alt="" width="100%" height="100%">
          <img src="../../assets/images/home/realperson-llbet.png" alt="" width="100%" height="100%">
          <img src="../../assets/images/home/realperson-ebet.png" alt="" width="100%" height="100%">
        </div>

        <div class="chessContainer" ref="chessContainer" id="chessContainer">
          <img src="../../assets/images/home/chess-1.png" alt="" width="100%" height="100%">
          <img src="../../assets/images/home/chess-68.png" alt="" width="100%" height="100%">
          <img src="../../assets/images/home/chess-ky.png" alt="" width="100%" height="100%">
        </div>

        <div class="fishingContainer" ref="fishingContainer" id="fishingContainer">
          <img src="../../assets/images/home/fishing-68.png" alt="" width="100%" height="100%">
        </div>

        <div class="videoGamesContainer" ref="videoGamesContainer" id="videoGamesContainer">
          <img src="../../assets/images/home/videogames-ttg.png" alt="" width="100%" height="100%">
        </div>
      </div>


      <xf-footer :footerHome="footerHomeActive"></xf-footer>

  </div>
</template>

<script>
import Footer from '../../components/Footer.vue'

export default {
    components:{
        'xf-footer': Footer
    },

    name: 'carrousel',
    data() {
      return {
        swiperOptions: {
          loop: true,
          speed: 1000,
          autoplay: {
                delay: 4000,
                disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },

        settings: {
        maxScrollbarLength: 60
        },

        scrollerTopPosition: 0,
        homeSection1: 0,
        homeSection2: 0,
        homeSection3: 0,
        homeSection4: 0,
        homeSection5: 0,
        homeSection6: 0,

        homeNav1Status: false,
        homeNav2Status: false,
        homeNav3Status: false,
        homeNav4Status: false,
        homeNav5Status: false,
        homeNav6Status: false,

        footerHomeActive: true,
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },

    methods: {
      scrollerFunction() {
        this.scrollerTopPosition = this.$refs.homeScrollerContainer.scrollTop;
        this.homeSection1 = this.$refs.eSportsContainer.offsetTop;
        this.homeSection2 = this.$refs.physicalEducationContainer.offsetTop;
        this.homeSection3 = this.$refs.realPersonContainer.offsetTop;
        this.homeSection4 = this.$refs.chessContainer.offsetTop;
        this.homeSection5 = this.$refs.fishingContainer.offsetTop;
        this.homeSection6 = this.$refs.videoGamesContainer.offsetTop;


        if(this.scrollerTopPosition >= ((this.homeSection1)-7)){
          this.homeNav1Status = true;
          this.homeNav2Status = false;
          this.homeNav3Status = false;
          this.homeNav4Status = false;
          this.homeNav5Status = false;
          this.homeNav6Status = false;
        }

        if (this.scrollerTopPosition >= ((this.homeSection2)-5)){
          this.homeNav1Status = false;
          this.homeNav2Status = true;
          this.homeNav3Status = false;
          this.homeNav4Status = false;
          this.homeNav5Status = false;
          this.homeNav6Status = false;
        }

        if (this.scrollerTopPosition >= ((this.homeSection3)-5)){
          this.homeNav1Status = false;
          this.homeNav2Status = false;
          this.homeNav3Status = true;
          this.homeNav4Status = false;
          this.homeNav5Status = false;
          this.homeNav6Status = false;
        }

        if (this.scrollerTopPosition >= ((this.homeSection4)-5)){
          this.homeNav1Status = false;
          this.homeNav2Status = false;
          this.homeNav3Status = false;
          this.homeNav4Status = true;
          this.homeNav5Status = false;
          this.homeNav6Status = false;
        }

        if (this.scrollerTopPosition >= ((this.homeSection5)-5)){
          this.homeNav1Status = false;
          this.homeNav2Status = false;
          this.homeNav3Status = false;
          this.homeNav4Status = false;
          this.homeNav5Status = true;
          this.homeNav6Status = false;
        }

        if (this.scrollerTopPosition >= ((this.homeSection6)-5)){
          this.homeNav1Status = false;
          this.homeNav2Status = false;
          this.homeNav3Status = false;
          this.homeNav4Status = false;
          this.homeNav5Status = false;
          this.homeNav6Status = true;
        }

      }
    },

    mounted() {
      this.scrollerFunction();
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

.home-main-container{
  width: 100%;
  height: 100%;
  position: relative;

  .home-slideshow-main-container{
    width: 100%;
    height: auto;
    line-height: 0;
    position: relative;
  }

  .home-news-ticker-container{
    width: 100%;
    height: 7.8vw;
    position: absolute;
    bottom: 0;
    background-color: rgba(53, 55, 72, 0.8);
    z-index: 200;
    border-radius: 2vw 2vw 0vw 0vw;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .home-news-ticker-icon{
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
      width: auto;
      height: 5vw;
    }
  }

  .home-news-ticker-text-container{
    height: 100%;
    width: 88%;
  }

  .home-news-ticker{
    width: 100%;
    height: 100%;
    padding-top: 0.8vw;

    p{
      font-family: MicrosoftYaHei;
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.2vw;
    	color: #bacef1;
      float: left;
    }
  }

  .home-welcome-user-container{
    width: 100%;
    height: 7.5vw;
    background-color: #212534;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .home-welcome-logo{
    height: 100%;
    padding-left: 2.5vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span{
      font-family: "Microsoft Yahei";
    	font-size: 4vw;
    	font-weight: bold;
    	font-stretch: normal;
    	color: #2d879c;
    }
  }

  .home-welcome-user{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 6vw;

    span{
      font-family: "Microsoft Yahei";
    	font-size: 3.5vw;
    	font-stretch: normal;
    	color: #bacef1;
    }
  }

  .home-welcome-login-first{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20vw;

    span{
      font-family: "Microsoft Yahei";
    	font-size: 3.5vw;
    	font-stretch: normal;
    	color: #bacef1;
    }
  }

  .home-welcome-user-icon{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 6vw;

    img{
      width: 4.5vw;
      height: 4.5vw;
    }
  }

  .home-menu-container{
    width: 100%;
    height: 18vw;
    background-color: #1a1c28;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .home-icon-container{
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .home-icon-icon{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1vw;

    img{
      width: 7.5vw;
      height: auto;
    }
  }

  .home-icon-text{
    display: flex;
    justify-content: center;
    align-items: center;

    span{
      font-family: "Microsoft Yahei";
    	font-size: 3vw;
    	font-stretch: normal;
    	color: #bacef1;
    }
  }

  .home-navigation-container{
    width: 100%;
    height: 7.6vw;
    background-color: #1a1c28;
    display: flex;
    justify-content: center;
    align-items: center;

    ul{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0vw;
    }

    li{
      list-style: none;
      font-size: 3.2vw;
      font-family: "Microsoft YaHei";
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0px;
      color: #bacef1;
      padding: 2vw 2vw;
      // background-color: pink;
    }

    li:hover{
      cursor: pointer;
    }

    a{
      text-decoration: none;
      color: inherit;
    }

    .homeNav1Active, .homeNav2Active, .homeNav3Active, .homeNav4Active, .homeNav5Active, .homeNav6Active{
      // background-color: orange;
      color: #FFFFFF;
      background-image: linear-gradient(0deg, #11131f 10%, #203d4f 100%),
    	linear-gradient(#11131f, #11131f);
    	background-blend-mode: normal,normal;
    	border-radius: 1.5vw;
    }
  }

  .scroll-area {
    width: 100%;
    height: 95vw;
    position: absolute;
    top: 82.5vw;
    bottom: 0;
    background-color: #131724;
    text-align: center;
    overflow-y: auto;
    scroll-behavior: smooth;
    padding-top: 2vw;
    padding-bottom: 70vw;

    img{
      width: 95%;
      height: auto;
      border-radius: 1vw;
    }
  }

  // .home-footer{
  //   position: fixed;
  //   bottom: 0;
  //   background-color: #212534;
  //   width: 100%;
  //   height: 13vw;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   border-radius: 2vw 2vw 0vw 0vw;
  // }
  //
  // .footer-inner{
  //   width: 20%;
  //   height: 100%;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   flex-direction: column;
  //
  //   img{
  //     width: 5.5vw;
  //     height: auto;
  //     margin-bottom: 1vw;
  //   }
  //
  //   span{
  //     font-family: "Microsoft YaHei";
  //   	font-size: 2.8vw;
  //   	font-weight: normal;
  //   	font-stretch: normal;
  //   	letter-spacing: 0px;
  //   	color: #bacef1;
  //   }
  // }
  //
  // .footer-active-text{
  //   color: #33bcd4 !important;
  // }
}







</style>

<style scoped>
.swiper-pagination{
  margin-bottom: 7.5vw;
}

.swiper-pagination >>> .swiper-pagination-bullet {
    opacity: 1;
    border: 0.3vw solid #bacef1;
    background-color: transparent;
    margin: 0 2vw;
    width: 2vw;
    height: 2vw;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
    background-color: #33bcd4;
    border: 0.5vw solid #33bcd4;
}
</style>
