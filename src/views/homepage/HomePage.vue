<template>
  <div class="home-main-container">

    <div class="home-slideshow-main-container">
      <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="i in slideshowImages" :key="i.id">
            <img :src="i.image" alt="" width="100%" height="100%">
          </swiper-slide>
        
          <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
         
      <div class="home-news-ticker-container">
        <div class="home-news-ticker-icon">
          <img src="../../assets/images/home/home-speaker.png" alt="" width="100%" height="100%">
        </div>

        <div class="home-news-ticker-text-container">
          <marquee-text class="home-news-ticker" :duration="40">
            <p v-for="i in newsTickerItems" :key="i.id">{{i.message}}</p>
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
        <li :class="{navigationActive:isActive('eSports')}" @click="setActive('eSports')"><a href="#eSportsContainer">电竞赛事</a></li>
        <li :class="{navigationActive:isActive('physicalEduc')}" @click="setActive('physicalEduc')"><a href="#physicalEducationContainer">体育</a></li>
        <li :class="{navigationActive:isActive('realPerson')}" @click="setActive('realPerson')"><a href="#realPersonContainer">真人</a></li>
        <li :class="{navigationActive:isActive('chess')}" @click="setActive('chess')"><a href="#chessContainer">棋牌</a></li>
        <li :class="{navigationActive:isActive('fishing')}" @click="setActive('fishing')"><a href="#fishingContainer">捕鱼</a></li>
        <li :class="{navigationActive:isActive('videogames')}" @click="setActive('videogames')"><a href="#videoGamesContainer">电游</a></li>
      </ul>
    </div>

    <div class="scrollable-content">
        <div class="scroll-area">
        
        <div class="eSportsContainer"  id="eSportsContainer" ref="eSportsContainer">
          <div v-for="i in eSportItems" :key="i.id">
            <img :src="i.image" alt="" width="100%" height="100%">
          </div>
        </div>
        
        <div class="physicalEducationContainer" id="physicalEducationContainer" ref="physicalEducationContainer">
          <div v-for="i in physicalEducationItems" :key="i.id">
            <img :src="i.image" alt="" width="100%" height="100%">
          </div>
        </div>

        <div v-for="i in realPersonItems" :key="i.id" class="realPersonContainer" ref="realPersonContainer" id="realPersonContainer">
          <img :src="i.image" alt="" width="100%" height="100%">
        </div>

        <div v-for="i in chessItems" :key="i.id" class="chessContainer" ref="chessContainer" id="chessContainer">
          <img :src="i.image" alt="" width="100%" height="100%">
        </div>

        <div v-for="i in fishingItems" :key="i.id" class="fishingContainer" ref="fishingContainer" id="fishingContainer">
          <img :src="i.image" alt="" width="100%" height="100%">
        </div>

        <div class="videoGamesContainer" id="videoGamesContainer">
          <div v-for="i in videoGamesItems" :key="i.id" ref="videoGamesContainer">
            <img :src="i.image" alt="" width="100%" height="100%">
          </div>
        </div>
      </div>
    </div>

      <xf-footer :footerHome="footerHomeActive"></xf-footer>

  </div>
</template>

<script>
import Footer from '../../components/Footer.vue'

var Mock = require('mockjs');
const Random = Mock.Random;

const homepageMock = Mock.mock({
    "slideshowImages|5": [
      {
        "id|+1": "@id",
        "image":'@image("200x100", "#d6d6d6", "#000000", "Slideshow Images")'
      }
    ],

    "newsTicker|2": [
      {
        "id|+1": "@id",
        "message":'@paragraph(2)',
      }
    ],

    "eSports|6": [
      {
        "id|+1": "@id",
        "image":'@image("200x50", "#d6d6d6", "#000000", "Esports")'
      }
    ],

    "physicalEducation|6": [
      {
        "id|+1": "@id",
        "image":'@image("200x50", "#d6d6d6", "#000000", "Physical Education")'
      }
    ],

    "realPerson|6": [
      {
        "id|+1": "@id",
        "image":'@image("200x50", "#d6d6d6", "#000000", "Real Person")'
      }
    ],

    "chess|6": [
      {
        "id|+1": "@id",
        "image":'@image("200x50", "#d6d6d6", "#000000", "Chess")'
      }
    ],

    "fishing|6": [
      {
        "id|+1": "@id",
        "image":'@image("200x50", "#d6d6d6", "#000000", "Fishing")'
      }
    ],

    "videoGames|6": [
      {
        "id|+1": "@id",
        "image":'@image("200x50", "#d6d6d6", "#000000", "Video Games")'
      }
    ],

    "homepageTexts|2":{
        "logoText":"LOGO",
        "welcomeText": "欢迎您，亲爱的用户",
        "loginNote": "请先登录",
      },
    
  });

console.log(JSON.stringify(homepageMock, null, 4));

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

        footerHomeActive: true,

        slideshowImages:[],
        newsTickerItems:[],
        eSportsItems:[],
        physicalEducationItems:[],
        realPersonItems:[],
        chessItems:[],
        fishingItems:[],
        videoGamesItems:[],

        homepageTexts:{},

        activeItem: 'eSports',
      }
    },

    created() {
      this.homepageDataF()
    },

    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },

    methods: {
      homepageDataF() {
        this.slideshowImages=homepageMock.slideshowImages;
        this.newsTickerItems=homepageMock.newsTicker;
        this.eSportItems=homepageMock.eSports;
        this.physicalEducationItems=homepageMock.physicalEducation;
        this.realPersonItems=homepageMock.realPerson;
        this.chessItems=homepageMock.chess;
        this.fishingItems=homepageMock.fishing;
        this.videoGamesItems=homepageMock.videoGames;
        this.homepageTexts=homepageMock.homepageTexts;
      },

      isActive(menuItem) {
        return this.activeItem === menuItem
      },

      setActive(menuItem) {
        this.activeItem = menuItem
      },

    },

    mounted() {
      
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
    height: 50vw;
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
    position: relative;
    width: 100%;
    height: 7.5vw;
    background-color: #212534;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 3;
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
    position: relative;
    width: 100%;
    height: 18vw;
    background-color: #1a1c28;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
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
    position: relative;
    width: 100%;
    height: 7.6vw;
    background-color: #1a1c28;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;

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

    .navigationActive{
      color: #FFFFFF;
      background-image: linear-gradient(0deg, #11131f 10%, #203d4f 100%),
    	linear-gradient(#11131f, #11131f);
    	background-blend-mode: normal,normal;
    	border-radius: 1.5vw;
    }
  }

  .scrollable-content{
    position: absolute;
    top: 0vw;
    right: 0vw;
    bottom: 0vw;
    left: 0vw;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    // padding-top: 85vw;
    // padding-bottom: 12vw;
  }

  .scroll-area {
    position: relative;
    width: 93%;
    margin: 0 auto;

    img{
      width: 100%;
      height: auto;
      border-radius: 1vw;
    }
  }

  .eSportsContainer{
    padding-top: 85vw;
  }

  .videoGamesContainer{
    padding-bottom: 12vw;
  }

}
</style>

<style scoped>
html,body{
  width: 100%;
  height: 100%;
}

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
