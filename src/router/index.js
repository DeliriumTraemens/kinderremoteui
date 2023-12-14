import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Vitrine from "@/views/Vitrine";
import ProductDetails from "../views/ProductDetails";
import VitrineNew from "@/views/VitrineNew";
import CategoryVitrineList from "@/views/CategoryVitrineList";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Vitrine
  },
  {
    path: '/gategories',
    name: 'CategoryList',
    component: CategoryVitrineList
  },

  {
    path: '/ProductDetails',
    name: 'ProductDetails',
    component: ProductDetails
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
    path:'/vitrinenew',
    name:'vitrineNew',
    component:VitrineNew
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
