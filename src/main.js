// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Axios from 'axios'
import VeeValidate from 'vee-validate'
import { store } from './_store'
// import { configureFakeBackend } from './_helpers'

Vue.config.productionTip = false

Axios.defaults.baseURL = process.env.API_ENDPOINT

Vue.use(BootstrapVue)
Vue.use(VeeValidate)

// setup fake backend
// configureFakeBackend()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
