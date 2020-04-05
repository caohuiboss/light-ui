import Vue from 'vue'
import App from './App.vue'

import LightUI from '../../src/index';
// import '../../lib/index.css'
import '../../src/css/index.scss'


Vue.use(LightUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
