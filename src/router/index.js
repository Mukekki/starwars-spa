import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
	
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../routs/home.vue')
  },{
    path: '/planets/:pageid',
    name: 'planets',
    component: () => import('../routs/planets.vue')
  },{
    path: '/people/:pageid',
    name: 'people',
    component: () => import('../routs/people.vue')
  },{
    path: '/films/:pageid',
    name: 'films',
    component: () => import('../routs/films.vue')
  },{
    path: '/species/:pageid',
    name: 'species',
    component: () => import('../routs/species.vue')
  },{
    path: '/vehicles/:pageid',
    name: 'vehicles',
    component: () => import('../routs/vehicles.vue')
  },{
    path: '/starships/:pageid',
    name: 'starships',
    component: () => import('../routs/starships.vue')
  },{
    path: '/planet/:id',
    name: 'planetpage',
    component: () => import('../routs/planetpage.vue')
  },{
    path: '/personpage/:id',
    name: 'personpage',
    component: () => import('../routs/personpage.vue')
  },{
    path: '/filmpage/:id',
    name: 'filmpage',
    component: () => import('../routs/filmpage.vue')
  },{
    path: '/speciespage/:id',
    name: 'speciespage',
    component: () => import('../routs/speciespage.vue')
  },{
    path: '/vehiclepage/:id',
    name: 'vehiclepage',
    component: () => import('../routs/vehiclepage.vue')
  },{
    path: '/starshippage/:id',
    name: 'starshippage',
    component: () => import('../routs/starshippage.vue')
  },{
    path: '/error',
    name: 'error',
    component: () => import('../routs/error.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
