import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/user/Login'
import RoomStatus from '../components/roomStatus/roomStatus'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'RoomStatus',
      component: RoomStatus
    }
  ]
})
