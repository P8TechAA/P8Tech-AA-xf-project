<template>
  <div class="download-main-container">

    <xf-game-header headerTitlePassed="下载"></xf-game-header>

    <div class="download-scrollable-container">

      <div class="download-navigation-container">
        <div class="download-navigation-left" :class="{activeNavigation:androidNavStatus}" @click="androidTabF()">
          <span>安卓系统</span>
        </div>

        <div class="download-navigation-right" :class="{activeNavigation:appleNavStatus}" @click="appleTabF()">
          <span>苹果系统</span>
        </div>
      </div>

      <section v-if="step=='android'">

         <div v-for="i in appAndroidDownloadItems" :key="i.id">
            <div class="download-containers">
              <div class="download-logo">
                <img :src="i.image" alt="" width="100%" height="100%">
              </div>
              
              <div class="download-desc">
                <div class="download-desc-top">
                  {{i.downloadDescOne}}
                </div>
                <div class="download-desc-bottom">
                  {{i.downloadDescTwo}}
                </div>
              </div>

              <div class="download-button" @click="androidDownloadF()">
                <img src="../../assets/images/download/download.png" alt="" width="100%" height="100%">
                <span>下载</span>
              </div>
          </div>
        </div>

        

      </section>


      <section v-if="step=='apple'">

        <div v-for="i in appAppleDownloadItems" :key="i.id">
            <div class="download-containers">
              <div class="download-logo">
                <img :src="i.image" alt="" width="100%" height="100%">
              </div>
              
              <div class="download-desc">
                <div class="download-desc-top">
                  {{i.downloadDescOne}}
                </div>
                <div class="download-desc-bottom">
                  {{i.downloadDescTwo}}
                </div>
              </div>

              <div class="download-button" @click="androidDownloadF()">
                <img src="../../assets/images/download/download.png" alt="" width="100%" height="100%">
                <span>下载</span>
              </div>
          </div>
        </div>

      </section>

    </div>

    <xf-footer></xf-footer>

  </div>
</template>


<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

var Mock = require('mockjs');
const Random = Mock.Random;
const appDownloadMock = Mock.mock({
    "downloadAndroidMock|2-6":[
      {
        id: "@id",
        downloadDescOne: "@word",
        downloadDescTwo: "@word",
        "image":'@image("20x20", "#d6d6d6", "#000000", "logo")'
      }
      ],

      "downloadAppleMock|2-6":[
      {
        id: "@id",
        downloadDescOne: "@word",
        downloadDescTwo: "@word",
        "image":'@image("50x50", "#d6d6d6", "#000000", "logo")'
      }
      ],
   });

console.log(JSON.stringify(appDownloadMock, null, 4));

export default {
  components:{
      'xf-footer': Footer,
      'xf-game-header': Header
  },

  name: 'FishingGame',
    data() {
      return {
        androidNavStatus: true,
        appleNavStatus: false,
        step: 'android',
        appAndroidDownloadItems:[],
        appAppleDownloadItems:[],
      }
    },

     created() {
      this.appDownloadDataF()
    },

    methods: {
      appDownloadDataF() {
        this.appAndroidDownloadItems=appDownloadMock.downloadAndroidMock
         this.appAppleDownloadItems=appDownloadMock.downloadAppleMock
      },

      androidTabF(){
        this.androidNavStatus = true,
        this.appleNavStatus = false,
        this.step = 'android'
      },

      appleTabF(){
        this.androidNavStatus = false,
        this.appleNavStatus = true,
        this.step = 'apple'
      },

      androidDownloadF(){
        swal("Android版下载将在几秒钟内开始.")
      },

      appleDownloadF(){
        swal("Apple版本下载将在几秒钟内开始.")
      }
    },

  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

.download-main-container{
  width: 100%;
  height: 100%;
  position: relative;

  .download-scrollable-container{
    position: absolute;
    top: 12vw;
    bottom: 0;
    background-color: #131724;
    width: 100%;
    height: 165vw;
    overflow-y: auto;
    padding-top: 3vw;
    padding-bottom: 15vw;
  }

  .download-navigation-container{
    width: 93vw;
    height: 11vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .download-navigation-left{
    width: 50%;
    height: 100%;
    background-color: #212534;
	  border-radius: 0.5vw 0vw 0vw 0.5vw;
    display: flex;
    justify-content: center;
    align-items: center;

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0vw;
    	color: #bacef1;
    }
  }

  .download-navigation-right{
    width: 50%;
    height: 100%;
    background-color: #212534;
	  border-radius: 0vw 0.5vw 0.5vw 0vw;
    display: flex;
    justify-content: center;
    align-items: center;

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0vw;
    	color: #bacef1;
    }
  }

  .activeNavigation{
    background-color: #33bcd4;
	  border-radius: 0.5vw;

    span{
      color: #ffffff;
    }
  }

  .download-containers{
    width: 93vw;
    margin: 0 auto;
    background-color: #212534;
	  border-radius: 0.5vw;
    padding: 1vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 2.5vw;
    padding: 3.5vw 3vw;
  }

  .download-logo{
    
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 4vw;

    img{
      width: 10vw;
      height: auto;
    }
  }

  .download-desc{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-family: "Microsoft YaHei";
  	font-size: 3vw;
  	font-weight: normal;
  	font-stretch: normal;
  	letter-spacing: 0.3vw;
  	color: #bacef1;
    width: 52vw;
    word-break: break-all;
    line-height: 4.5vw;
  }

  .download-button{
    width: 20vw;
    height: 8vw;
    background-color: #33bcd4;
	  border-radius: 0.5vw;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
      height: 5vw;
      width: auto;
      margin-right: 1.5vw;
    }

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.3vw;
    	color: #ffffff;
    }
  }

  .download-desc-top{
    width: 92%;
    margin-bottom: 2vw;
  }

  .download-desc-bottom{
    width: 90%;
  }
}

</style>

<style scoped>
  body,html{
    width: 100%;
    height: 100%;
  }
</style>
