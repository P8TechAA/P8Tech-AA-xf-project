<template>
  <div class="system-notification-main-container">

    <xf-game-header headerTitlePassed="写信"></xf-game-header>

    <div class="system-notification-scrollable-container">
      <div class="system-notification-accordion-container">
        <el-collapse v-model="activeName" accordion>

          <el-collapse-item title="网站优惠" name="1">
            <div>網站優惠-內容</div>
          </el-collapse-item>

          <el-collapse-item title="重要提醒" name="2">
            <div>重要提醒-內容</div>
          </el-collapse-item>

          <el-collapse-item title="变更通知" name="3">
            <div>變更通知-內容</div>
          </el-collapse-item>

          <el-collapse-item title="恭喜中大奖" name="4">
            <div>恭喜您獲勝-內容</div>
          </el-collapse-item>

          <el-collapse-item title="银行维护通知" name="5">
            <div>銀行維護通知-內容</div>
          </el-collapse-item>

          <el-collapse-item title="网站维护通知" name="6">
            <div>網站維護通知-內容</div>
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

  name: 'SystemNotification',

  data() {
    return {
      activeName: ''
    }
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.system-notification-main-container{
  width: 100%;
  height: 100%;
  position: relative;

  .system-notification-scrollable-container{
    position: absolute;
    top: 12vw;
    bottom: 0;
    background-color: #131724;
    width: 100%;
    height: 165vw;
    overflow-y: auto;
    padding-bottom: 15vw;
  }

  .system-notification-accordion-container{
    margin: 0 auto;
    margin-top: 3vw;
    width: 93vw;
  }
}
</style>

<style scoped>
  .system-notification-main-container >>> .el-collapse-item__header{
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

  .system-notification-main-container >>> .el-collapse-item__content{
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

  .system-notification-main-container >>> .el-collapse-item__wrap{
    background-color: #131724;
    border: none;
  }

  .system-notification-main-container >>> .el-collapse{
    border: none;
  }

  .system-notification-main-container >>> .el-icon-arrow-right:before {
    font-size: 5vw;
  }
</style>
