<template>
  <div class="game-console-main-container">

    <xf-game-header headerTitlePassed="游戏机"></xf-game-header>

    <div class="game-console-categories-container">
      <div class="game-console-categories-inner" :class="{gameConsoleCategoriesInnerActive: isActive('slotmachine')}" @click="setActive('slotmachine')">
        <span>老虎机</span>
      </div>

      <div class="game-console-categories-inner" :class="{gameConsoleCategoriesInnerActive: isActive('tablegames')}" @click="setActive('tablegames')">
        <span>桌面游戏</span>
      </div>

      <div class="game-console-categories-inner" :class="{gameConsoleCategoriesInnerActive: isActive('tablegames2')}" @click="setActive('tablegames2')">
        <span>桌面游戏</span>
      </div>
    </div>

    <div class="games-main-container">

    <div v-if="activeItem =='slotmachine'">
      <div class="game-console-search-bar-container">
           <input type="text" v-model="searchSlotGames" placeholder="请输入关键字" />
          <div class="game-console-search-bar">
              <img src="../../assets/images/gameconsole/search-icon.png" alt="" width="100%" height="100%">
              <span>搜索</span>
          </div>
      </div>

      <div class="game-console-scrollable-container">
        <div class="game-console-game-cards-container">
            <div class="game-console-cards-inner-container" v-if="tableGameOneItems.length">
              <div class="game-console-images-text-container" v-for="game in gamesListOne" :key="game.id">
                  <img :src="game.gameImage" alt="" width="100%" height="100%">
                  <span>{{game.gameTitle}}</span>
              </div>
            </div>
        </div>
      </div>
    </div>

    <div v-if="activeItem =='tablegames'">
      <div class="game-console-search-bar-container">
           <input type="text" v-model="searchTableGameOne" placeholder="请输入关键字" />
          <div class="game-console-search-bar">
              <img src="../../assets/images/gameconsole/search-icon.png" alt="" width="100%" height="100%">
              <span>搜索</span>
          </div>
      </div>

      <div class="game-console-scrollable-container">
        <div class="game-console-game-cards-container">
            <div class="game-console-cards-inner-container" v-if="tableGameOneItems.length">
              <div class="game-console-images-text-container" v-for="game in gamesListTwo" :key="game.id">
                  <img :src="game.gameImage" alt="" width="100%" height="100%">
                  <span>{{game.gameTitle}}</span>
              </div>
            </div>
        </div>
      </div>
    </div>

    <div v-if="activeItem =='tablegames2'">
      <div class="game-console-search-bar-container">
           <input type="text" v-model="searchTableGameTwo" placeholder="请输入关键字" />
          <div class="game-console-search-bar">
              <img src="../../assets/images/gameconsole/search-icon.png" alt="" width="100%" height="100%">
              <span>搜索</span>
          </div>
      </div>

      <div class="game-console-scrollable-container">
        <div class="game-console-game-cards-container">
            <div class="game-console-cards-inner-container" v-if="tableGameTwoItems.length">
              <div class="game-console-images-text-container" v-for="game in gamesListThree" :key="game.id">
                  <img :src="game.gameImage" alt="" width="100%" height="100%">
                  <span>{{game.gameTitle}}</span>
              </div>
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

var Mock = require('mockjs');
const Random = Mock.Random;

const slotMachineMock = Mock.mock({
    "slotMachine|60": [
      {
        id: '@id',
        gameTitle: "@word",
        gameImage: "@image('100x130', '#FFFFFF', 'Slot Machine')"
      }
    ],

    "tableGameOne|60": [
      {
        id: '@id',
        gameTitle: "@word",
        gameImage: "@image('100x130', '#FFFFFF', 'Table Game')"
      }
    ],

    "tableGameTwo|60": [
      {
        id: '@id',
        gameTitle: "@word",
        gameImage: "@image('100x130', '#FFFFFF', 'Table Game 2')"
      }
    ],
   });

console.log(JSON.stringify(slotMachineMock, null, 4));

export default {
  components:{
      'xf-game-header': Header,
      'xf-footer': Footer
  },

  name: 'GameConsole',
    data() {
      return {
        activeItem: 'slotmachine',
        searchSlotGames: null,
        searchTableGameOne: null,
        searchTableGameTwo: null,
        gameConsoleGame: 'slotMachine',

        footerGameConsoleActive: true,

        slotMachineItems:[],
        tableGameOneItems:[],
        tableGameTwoItems:[],

      }
    },

    computed: {
        gamesListOne(){
        if(this.searchSlotGames){
          return this.slotMachineItems.filter((game)=>{
            return this.searchSlotGames.toLowerCase().split(' ').every(v => game.gameTitle.toLowerCase().includes(v))
          })
        }else{
          return this.slotMachineItems;
        }
      },

      gamesListTwo(){
        if(this.searchTableGameOne){
          return this.tableGameOneItems.filter((game)=>{
            return this.searchTableGameOne.toLowerCase().split(' ').every(v => game.gameTitle.toLowerCase().includes(v))
          })
        }else{
          return this.tableGameOneItems;
        }
      },

      gamesListThree(){
        if(this.searchTableGameTwo){
          return this.tableGameTwoItems.filter((game)=>{
            return this.searchTableGameTwo.toLowerCase().split(' ').every(v => game.gameTitle.toLowerCase().includes(v))
          })
        }else{
          return this.tableGameTwoItems;
        }
      }
    },

    methods: {
      slotMachineDataF() {
        this.slotMachineItems=slotMachineMock.slotMachine
        this.tableGameOneItems=slotMachineMock.tableGameOne
        this.tableGameTwoItems=slotMachineMock.tableGameTwo
      },

      isActive(menuItem) {
        return this.activeItem === menuItem
      },

      setActive(menuItem) {
        this.activeItem = menuItem
      },
    },

    created() {
      this.slotMachineDataF()
    },
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

.game-console-main-container{
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;

  .game-console-categories-container{
    position: fixed;
    z-index: 3;
    width: 100%;
    height: 18vw;
    margin: 12vw auto 0vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:  #131724;
    padding: 0vw 5vw;
    // background-color: green;    
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

  .games-main-container{
    position: relative;
    width: 100%;
    margin: 30vw auto 0vw;
  }

  .game-console-search-bar-container{
    position: fixed;
    z-index: 3;
    height: 11.5vw;
    width: 100%;
    margin: 0 auto;
    padding: 0 4vw;
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
    right: 6vw;
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
      position: relative;
      width: 93%;
      margin: 0vw auto 15vw;
      display: flex;
      flex-wrap: wrap;
      padding-top: 13vw;
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
  body,html{
    width: 100%;
    height: 100%;
  }
</style>
