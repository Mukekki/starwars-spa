import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
	
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../routs/home.vue')
  },{
    path: '/planets/',
    name: 'planets',
    component: () => import('../routs/planets.vue')
  },{
    path: '/people/',
    name: 'people',
    component: () => import('../routs/people.vue')
  },{
    path: '/films',
    name: 'films',
    component: () => import('../routs/films.vue')
  },{
    path: '/species',
    name: 'species',
    component: () => import('../routs/species.vue')
  },{
    path: '/vehicles',
    name: 'vehicles',
    component: () => import('../routs/vehicles.vue')
  },{
    path: '/starships',
    name: 'starships',
    component: () => import('../routs/starships.vue')
  },{
    path: '/planetpage/:name',
    name: 'planetpage',
    component: () => import('../routs/planetpage.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
