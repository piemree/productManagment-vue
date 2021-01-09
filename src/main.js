import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './router'
import {store} from './storage/store'
import Vuex from "vuex";

import "animate.css"

Vue.use(Vuex)
Vue.use(VueRouter)


const router = new VueRouter({
  routes,
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
