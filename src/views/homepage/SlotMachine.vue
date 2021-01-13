<template>
  <div class="game-console-main-container">

    <xf-game-header headerTitlePassed="游戏机"></xf-game-header>

    <div class="game-console-categories-container">
      <div class="game-console-categories-inner" :class="{gameConsoleCategoriesInnerActive:slotMachineStatus}" @click="slotMachineF">
        <span>老虎机</span>
      </div>

      <div class="game-console-categories-inner" :class="{gameConsoleCategoriesInnerActive:slotTableGamesStatus}" @click="tableGamesF">
        <span>桌面游戏</span>
      </div>

      <div class="game-console-categories-inner" :class="{gameConsoleCategoriesInnerActive:slotTableGames2Status}" @click="tableGames2F">
        <span>桌面游戏</span>
      </div>
    </div>

    <div v-if="gameConsoleGame=='slotMachine'">
      <div class="game-console-search-bar-container">
           <input type="text" v-model="searchGameConsole" placeholder="请输入关键字" />
          <div class="game-console-search-bar">
              <img src="../../assets/images/gameconsole/search-icon.png" alt="" width="100%" height="100%">
              <span>搜索</span>
          </div>
      </div>

      <div class="game-console-scrollable-container">
        <div class="game-console-game-cards-container">
            <div class="game-console-cards-inner-container" v-if="consoleGameList.length">
              <div class="game-console-images-text-container" v-for="game in gamesList">
                  <img :src="game.src" alt="" width="100%" height="100%">
                  <span>{{game.title}}</span>
              </div>
            </div>
        </div>
      </div>
    </div>

    <xf-footer :footerGameConsole="footerGameConsoleActive"></xf-footer>

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

  name: 'GameConsole',
    data() {
      return {
        searchGameConsole: null,
        consoleGameList:[
            {title:"武则天", src: require('../../assets/images/gameconsole/wuzetian.png')},
            {title:"神啊hi", src: require('../../assets/images/gameconsole/godhi.png')},
            {title:"马楼", src: require('../../assets/images/gameconsole/malou.png')},
            {title:"武则天", src: require('../../assets/images/gameconsole/wuzetian.png')},
            {title:"神啊hi", src: require('../../assets/images/gameconsole/godhi.png')},
            {title:"马楼", src: require('../../assets/images/gameconsole/malou.png')},
            {title:"武则天", src: require('../../assets/images/gameconsole/wuzetian.png')},
            {title:"神啊hi", src: require('../../assets/images/gameconsole/godhi.png')},
            {title:"马楼", src: require('../../assets/images/gameconsole/malou.png')},
            {title:"武则天", src: require('../../assets/images/gameconsole/wuzetian.png')},
            {title:"神啊hi", src: require('../../assets/images/gameconsole/godhi.png')},
            {title:"马楼", src: require('../../assets/images/gameconsole/malou.png')},
        ],

        slotMachineStatus: true,
        slotTableGamesStatus: false,
        slotTableGames2Status: false,
        gameConsoleGame: 'slotMachine',

        footerGameConsoleActive: true
      }
    },

    computed: {
        gamesList(){
        if(this.searchGameConsole){
          return this.consoleGameList.filter((game)=>{
            return this.searchGameConsole.toLowerCase().split(' ').every(v => game.title.toLowerCase().includes(v))
          })
        }else{
          return this.consoleGameList;
        }
      }
    },

    methods: {
      slotMachineF(){
        this.slotMachineStatus = true,
        this.slotTableGamesStatus = false,
        this.slotTableGames2Status = false,
        this.gameConsoleGame = 'slotMachine'
      },

      tableGamesF(){
        this.slotMachineStatus = false,
        this.slotTableGamesStatus = true,
        this.slotTableGames2Status = false,
        this.gameConsoleGame = 'tableGames'
      },

      tableGames2F(){
        this.slotMachineStatus = false,
        this.slotTableGamesStatus = false,
        this.slotTableGames2Status = true,
        this.gameConsoleGame = 'tableGames2'
      },
    },

    mounted() {

    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

.game-console-main-container{
  width: 100%;
  height: 100%;
  position: relative;

  .game-console-categories-container{
    width: 93vw;
    margin: 3.5vw auto;
    display: flex;
    justify-content: space-between;
  }

  .game-console-categories-inner{
    width: 29.5vw;
    height: 11vw;
    background-color: #212534;
	  border-radius: 6vw;
    display: flex;
    justify-content: center;
    align-items: center;

    span{
      font-family: "MicrosoftYaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.3vw;
    	color: #bacef1;
    }
  }

  .game-console-categories-inner:hover{
    cursor: pointer;
  }

  .gameConsoleCategoriesInnerActive{
    background-color: #33bcd4;

    span{
      color: #fefefe;
    }
  }


  .game-console-search-bar-container{
    width: 93vw;
    height: 11.5vw;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    input[type=text]{
      background-color: #212534;
      border: none;
      border-radius: 0.5vw;
      width: 100%;
      height: 100%;
      padding-right: 30vw;
      padding-left: 6vw;
      font-size: 3vw;
      line-height: 3vw;
      letter-spacing: 0.3vw;
      color: #bacef1;
    }

    input[type=text]:hover{
      cursor: pointer;
    }

    input:focus{
      outline: none;
    }

    input::placeholder {
    	color: #bacef1;
    }
  }

  .game-console-search-bar{
    position: absolute;
    top: 1.6vw;
    right: 2.5vw;
    width: 22vw;
    height: 8.5vw;
    background-color: #33bcd4;
	  border-radius: 0.5vw;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
      width: 4vw;
      height: auto;
      margin-right: 3vw;
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

  .game-console-scrollable-container{
      position: absolute;
      top: 41.9vw;
      bottom: 0;
      width: 100%;
      height: 135.5vw;
      overflow-y: auto;
      padding-top: 2vw;
      padding-bottom: 14vw;
  }

  .game-console-game-cards-container{
    width: 93vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  .game-console-cards-inner-container{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .game-console-images-text-container{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin: 1.7vw;

    img{
      width: 27.5vw;
      height: auto;
      margin-bottom: 2.4vw;
    }

    span{
      width: 27vw;
      text-align: center;
      font-family: "Microsoft YaHei";
    	font-size: 2.8vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.5vw;
    	color: #bacef1;
      word-break: break-all;
    }
  }

}

</style>

<style scoped>

</style>
