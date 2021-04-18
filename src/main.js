import Vue from 'vue'
import App from './App.vue'
import router from './router'
//Opcional per activar https://bootstrap-vue.org/ (cal tenir packet instalat)
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
