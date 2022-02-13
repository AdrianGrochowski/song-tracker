import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: function () {
      return import(/* webpackChunkName: "register" */ '../views/Register.vue')
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: function () {
      return import(/* webpackChunkName: "login" */ '../views/Login.vue')
    }
  },
  {
    path: '/songs',
    name: 'Songs',
    component: function () {
      return import(/* webpackChunkName: "songs" */ '../views/Songs.vue')
    }
  },
  {
    path: '/songs/create',
    name: 'Songs-create',
    component: function () {
      return import(/* webpackChunkName: "create-songs" */ '../views/CreateSong.vue')
    }
  },
  {
    path: '/songs/:songId',
    name: 'Song',
    component: function () {
      return import(/* webpackChunkName: "create-songs" */ '../views/ViewSong.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
