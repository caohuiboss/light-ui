import Vue from 'vue'
import App from './App.vue'

import LightUI from 'light-ui-color';
import 'light-ui-color/lib/index.css'


Vue.use(LightUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
