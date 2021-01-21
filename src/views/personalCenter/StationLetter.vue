<template>
  <div class="station-letter-main-container">

    <xf-game-header headerTitlePassed="站内信"></xf-game-header>

    <div class="station-letter-scrollable-container">
      <div class="station-letter-accordion-container">
        <el-collapse v-model="activeName" accordion>

          <el-collapse-item name="1">
            <template slot="title">
              <img class="station-letter-header-images" src="../../assets/images/stationletter/inbox.png" alt="" width="100%" height="100%"><span class="station-letter-header-title">收件箱</span>
            </template>
            <div>收件箱-內容</div>
          </el-collapse-item>

          <el-collapse-item name="2">
            <template slot="title">
              <img class="station-letter-header-images" src="../../assets/images/stationletter/outbox.png" alt="" width="auto" height="20vw"><span class="station-letter-header-title">发件箱</span>
            </template>
            <div>发件箱-內容</div>
          </el-collapse-item>

          <el-collapse-item name="3">
            <template slot="title">
              <img class="station-letter-header-images" src="../../assets/images/stationletter/writeAletter.png" alt="" width="auto" height="20vw"><span class="station-letter-header-title">写信</span>
            </template>
            <div>写信-內容</div>
          </el-collapse-item>

        </el-collapse>
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
    'xf-game-header': Header,
    'xf-footer': Footer
  },

  name: 'StationLetter',

  data() {
    return {
      activeName: ''
    }
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.station-letter-main-container{
  width: 100%;
  height: 100%;
  position: relative;

  .station-letter-scrollable-container{
    position: absolute;
    top: 12vw;
    bottom: 0;
    background-color: #131724;
    width: 100%;
    height: 165vw;
    overflow-y: auto;
    padding-bottom: 15vw;
  }

  .station-letter-accordion-container{
    margin: 0 auto;
    margin-top: 3vw;
    width: 93vw;
  }

  .station-letter-header-title{
    margin-left: 3.5vw;
  }

  .station-letter-header-images{
    width: auto;
    height: 5.5vw;
  }
}
</style>

<style scoped>
  .station-letter-main-container >>> .el-collapse-item__header{
    background-color: #212534;
    outline: none;
    border: none;
    margin-top: 2.5vw;
    border-radius: 0.5vw;
    font-family: "Microsoft YaHei";
  	font-size: 3vw;
  	font-weight: normal;
  	font-stretch: normal;
  	letter-spacing: 0.5vw;
  	color: #bacef1;
    padding-left: 5vw;
    padding-right: 2vw;
    height: 13vw;
    line-height: 13vw;
    transition: none;
  }

  .station-letter-main-container >>> .el-collapse-item__content{
    background-color: #212534;
    outline: none;
    border: none;
    font-family: "Microsoft YaHei";
  	font-size: 3vw;
  	font-weight: normal;
  	font-stretch: normal;
  	letter-spacing: 0.5vw;
  	color: #bacef1;
    padding: 0vw 5vw;
    height: 13vw;
    line-height: 13vw;
  }

  .station-letter-main-container >>> .el-collapse-item__wrap{
    background-color: #131724;
    border: none;
  }

  .station-letter-main-container >>> .el-collapse{
    border: none;
  }

  .station-letter-main-container >>> .el-icon-arrow-right:before {
    font-size: 5vw;
  }
</style>
