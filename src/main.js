import Vue from 'vue'
import App from './App.vue'
import router from './router'
//Opcional per activar https://bootstrap-vue.org/ (cal tenir packet instalat)
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPaperPlane, faPaperclip, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

Vue.use(Autocomplete)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component("font-awesome-icon", FontAwesomeIcon);
library.add(faPaperPlane, faPaperclip, faArrowCircleRight);

import 'bootstrap/dist/css/bootstrap.css'
import './styles/general.css'
import './styles/colors.css'
import './styles/sizes.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
