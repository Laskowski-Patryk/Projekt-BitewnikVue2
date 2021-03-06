import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '/src/views/Home.vue'
import Register from '/src/views/Register.vue'
import Tournaments from '/src/views/Tournaments.vue'
import Teams from '/src/views/Teams.vue'
import addTournament from '/src/views/AddTournament.vue'
import PageNotFound from '/src/views/PageNotFound.vue'
import '/src/assets/css/global.css';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      requiresVisitor: true,
    }
    
  },
  {
    path: '/tournaments',
    name: 'Tournaments',
    component: Tournaments
  },
  {
    path: '/teams',
    name: 'Teams',
    component: Teams
  },
  {
    path: '/addtournament',
    name: 'addTournament',
    component: addTournament,
    meta: {
      requiresAuth: true,
    }
  },
  { 
    path: "/:pathMatch(.*)*", 
    component: PageNotFound,
    name: 'PageNotFound' 
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
