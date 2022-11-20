import Vue from 'vue'
import VueRouter from 'vue-router'
import MyIndex from '../views/MyIndex.vue'
import MyVideo from '../views/MyVideo.vue'
import MyHome from '../views/MyHome.vue'
import MyMine from '../views/MyMine.vue'
import MyPosition from '../views/MyPosition.vue'
import SmallVideo from '../views/SmallVideo.vue'
import MySearch from '../views/MySearch.vue'
import MyDetail from '../views/MyDetails.vue'
import MyTicket from '../views/MyTicket.vue'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect:'/index/one'
  },
  {
    path: '/index',
    name:'index',
    component:MyIndex,
    redirect:'/index/one',
    children: [
      {
        path: "one",
        name: "one",
        component: () => import("@/views/CinemaOne.vue")
      }, 
      {
        path: "two",
        name: "two",
        component: () => import("@/views/CinemaTwo.vue")
      }, 
      {
        path:"three",
        name:"three",
        component: () => import("@/views/CinemaThree.vue")
      },
      {
        path:"four",
        name:"four",
        component: () => import("@/views/CinemaFour.vue")
      }
  ]
  },
  {
    path: '/video',
    name: 'video',
    component:MyVideo
  },
  {
    path: '/detail',
    name: 'detail',
    component:MyDetail
  },
  {
    path: '/ticket',
    name: 'ticket',
    component:MyTicket
  },
  {
    path:'/myhome',
    name:'myhome',
    component:MyHome
  },
  {
    path:'/position',
    name:'position',
    component:MyPosition
  },
  {
    path:'/search',
    name:'search',
    component:MySearch
  },
  {
    path:'/smallvideo',
    name:'smallvideo',
    component:SmallVideo
  },
  {
    path:'/mine',
    name:'mine',
    component:MyMine,
    beforeEnter: (to, from, next) => {
      // ...
      let MyID = window.localStorage.getItem("userid")
      if (MyID) {
        next();
        return
      }else {
        next("/myhome")
      }
    }
  },
  
];

const router = new VueRouter({
  made: "hash",
  base: process.env.BASE_URL,
  routes
})

export default router
