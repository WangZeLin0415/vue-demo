// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import store from "./components/store"
Vue.config.productionTip = false


Vue.use(ElementUI,{size:'mini'})
/* eslint-disable no-new */
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
new Vue({
  el: '#app',
  router,
  store,
  template: '<router-view/>'
})
