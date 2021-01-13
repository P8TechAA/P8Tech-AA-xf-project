<template>
  <div class="transaction-record-main-container">

    <xf-game-header headerTitlePassed="交易记录"></xf-game-header>

    <div class="transaction-record-scrollable-container">
      <div class="transaction-record-accordion-container">
        <el-collapse v-model="activeName" accordion>

          <el-collapse-item name="1">
            <template slot="title">
                <img class="transaction-record-header-images" src="../../assets/images/transactionrecord/deposit-history.png" alt="" width="100%" height="100%"><span class="transaction-record-header-title">存款记录</span>
            </template>
            <div>存款记录-內容</div>
          </el-collapse-item>

          <el-collapse-item name="2">
            <template slot="title">
                <img class="transaction-record-header-images" src="../../assets/images/transactionrecord/withdrawal-records.png" alt="" width="auto" height="20vw"><span class="transaction-record-header-title">提款记录</span>
            </template>
            <div>提款记录-內容</div>
          </el-collapse-item>

          <el-collapse-item name="3">
            <template slot="title">
                <img class="transaction-record-header-images" src="../../assets/images/transactionrecord/transfer-record.png" alt="" width="auto" height="20vw"><span class="transaction-record-header-title">转账记录</span>
            </template>
            <div>转账记录-內容</div>
          </el-collapse-item>

          <el-collapse-item name="4">
            <template slot="title">
                <img class="transaction-record-header-images" src="../../assets/images/transactionrecord/account-change-records.png" alt="" width="auto" height="20vw"><span class="transaction-record-header-title">帐变记录</span>
            </template>
            <div>帐变记录-內容</div>
          </el-collapse-item>

          <el-collapse-item name="5">
            <template slot="title">
                <img class="transaction-record-header-images" src="../../assets/images/transactionrecord/refer-a-friend-record.png" alt="" width="auto" height="20vw"><span class="transaction-record-header-title">推荐好友记录</span>
            </template>
            <div>推荐好友记录-內容</div>
          </el-collapse-item>

          <el-collapse-item name="6">
            <template slot="title">
                <img class="transaction-record-header-images" src="../../assets/images/transactionrecord/rescue-gold-record.png" alt="" width="auto" height="20vw"><span class="transaction-record-header-title">救援金记录</span>
            </template>
            <div>救援金记录-內容</div>
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

  name: 'TransactionRecord',
    data() {
      return {
        activeName: ''
      }
    },

    computed: {

    },

    methods: {

    },

    mounted() {

    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

.transaction-record-main-container{
  width: 100%;
  height: 100%;
  position: relative;

  .transaction-record-scrollable-container{
    position: absolute;
    top: 12vw;
    bottom: 0;
    background-color: #131724;
    width: 100%;
    height: 165vw;
    overflow-y: auto;
    padding-bottom: 15vw;
  }

  .transaction-record-accordion-container{
    margin: 0 auto;
    margin-top: 3vw;
    width: 93vw;
  }

  .transaction-record-header-title{
    margin-left: 3.5vw;
  }

  .transaction-record-header-images{
    width: auto;
    height: 5.5vw;
  }
}

</style>

<style scoped>
  .transaction-record-main-container >>> .el-collapse-item__header{
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

  .transaction-record-main-container >>> .el-collapse-item__content{
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

  .transaction-record-main-container >>> .el-collapse-item__wrap{
    background-color: #131724;
    border: none;
  }

  .transaction-record-main-container >>> .el-collapse{
    border: none;
  }

  .transaction-record-main-container >>> .el-icon-arrow-right:before {
    font-size: 5vw;
  }
</style>
