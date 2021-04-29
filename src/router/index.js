import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
import LoginForm from '@/components/LoginForm'
import RegisterForm from '@/components/RegisterForm'
import RecoverForm from '@/components/RecoverForm' 
import ChooseDateTime from '@/components/ChooseDateTime'
import ChooseDestination from '@/components/ChooseDestination'
import ChoosePaymentMethod from '@/components/ChoosePaymentMethod'
import RequestPicsPrescription from '@/components/RequestPicsPrescription'
import CreditCardPaymentInfo from '@/components/CreditCardPaymentInfo'
import ProductGridComponent from '@/components/ProductGridComponent'
 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        header: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginForm,
      meta: {
        header: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterForm,
      meta: {
        header: true
      }
    },
    {
      path: '/recover',
      name: 'recover',
      component: RecoverForm,
      meta: {
        header: true
      }
    },
    {
      path: '/chooseDateTime',
      name: 'chooseDateTime',
      component: ChooseDateTime,
      meta: {
        header: true
      }
    },
    {
      path: '/chooseDestination',
      name: 'chooseDestination',
      component: ChooseDestination,
      meta: {
        header: true
      }
    },
    {
      path: '/choosePaymentMethod',
      name: 'choosePaymentMethod',
      component: ChoosePaymentMethod,
      meta: {
        header: true
      }
    },
    {
      path: '/requestPicsPresctiption',
      name: 'requestPicsPresctiption',
      component: RequestPicsPrescription,
      meta: {
        header: true
      }
    },
    {
      path: '/creditCardPaymentInfo',
      name: 'creditCardPaymentInfo',
      component: CreditCardPaymentInfo,
      meta: {
        header: true
      }
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
