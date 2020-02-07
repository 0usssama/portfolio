import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import { routes } from './routes'

import { store } from './components/store/store'
const router = new VueRouter({
  routes,

  mode: 'history'
})
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) },
}).$mount('#app')
