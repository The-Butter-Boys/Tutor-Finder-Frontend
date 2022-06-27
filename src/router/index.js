import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ShowUsersView from '@/views/ShowUsersView.vue';
import ShowCoursesView from '@/views/ShowCoursesView.vue';
import AddUserView from '@/views/AddUserView.vue';

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
    component: ShowUsersView,
  },
  {
    path: '/showCourses',
    name: 'showCourses',
    component: ShowCoursesView,
  },
  {
    path: '/addUser',
    name: 'addUser',
    component: AddUserView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
