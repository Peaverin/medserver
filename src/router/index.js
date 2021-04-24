import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LoginForm from '@/components/LoginForm'
import RegisterForm from '@/components/RegisterForm'
import RecoverForm from '@/components/RecoverForm'
import ProductGridComponent from '@/components/ProductGridComponent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
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
      path: '/main',
      name: 'main',
      component: ProductGridComponent,
      meta: {
        header: true
      }
    }
  ]
})