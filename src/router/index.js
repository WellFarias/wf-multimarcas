import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/TelaHome/Home.vue'
import AppBar from '../components/AppBar'
import Veiculos from '../components/TelaVeiculos/Veiculos'
import Footer from '../components/Footer'
import SignUp from '../components/TelaLogin/SignUp'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      Home: Home,
      AppBar: AppBar,
      Footer: Footer
    }
  },
  {
    path: '/veiculos',
    name: 'Veiculos',
    components: {
     AppBar: AppBar,
     Veiculos: Veiculos, 
     Footer: Footer
    },
  },
  {
    path: '/login',
    component: SignUp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
