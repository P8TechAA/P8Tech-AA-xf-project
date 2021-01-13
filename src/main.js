import Vue from 'vue'
import Cookies from 'js-cookie'
import 'normalize.css/normalize.css'
import './assets/styles/common.scss'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/variables.scss'
import './assets/styles/transition.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/icons'
import amfeFlexible from 'amfe-flexible/index'

// Vue Awesome Swiper - Start

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

// Vue Maruee Text - Start

import MarqueeText from 'vue-marquee-text-component'
Vue.component('marquee-text', MarqueeText)

// Vue Sweetalert
import swal from 'sweetalert';

import VueCollapse from 'vue2-collapse'
Vue.use(VueCollapse)

import axios from 'axios'

Vue.use(amfeFlexible)
Vue.use(Element, {
  size: Cookies.get('size') || 'small' // set element-ui default size
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
