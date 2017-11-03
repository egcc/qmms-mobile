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
      // children:[
      // 	{path:'/coupon',component:'../views/coupon.vue'},
      // 	{path:'/consume',component:'../views/consume.vue'},
      // 	{path:'/stored',component:'../views/stored.vue'},
      // 	{path:'/profile',component:'../views/profile.vue'},
      // 	{path:'/turntable',component:'../views/turntable.vue'},
      // 	{path:'/calendar',component:'../views/calendar.vue'},
      // 	{path:'/integral',component:'../views/integral.vue'}
      // ]
    },
    {
      path: '/register',
      component: Register
    }
  ]
})
