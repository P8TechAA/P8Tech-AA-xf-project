<template>
  <div class="fishing-game-main-container">

    <xf-game-header headerTitlePassed="捕鱼游戏"></xf-game-header>

    <div class="fishing-game-scrollable-container">

      <div class="fishing-game-card-container">
        <div class="fishing-game-left">
          <img src="../../assets/images/games/fishing-game-img.png" alt="" width="100%" height="100%">
        </div>

        <div class="fishing-game-right">
            <p class="fishing-right-top">SW捕鱼多福</p>

            <p class="fishing-right-middle">深海3D逼真视效，时时爆机，千倍炮台，万炮齐发，满屏金币！</p>

            <span class="fishing-game-button" @click="enterTheGameF()">进入游戏</span>
        </div>
      </div>


      <div class="fishing-game-card-container">
        <div class="fishing-game-left">
          <img src="../../assets/images/games/fishing-game-img.png" alt="" width="100%" height="100%">
        </div>

        <div class="fishing-game-right">
            <p class="fishing-right-top">SW捕鱼多福累计奖池</p>

            <p class="fishing-right-middle">深海3D逼真视效，时时爆机，千倍炮台，万炮齐发，满屏金币！</p>

            <span class="fishing-game-button" @click="enterTheGameF()">进入游戏</span>
        </div>
      </div>


      <div class="fishing-game-card-container">
        <div class="fishing-game-left">
          <img src="../../assets/images/games/fishing-game-img.png" alt="" width="100%" height="100%">
        </div>

        <div class="fishing-game-right">
            <p class="fishing-right-top">SW福气水果</p>

            <p class="fishing-right-middle">深海3D逼真视效，时时爆机，千倍炮台，万炮齐发，满屏金币！</p>

            <span class="fishing-game-button" @click="enterTheGameF()">进入游戏</span>
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
      'xf-footer': Footer,
      'xf-game-header': Header
  },

  name: 'FishingPagination',
    data() {
      return {

      }
    },

    computed: {

    },

    methods: {
       enterTheGameF(){
         swal("您参加了游戏.")
       }
    },

    mounted() {

    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

.fishing-game-main-container{
  width: 100%;
  height: 100%;
  position: relative;

  .fishing-game-scrollable-container{
    position: absolute;
    top: 12vw;
    bottom: 0;
    background-color: #131724;
    width: 100%;
    height: 165vw;
    overflow-y: auto;
    padding-bottom: 15vw;
  }

  .fishing-game-card-container{
    width: 93vw;
    background-color: #212534;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 4vw 4vw;
    margin-top: 3vw;
  }

  .fishing-game-left{
    width: 41%;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
      width: 100%;
      height: auto;
    }
  }

  .fishing-game-right{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 59%;
    padding-left: 5vw;
    word-break: break-all;
  }

  .fishing-right-top{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.5vw;
    	color: #33bcd4;
      margin-top: 0vw;
      line-height: 4vw;
  }

  .fishing-right-middle{
      font-family: "Microsoft YaHei";
    	font-size: 2.5vw;
      line-height: 3.5vw;
    	font-weight: normal;
    	font-stretch: normal;
    	color: #bacef1;
      margin-top: -1.7vw;
  }

  .fishing-game-button{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.5vw;
    	color: #ffffff;
      background-color: #33bcd4;
	    border-radius: 5vw;
      text-decoration: none;
      padding: 2vw 4vw;
      margin-left: 18vw;
  }

}

</style>

<style scoped>

</style>
