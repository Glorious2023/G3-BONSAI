import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccountView from '../views/AccountView.vue'
import bonsaiCareView from '../views/BonsaiCareView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/account',
    name: 'account',
    component:AccountView
  },
  {
    path: '/outdoorBonsai',
    name: 'OutdoorBonsai',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/OutdoorBonsaiView.vue')
  },
  {
    path: '/indoorBonsai',
    name: 'indoorBonsai',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/IndoorBonsaiView.vue')
  },
  {
    path: '/bonsaiCare',
    name: 'bonsaiCare',
    component:bonsaiCareView
  },
  
  {
    path: '/products/:id',
    name: 'productdetail',
    component: () => import('../views/ProductDetailView.vue')
  },
  {
    path: '/basket',
    name: 'BasketView',
    component: () => import('../views/BasketView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
