import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Deng from '../components/Deng.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
     {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
     {
      path: '/Deng',
      name: 'Deng',
      component: Deng
    }
  ]
})
