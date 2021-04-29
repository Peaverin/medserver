import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LoginForm from '@/components/LoginForm'
import RegisterForm from '@/components/RegisterForm'
import RecoverForm from '@/components/RecoverForm' 
import ChooseDateTime from '@/components/ChooseDateTime'
import ChooseDestination from '@/components/ChooseDestination'
import ChoosePaymentMethod from '@/components/ChoosePaymentMethod'
import RequestPicsPrescription from '@/components/RequestPicsPrescription'
import CreditCardPaymentInfo from '@/components/CreditCardPaymentInfo'
import ProductGridComponent from '@/components/ProductGridComponent'
import Chat from '@/components/Chat'

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
        header: true,
        wizard: true,
        wizardStep: 2
      }
    },
    {
      path: '/chooseDestination',
      name: 'chooseDestination',
      component: ChooseDestination,
      meta: {
        header: true,
        wizard: true,
        wizardStep: 3
      }
    },
    {
      path: '/choosePaymentMethod',
      name: 'choosePaymentMethod',
      component: ChoosePaymentMethod,
      meta: {
        header: true,
        wizard: true,
        wizardStep: 4
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
      path: '/products',
      name: 'products',
      component: ProductGridComponent,
      meta: {
        header: true,
        wizard: true,
        wizardStep: 0
      }
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat,
      meta: {
        header: true
      }
    },
  ]
})
