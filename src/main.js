import Vue from 'vue'
import App from './App.vue'
import 'materialize-css/dist/js/materialize.min.js'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
