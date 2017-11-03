import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/view/register'
import Main from '../views/main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children:[
      	{path:'/coupon',component:require('../views/coupon.vue')},
      	{path:'/consume',component:require('../views/consume.vue')},
      	{path:'/stored',component:require('../views/stored.vue')},
      	{path:'/profile',component:require('../views/profile.vue')},
      	{path:'/turntable',component:require('../views/turntable.vue')},
      	{path:'/calendar',component:require('../views/calendar.vue')},
      	{path:'/integral',component:require('../views/integral.vue')}
      ]
    },
    {
      path: '/register',
      component: Register
    }
  ]
})
