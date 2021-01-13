<template>
  <div class="entry-container">
    <div class="txt-center">
      <img src="../../assets/images/logo.png" class="entry-logo"/>
    </div>
    <div class="entry-navigation-bar">
      <div class="entry-item" v-bind:class="[barActiveIndex === 0 ? 'active' : '']" @click="switchEntry('0', 0, 'login')">登录</div>
      <div class="entry-item" v-bind:class="[barActiveIndex === 1 ? 'active' : '']" @click="switchEntry('50%', 1, 'register')">注册</div>
      <div class="entry-active" v-bind:style="{left:entryActiveLeft}"></div>
    </div>
    <transition :name="entryChangeTransition">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Entry',
  data() {
    return {
      entryActiveLeft: 0,
      barActiveIndex: 0,
      entryChangeTransition: 'slide-left',

    }
  },
  methods: {
    switchEntry(leftValue, activeIndex, entryPath) {
      this.entryActiveLeft = leftValue
      this.barActiveIndex = activeIndex
      this.$router.push({ path: '/entry/' + entryPath })
    }
  },
  watch: {
    '$route'(to, from) {
      const toDepth = to.path.split('/')[2]
      this.entryChangeTransition = toDepth === 'register' ? 'slide-left' : 'slide-right'
    }
  },
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

.entry-container {
  width: 100%;
  height: 100%;
  background-image: url(../../assets/images/index/entry_bg.png);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-color: #131724;

  .entry-logo {
    margin-top: 22.5vw;
    width: 21.5vw;
  }

  .entry-navigation-bar {
    width: 83vw;
    height: 9vw;
    border-radius: 5vw;
    background-color: rgba(113, 125, 146, .2);
    margin: 0 auto;
    margin-top: 9vw;
    position: relative;
    display: flex;
    font-family: MicrosoftYaHei;

    .entry-item {
      width: 50%;
      font-size: 3vw;
      line-height: 8.5vw;
      text-align: center;
      color: #bacef1;
    }

    .entry-item.active {
      color: #fff;
      z-index: 300;
    }

    .entry-active {
      position: absolute;
      width: 50%;
      height: 9vw;
      background-color: rgba(51, 188, 212, .6);
      border-radius: .453rem;
      transition-duration: 500ms;
    }
  }
}
</style>
