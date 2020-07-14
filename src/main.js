import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import router from './router'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
