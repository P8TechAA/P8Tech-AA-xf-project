<template>
  <div class="transfer-main-container">

    <xf-game-header headerTitlePassed="转账"></xf-game-header>

    <div class="transfer-scrollable-container">
      <div class="transfer-venues-container">
        <div class="transfer-venues-top">
          <div class="venues-central-wallet">
            <div class="central-wallet-image">
              <img src="../../assets/images/transfer/central-wallet.png" alt="" width="100%" height="100%">
            </div>

            <div class="central-wallet-text">
              <div class="central-wallet-text-top">
                中心钱包
              </div>
              <div class="central-wallet-text-bottom">
                <span class="wallet-sign">￥</span><span class="wallet-amount">{{transferMockItems.centralWallet}}</span>
              </div>
            </div>
          </div>

          <div class="venues-one-click-refresh">
            <img src="../../assets/images/transfer/one-click-refresh.png" alt="" width="100%" height="100%">
            <span>一键刷新</span>
          </div>
        </div>

        <div class="transfer-venues-hr-line"></div>

        <div class="transfer-venues-venues">
          <div class="venues-venues-inner">
            <div class="venues-venues-label">{{transferMockItems.xxSportsLabel}}</div>
            <div class="venues-venues-amount">{{transferMockItems.xxSports}}</div>
          </div>
          <div class="venues-venues-inner">
            <div class="venues-venues-label">{{transferMockItems.gamingLabel}}</div>
            <div class="venues-venues-amount">{{transferMockItems.gaming}}</div>
          </div>
          <div class="venues-venues-inner">
            <div class="venues-venues-label">{{transferMockItems.ptLabel}}</div>
            <div class="venues-venues-amount">{{transferMockItems.pt}}</div>
          </div>
           <div class="venues-venues-inner">
           <div class="venues-venues-label">{{transferMockItems.mgLabel}}</div>
            <div class="venues-venues-amount">{{transferMockItems.mg}}</div>
          </div>
        </div>

        <div class="venues-venues-show-more" @click="showMoreVenues()">
          <span>显示所有场馆</span><img src="../../assets/images/games/arrow-down.png" alt="" width="100%" height="100%">
        </div>
      </div>

      <section v-if="step=='addWithdrawal'">
        <div class="add-withdrawal-button-container" @click="addWithdrawalForm()">
          <img src="../../assets/images/transfer/add-widthdrawal.png" alt="" width="100%" height="100%">
          <span>添加银行卡</span>
        </div>
      </section>

      <section v-if="step=='addedWithdrawal'">
        <div class="transfer-transfer-container">

          <div class="transfer-transfer-top">
            <div class="withdrawal-bank-left">
              <span>提款银行 :</span>
            </div>

            <div class="withdrawal-bank-right">
              <el-select v-model="value" clearable placeholder="交通银行 - 8888">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>

          <div class="transfer-amounts-container">
            <div class="transfer-amounts-inner">
                <span @click="transferAmountF(100)">100</span>
            </div>
            <div class="transfer-amounts-inner">
                <span @click="transferAmountF(500)">500</span>
            </div>
            <div class="transfer-amounts-inner">
                <span @click="transferAmountF(1000)">1000</span>
            </div>
            <div class="transfer-amounts-inner">
                <span @click="transferAmountF(2000)">2000</span>
            </div>
            <div class="transfer-amounts-inner">
                <span @click="transferAmountF(5000)">5000</span>
            </div>
          </div>

          <div class="transfer-amount-container">
            <el-form ref="transferAmountForm" :model="transferAmountForm" :rules="transferAmountRules">
              <el-form-item prop="transferAmount">
                <el-input v-model="transferAmountForm.transferAmount" type="number" auto-complete="off" placeholder="0.00">
                  <template slot="prefix">
                    <div class="transfer-amount-prefix-container">
                      <span>￥</span>
                    </div>
                  </template>

                  <template slot="suffix">
                    <div class="transfer-amount-suffix-container">
                      <div class="maximum-amount-container" @click="transferMaxAmount()">
                        <span>最大金额</span>
                      </div>
                    </div>
                  </template>
                </el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>

        <div class="transfer-money-button" @click="submitTransferMoney()">
          <span>立即转账</span>
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
const transferMock = Mock.mock({
  transferMock:{
    "centralWallet|1-100.2": 100,
    xxSportsLabel: "XX体育",
    "xxSports|1-100.2": 100,
    gamingLabel: "电竞",
    "gaming|1-100.2": 100,
    ptLabel: "PT",
    "pt|1-100.2": 100,
    mgLabel: "MG+",
    "mg|1-100.2": 100,
  }
});

console.log(JSON.stringify(transferMock, null, 4));

export default {
  components:{
    'xf-footer': Footer,
    'xf-game-header': Header
  },

  name: 'Transfer',

  data() {
    return {
      transferMockItems:{},

      options: [{
        value: '选项1',
        label: '选项1'
      }, {
        value: '选项2',
        label: '选项2'
      }, {
        value: '选项3',
        label: '选项3'
      }, {
        value: '选项4',
        label: '选项4'
      }, {
        value: '选项5',
        label: '选项5'
      }],
      value: '',
      
      transferAmountRules: {
        transferAmount: [
          { required: true, trigger: 'blur', message: '需要轉賬金額.' },
        ],
      },

      transferAmountForm:{
          transferAmount: null,
      },

      venuesToShow: 4,

      // This is the maximum amount of money that can be transfered
      maxAmount: 5000,
      step: 'addWithdrawal',
    }
  },

  created() {
    this.transferMockF()
  },

  methods: {
    transferMockF() {
      this.transferMockItems=transferMock.transferMock
    },

    showMoreVenues(){
      this.venuesToShow += 4;
    },

    transferAmountF(amount){
      this.transferAmountForm.transferAmount = amount + ".00";
    },

    transferMaxAmount(){
      this.transferAmountForm.transferAmount = this.maxAmount + ".00";
    },

    submitTransferMoney(){
      this.$refs.transferAmountForm.validate((valid) => {
        if (valid) {
          swal("匯款-成功！");
          this.$router.push({ path: this.redirect || '/homepage' })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },

    addWithdrawalForm(){
      this.step = 'addedWithdrawal';
    }
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.transfer-main-container{
  width: 100%;
  height: 100%;
  position: relative;

  .transfer-scrollable-container{
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

  .transfer-venues-container{
    width: 93vw;
    margin: 0 auto;
    background-color: #212534;
    border-radius: 0.5vw;
    padding: 3vw 0vw;
    margin-bottom: 3vw;
  }

  .transfer-venues-top{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3vw;
  }

  .venues-central-wallet{
    width: 50%;
    border-right: 0.1vw solid #505771;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .central-wallet-image{
    width: 15vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 6vw;

    img{
      height: 5.5vw;
      width: auto;
    }
  }

  .central-wallet-text{
    width: 28vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .central-wallet-text-top{
    width: 100%;
    font-family: "Microsoft YaHei";
  	font-size: 3vw;
  	font-weight: normal;
  	font-stretch: normal;
  	letter-spacing: 0.3vw;
  	color: #bacef1;
    margin: 1vw 0vw;
  }

  .central-wallet-text-bottom{
    width: 100%;
    font-family: "Microsoft YaHei";
  	font-size: 3vw;
  	font-weight: bold;
  	font-stretch: normal;
  	letter-spacing: 0.3vw;
  	color: #33bcd4;
    word-break: break-all;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    line-height: 4vw;
  }

  .wallet-sign{
    width: 12%;
  }

  .wallet-amount{
    width: 88%;
  }

  .venues-one-click-refresh{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img{
      height: 5.5vw;
      width: auto;
      margin-left: 11vw;
      margin-right: 4vw;
    }

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.3vw;
    	color: #bacef1;
    }
  }

  .transfer-venues-hr-line{
    width: 88vw;
    height: 0.5vw;
    background-color: #505771;
    margin: 0 auto;
  }

  .transfer-venues-venues{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 4vw 4vw 0vw;
  }

  .venues-venues-inner{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
  }

  .venues-venues-label{
    width: 80%;
    display: flex;
    justify-content: center;
    font-family: "Microsoft YaHei";
  	font-size: 3vw;
  	font-weight: normal;
  	font-stretch: normal;
  	letter-spacing: 0.3vw;
  	color: #bacef1;
    word-break: break-all;
    text-align: center;
  }

  .venues-venues-amount{
    width: 80%;
    font-family: "Microsoft YaHei";
  	font-size: 3vw;
  	font-weight: bold;
  	font-stretch: normal;
  	letter-spacing: 0.4vw;
  	color: #33bcd4;
    margin: 3vw 0vw 6vw;
    word-break: break-all;
    text-align: center;
  }

  .venues-venues-show-more{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.3vw;
    	color: #bacef1;
      margin-right: 1vw;
    }

    img{
      height: 1.7vw;
      width: auto;
    }
  }

  .transfer-transfer-container{
    width: 93vw;
    margin: 0 auto;
    background-color: #212534;
    border-radius: 0.5vw;
  }

  .transfer-transfer-top{
    margin: 0 auto;
    width: 84vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

  .withdrawal-bank-left{

    display: flex;
    align-items: center;

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.3vw;
    	color: #fefeff;
    }
  }

  .transfer-amounts-container{
    width: 87vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
    flex-wrap: wrap;
  }

  .transfer-amounts-inner{
    width: 16.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.3vw;
	  border: solid 0.3vw #33bcd4;
    padding: 1.5vw 0vw;
    margin: 0vw 1.5vw 3vw;

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.3vw;
    	color: #bacef1;
    }
  }

  .transfer-amount-container{
    width: 87vw;
    margin: 6vw auto 0vw;
    padding-bottom: 4vw;
  }

  .transfer-amount-prefix-container{

    span{
      font-family: "Microsoft YaHei";
    	font-size: 5vw;
    	font-weight: bold;
    	font-stretch: normal;
    	letter-spacing: 0vw;
    	color: #33bcd4;
    }
  }

  .transfer-amount-suffix-container{
    height: 100%;
    display: flex;
    align-items: center;
  }

  .maximum-amount-container{
    background-color: #33bcd4;
	  border-radius: 0.3vw;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 21vw;
    height: 9vw;

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.3vw;
    	color: #fefefe;
    }
  }

  .transfer-money-button{
    width: 93vw;
    height: 12vw;
    background-color: #33bcd4;
    margin: 3vw auto 0vw;
    display: flex;
    justify-content: center;
    align-items: center;

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0vw;
    	color: #fefefe;
    }
  }

  .add-withdrawal-button-container{
    width: 93vw;
    height: 51vw;
    margin: 0 auto;
    background-color: #212534;
    border-radius: 0.5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
      height: 13vw;
      width: auto;
      margin-bottom: 4.5vw;
    }

    span{
      font-family: "Microsoft YaHei";
    	font-size: 3.5vw;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0.3vw;
    	color: #33bcd4;
    }
  }
}
</style>

<style scoped>
  .transfer-main-container >>> .el-form-item{
    margin: 0;
  }

  .transfer-main-container >>> .el-input__inner{
    background-color: #212534;
    border: none;
    border-bottom: 0.3vw solid #505771;
    border-radius: 0vw;
    font-family: "Microsoft YaHei";
    font-size: 3.5vw;
    color: #bacef1;
    /* background-color: orange; */
    /* letter-spacing: 0.3vw; */
    font-weight: normal;
    font-stretch: normal;
    height: 12vw;
    width: 100%;
    padding-left: 10vw;
    padding-right: 10vw;
    font-weight: bold;
  }

  .transfer-main-container >>> .el-input__prefix{
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: "Microsoft YaHei";
    color: #bacef1;
    font-size: 3vw;
    letter-spacing: 0.3vw;
    font-weight: normal;
    font-stretch: normal;
    padding-left: 1vw;
  }

  .transfer-main-container >>> input::placeholder {
    font-family: "Microsoft YaHei";
    color: #bacef1;
    font-weight: bold;
  }

  .transfer-main-container >>> .el-form-item__error{
    font-size: 2.5vw;
    margin-left: 1vw;
  }

  .transfer-main-container >>> .el-select .el-input .el-select__caret{
    font-size: 3vw;
  }

  .transfer-main-container >>> .el-input--small .el-input__icon{
    line-height: 0vw;
  }

  .transfer-main-container >>> .el-input__icon{
    width: 3vw;
    margin-right: 3vw;
  }

  .transfer-main-container >>> .el-select .el-input .el-input__inner{
    background-color: #505771;
	  border-radius: 1vw;
    height: 10vw;
    width: 65vw;
    border: none;
    padding-left: 5vw;
    padding-right: 5vw;
    font-family: "Microsoft YaHei";
    color: #fefeff;
    font-weight: normal;
    font-size: 3vw;
    letter-spacing: 0.3vw;
  }

  .transfer-main-container >>> .el-select input::placeholder {
    font-family: "Microsoft YaHei";
    color: #fefeff;
    font-weight: normal;
    font-size: 3vw;
    letter-spacing: 0.3vw;
  }

  .el-select-dropdown__item{
    font-family: "Microsoft YaHei";
    color: #505771;
    font-weight: normal;
    font-size: 3vw;
    letter-spacing: 0.3vw;
    margin: 1vw 0vw;
    font-weight: bold;
    line-height: 6vw;
    height: 6vw;
  }

  .transfer-main-container >>> .el-select{
    margin-top: 4vw;
    margin-bottom: 5vw;
  }

</style>
