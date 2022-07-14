import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ShowUsersView from '@/views/ShowUsersView.vue';
import ShowCoursesView from '@/views/ShowCoursesView.vue';
import RegisterUserView from '@/views/RegisterUserView.vue';
import LoginUserView from '@/views/LoginUserView.vue';
import AddCourseView from '@/views/AddCourseView.vue';

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
    path: '/register',
    name: 'registerUser',
    component: RegisterUserView,
  },
  {
    path: '/login',
    name: 'loginUser',
    component: LoginUserView,
  },
  {
    path: '/addCourse',
    name: 'addCourse',
    component: AddCourseView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
