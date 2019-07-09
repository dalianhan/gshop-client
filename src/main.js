import Vue from 'vue'

import App from './App'
import router from './router'
import store from './vuex/store'
import Header from './components/Header/Header.vue'
import ajax from './api/ajax'


Vue.prototype.$ajax = ajax

Vue.component('Header', Header)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
