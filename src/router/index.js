import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}

const UserHome = { template: '<div>Home</div>' }
const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }

const routes = [
  // {
  //   path: '/',
  //   name: 'UserHome',
  //   component: UserHome
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/user/:id',
    component: User,
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /user/:id is matched
      { path: '', component: UserHome },

      // UserProfile will be rendered inside User's <router-view>
      // when /user/:id/profile is matched
      { path: 'profile', component: UserProfile },

      // UserPosts will be rendered inside User's <router-view>
      // when /user/:id/posts is matched
      { path: 'posts', component: UserPosts }
    ]
  },

  {
    path: '/',
    redirect:'/entry/login',
    component: () => import('../views/index/Entry.vue'),
    children: [
      { path: 'login', component: () => import('../views/index/Login.vue') },
      { path: 'register', component: () => import('../views/index/Register.vue')}
    ]
  },

  {
    path: '/entry',
    redirect:'/entry/login',
    component: () => import('../views/index/Entry.vue'),
    children: [
      { path: 'login', component: () => import('../views/index/Login.vue') },
      { path: 'register', component: () => import('../views/index/Register.vue')}
    ]
  },

  {
    path: '/homepage',
    component: () => import('../views/homepage/HomePage.vue'),
  },

  {
    path: '/discount',
    component: () => import('../views/homepage/Discount.vue'),
  },

  {
    path: '/fishingpagination',
    component: () => import('../views/personalCenter/FishingPagination.vue'),
  },

  {
    path: '/customerservice',
    component: () => import('../views/homepage/CustomerService.vue'),
  },

  {
    path: '/slotmachine',
    component: () => import('../views/homepage/SlotMachine.vue'),
  },

  {
    path: '/promotions',
    component: () => import('../views/personalCenter/Promotions.vue'),
  },

  {
    path: '/writealetter',
    component: () => import('../views/personalCenter/WriteALetter.vue'),
  },

  {
    path: '/systemnotification',
    component: () => import('../views/personalCenter/SystemNotification.vue'),
  },

  {
    path: '/changepassword',
    component: () => import('../views/personalCenter/ChangePassword.vue'),
  },

  {
    path: '/accountinformation',
    component: () => import('../views/personalCenter/AccountInformation.vue'),
  },

  {
    path: '/stationletter',
    component: () => import('../views/personalCenter/StationLetter.vue'),
  },

  {
    path: '/transactionrecord',
    component: () => import('../views/personalCenter/TransactionRecord.vue'),
  },

  {
    path: '/recoverpassword',
    component: () => import('../views/personalCenter/RecoverPassword.vue'),
  },

  {
    path: '/transfer',
    component: () => import('../views/personalCenter/Transfer.vue'),
  },

  {
    path: '/bankinformation',
    component: () => import('../views/personalCenter/BankInformation.vue'),
  },

  {
    path: '/vip',
    component: () => import('../views/homepage/VIP.vue'),
  },

  {
    path: '/appdownload',
    component: () => import('../views/personalCenter/AppDownload.vue'),
  },

  {
    path: '/personalcenter',
    component: () => import('../views/homepage/PersonalCenter.vue'),
  },

  {
    path: '/withdraw',
    component: () => import('../views/personalCenter/Withdraw.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default router
