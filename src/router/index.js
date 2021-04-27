import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LoginForm from '@/components/LoginForm'
import RegisterForm from '@/components/RegisterForm'
import RecoverForm from '@/components/RecoverForm'
import ChooseDateTime from '@/components/ChooseDateTime'
import ChooseDestination from '@/components/ChooseDestination'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: LoginForm
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterForm
    },
    {
      path: '/recover',
      name: 'recover',
      component: RecoverForm
    },
    {
      path: '/chooseDateTime',
      name: 'chooseDateTime',
      component: ChooseDateTime
    },
    {
      path: '/chooseDestination',
      name: 'chooseDestination',
      component: ChooseDestination
    }
  ]
})
