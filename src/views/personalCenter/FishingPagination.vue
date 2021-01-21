<template>
  <div class="fishing-game-main-container">

    <xf-game-header headerTitlePassed="捕鱼游戏"></xf-game-header>

    <div class="fishing-game-scrollable-container">
      <div v-for="i in fishingGameItems" :key="i.id" class="fishing-game-items-container">
        <div class="fishing-game-items-left">
          <img :src="i.image" class="fishing-game-i-image"/>
        </div>
        
        <div class="fishing-game-items-right">
          <div class="fishing-game-i-title">{{i.gameTitle}}</div>
          <div class="fishing-game-i-desc">{{i.gameDesc}}</div>
          <div class="fishing-game-i-button">{{i.gameButton}}</div>
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
const fishingGameMock = Mock.mock({
  "array|3": [
    {
      id: '@id',
      "gameTitle": "SW捕鱼多福",
      "gameDesc": "深海3D逼真视效，时时爆机，千倍炮台，万炮齐发，满屏金币！",
      "gameButton": "进入游戏",
      "image":'@image("200x100", "#d6d6d6")'
    }
  ],
});

console.log(JSON.stringify(fishingGameMock, null, 4));

export default {
  components:{
      'xf-game-header': Header,
      'xf-footer': Footer
  },

  name: 'FishingGame',

  data() {
    return {
        fishingGameItems:[],
    }
  },

  created() {
    this.fishingGameDataF()
  },

  methods: {
    fishingGameF(){
      swal("促销点击.")
    },

    fishingGameDataF() {
      this.fishingGameItems=fishingGameMock.array
    }
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.fishing-game-main-container{
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;

  .fishing-game-scrollable-container{
    position: relative;
    width: 93%;
    margin: 16vw auto 13vw;
    display: flex;
    flex-wrap: wrap;
  }

  .fishing-game-items-container{
    width: 100%;
    background-color: #212534;
    margin-bottom: 4vw;
    display: flex;
    padding: 4vw 4vw 3vw;
  }

  .fishing-game-items-left{
    width: 41%;
  }

  .fishing-game-i-image{
    width: 35vw;
    height: auto;
  }

  .fishing-game-items-right{
    width: 59%;
    padding: 0vw 0vw 0vw 6vw;
  }

  .fishing-game-i-title{
    width: 100%;
    font-family: "Microsoft YaHei";
    font-size: 3.5vw;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0.2vw;
    color: #33bcd4;
    word-wrap: break-word;
    margin-bottom: 1vw;
    line-height: 5vw;
  }

  .fishing-game-i-desc{
    width: 100%;
    font-family: "Microsoft YaHei";
    font-size: 2.8vw;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0vw;
    color: #bacef1;
    word-wrap: break-word;
    line-height: 5vw;
    margin-bottom: 1.5vw;
  }

  .fishing-game-i-button{
    width: 24vw;
    height: 8vw;
    background-color: #33bcd4;
    border-radius: 5vw;
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 3.4vw;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0.2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20vw;
  }
}
</style>

<style scoped>
html,body{
    width: 100%;
    height: 100%;
}
</style>
