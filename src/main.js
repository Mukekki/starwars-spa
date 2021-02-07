import Vue from 'vue'
import App from './App.vue'
import 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/js/materialize'
import './registerServiceWorker'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
