import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Reg from "../components/app/reg"
import Login from "../components/app/login"
Vue.component("Reg",Reg)
Vue.component("Login",Login)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    }
  ]
})
