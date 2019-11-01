import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Sign from './views/Sign.vue'
import SignIn from './views/Sign/In.vue'
import SignUp from './views/Sign/Up.vue'
import Profile from './views/Profile.vue'
import Trips from './components/profile/Trips.vue'
import Orders from './components/profile/Orders.vue'
import Info from './components/profile/Info.vue'
import AdminPage from './views/AdminPage.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: Home
    },
    {
      path: '/schedules',
      name: 'schedules',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/sign',
      name: 'sign',
      component: Sign,
      children: [
        {
          path: 'up',
          name: 'signup',
          component: SignUp,
        },
        {
          path: 'in',
          name: 'signin',
          component: SignIn,
        }
      ]
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      children: [
        {
          path: '',
          name: 'trips',
          component: Trips,
        },
        {
          path: 'trips',
          name: 'trips',
          component: Trips,
        },
        {
          path: 'orders',
          name: 'orders',
          component: Orders,
        },
        {
          path: 'info',
          name: 'info',
          component: Info,
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminPage
    }
  ]
})
