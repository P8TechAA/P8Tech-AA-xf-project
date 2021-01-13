<template>
  <div class="header-title">
    <div class="header-back">
        <img src="../assets/images/games/back-arrow.png" alt="" width="100%" height="100%">
    </div>

    <span>{{headerTitle}}</span>
  </div>
</template>

<script>
export default {
  props:['headerTitlePassed'],

  data(){
    return{
      headerTitle: this.headerTitlePassed,
    }

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.header-title{
  position: relative;
  width: 100%;
  height: 12vw;
  background-color: #212534;
  display: flex;
  justify-content: center;
  align-items: center;

  span{
    font-family: "Microsoft YaHei";
    font-size: 4vw;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #bacef1;
  }
}

.header-back{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  // background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8vw;

  img{
    height: 5vw;
    width: auto;
  }
}
</style>
