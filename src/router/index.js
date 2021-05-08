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
import ProductGridComponent from '@/components/ProductGridComponent'
import ChatPage from '@/components/Chat'
import OrderSummary from '@/components/OrderSummary'
import OrderFinished from '@/components/OrderFinished'
import CartComponent from '@/components/CartComponent'

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
      path: '/home',
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
      path: '/requestPicsPrescription',
      name: 'requestPicsPresctiption',
      component: RequestPicsPrescription,
      meta: {
        header: true
      }
    },
    {
      path: '/products',
      name: 'products',
      component: ProductGridComponent,
      meta: {
        header: true
      }
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatPage,
      meta: {
        header: true
      }
    },
    {
      path: '/orderSummary',
      name: 'OrderSummary',
      component: OrderSummary,
      meta: {
        header: true
      }
    },
    {
      path: '/orderFinished',
      name: 'OrderFinished',
      component: OrderFinished,
      meta: {
        header: true
      }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: CartComponent,
      meta: {
        header: true
      }
    }
  ]
})
