import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/showUsers',
    name: 'showUsers',
    component: () => import('@/views/ShowUsersView.vue'),
  },
  {
    path: '/showCourses',
    name: 'showCourses',
    component: () => import('@/views/ShowCoursesView.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
